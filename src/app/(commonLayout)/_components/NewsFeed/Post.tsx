"use client"
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ICONS } from "../../../../../public";
import Modal from "@/components/Modal/Modal";
import InputField from "@/components/InputField/InputField";
import SelectDropdown from './../../../../components/SelectDropdown/SelectDropdown';
import JoditEditor from "jodit-react";
import { useRef, useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { useCreatePostMutation } from "@/redux/features/Posts/postsApi";
import { toast } from 'sonner'
import { TUser } from "./Posts/Comments";


type TPostData = {
  title : string,
            body : string,
            images : any,
            authorId : string,
            category : string,
            contentType:string
}

const Post = () => {
  const user = useAppSelector(selectCurrentUser) as TUser | null;
    const [imageFiles, setImageFiles] = useState<File[] | []>([])
    const [imagePreviews, setImagePreviews] = useState<string[] | []>([])
    const [createPost, {isLoading : isCreatingPost}] = useCreatePostMutation();
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [contentError, setContentError] = useState("");

    useEffect(() => {
        setContentError("");
        if (content?.length === 0) {
            setContentError("");
          }
        else if (content?.length < 1) {
            setContentError("Content is required");
          } else {
          setContentError("");
        }
      }, [content]);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TPostData>();

    const [openPostModal, setOpenPostModal] = useState<boolean>(false);
    const postIcons = [
        {
            label : "Go Live",
            icon : ICONS.live,
        },
        {
            label : "Photo",
            icon : ICONS.photo,
        },
        {
            label : "Video",
            icon : ICONS.video,
        },
        {
            label : "Feelings",
            icon : ICONS.feelings,
        },
    ];

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      
      if (file) {
        setImageFiles((prev) => [...prev, file]);
    
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      }
    };
    

    const handlePost = async (data:TPostData) => {
      const formData = new FormData();

        const postData = {
            title : data.title,
            body : content,
            authorId : user?.userId,
            category : data.category,
            contentType : data.contentType
        };

        formData.append("data", JSON.stringify(postData));

        for(let image of imageFiles){
          formData.append("files", image)
        }

        console.log(formData.get("data"))
        console.log(formData.get("files"))

        try{
            const response = await createPost(formData).unwrap();
            console.log(response);
          if(response.success) {
            toast.success('Post created successfully.');
          }
          }catch(err){
            console.log(err)
            return;
          }
    }
    return (
        <div>
            {/* Create Post box */}
            <div className="bg-[#F6F7F8] p-4 border rounded-xl font-Lato">
            <div className="flex items-center gap-3">
                {/* Profile pic */}
                <div className="size-11 rounded-full bg-primary-20"></div>
                {/* Input */}
                <input 
                onClick={() => setOpenPostModal(true)}
            placeholder="What's heppening?"
            type="text" 
            className="bg-primary-60 px-3 py-[10px] rounded-3xl border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1" />
            </div>

            <div className="flex justify-between items-center border-t-2 pt-6 mt-6">
                {
                    postIcons.map((icon, index) => 
                        <div  onClick={() => setOpenPostModal(true)} key={index} className="flex items-center gap-3 cursor-pointer">
                    <Image
                    src={icon.icon}
                    alt="icon"
                    className="size-4 md:size-[25px]"
                    />
                    <h1 className="text-sm md:text-base font-semibold text-primary-10/70">{icon.label}</h1>
                </div>
                    )
                }
            </div>
        </div>

        {/* Create post modal */}
        <Modal
        openModal={openPostModal}
        setOpenModal={setOpenPostModal}
        classNames="w-full max-w-[700px] h-[500px] p-5"
        >
            {/* Heading */}
            <div className="border-b pb-2 flex items-center justify-between">
            <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Create Post</h1>
            <Image
            onClick={() => setOpenPostModal(false)}
                    src={ICONS.cross}
                    width={25}
                    height={25}
                    alt="icon"
                    className="cursor-pointer"
                    />
            </div>

            <form onSubmit={handleSubmit(handlePost)} className="flex flex-col gap-4 mt-4">

            <InputField
        label="Post Title"
        id="title"
        type="text"
        placeholder="Enter your post title"
        register={register("title", { required: "Title is required" })}
        error={errors.title}
      />
            <div className="flex gap-4">
           
        <SelectDropdown
        label="Select Category"
        id="category"
        placeholder="Choose a category"
        options={[
          { value: "Tip", label: "Tip" },
          { value: "Story", label: "Story" },
        ]}
        register={register("category", { required: "Category is required" })}
        error={errors.category}
      />
        <SelectDropdown
        label="Select Content Type"
        id="category"
        placeholder="Choose a category"
        options={[
          { value: "free", label: "free" },
          { value: "premium", label: "premium" },
        ]}
        register={register("contentType", { required: "Content Type is required" })}
        error={errors.category}
      />
                </div>

                <div className="w-full">
                <label 
        className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70 mb-[6px]"
      >
        Content
      </label>
                <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          {contentError && (
            <span className="text-warning-10 text-start">{contentError}</span>
          )}
            </div>


            <div className="bg-white border rounded-md p-3 w-full flex items-center justify-between">
                <div className="cursor-pointer">
                <label htmlFor="image" className="flex flex-col gap-1 cursor-pointer">
                <div className="flex items-center gap-3">
                <Image
                    src={ICONS.photo}
                    width={25}
                    height={25}
                    alt="photo-icon"
                    />
                    Upload Image
                </div>
                    <p className="text-xs text-primary-80 font-Lato">Image uploads limited to 2MB, video uploads up to 20MB.</p>
                </label>
                    <input onChange={(e) => handleImageChange(e)} multiple type="file" id="image" className="hidden" />
                </div>
                <button type="submit" className="bg-primary-gradient text-white px-3 py-3 rounded-md">
                  {
                    isCreatingPost ? "Posting" : "Create Post"
                  }
                
               </button>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5">
            {
              imagePreviews.length > 0 &&
              imagePreviews.map(previewUrl => 
                <div key={previewUrl} className="p-2 rounded-md border">
                  <img src={previewUrl} alt="image" className="h-full w-full object-cover object-center rounded-md" />
                </div>
              )
            }
            </div>
                </form>
        </Modal>
        </div>
    );
};

export default Post;