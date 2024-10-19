/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import Image from "next/image";
import SelectDropdown from "@/components/SelectDropdown/SelectDropdown";
import dynamic from "next/dynamic";
import { ICONS } from "../../../../../public";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import { useRef, useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { useCreatePostMutation } from "@/redux/features/Posts/postsApi";
import { TUser } from "./Comments";
import { toast } from "sonner";

type TPostModalTypes = {
  showCrossIcon: boolean;
  setOpenPostModal?: (openPostModal: boolean) => void;
};

type TPostData = {
  title: string;
  body: string;
  images: any;
  authorId: string;
  category: string;
  contentType: string;
};

const PostModal: React.FC<TPostModalTypes> = ({
  showCrossIcon,
  setOpenPostModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPostData>();
  const user = useAppSelector(selectCurrentUser) as TUser | null;
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [createPost, { isLoading: isCreatingPost }] = useCreatePostMutation();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  useEffect(() => {
    setContentError("");
    if (content?.length === 0) {
      setContentError("");
    } else if (content?.length < 1) {
      setContentError("Content is required");
    } else {
      setContentError("");
    }
  }, [content]);

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

  const handlePost = async (data: TPostData) => {
    const formData = new FormData();

    const postData = {
      title: data.title,
      body: content,
      authorId: user?.userId,
      category: data.category,
      contentType: data.contentType,
    };

    formData.append("data", JSON.stringify(postData));

    for (const image of imageFiles) {
      formData.append("files", image);
    }

    console.log(formData.get("data"));
    console.log(formData.get("files"));

    try {
      const response = await createPost(formData).unwrap();
      console.log(response);
      if (response.success) {
        toast.success("Post created successfully.");
        if(setOpenPostModal){
          setOpenPostModal(false);
        }
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <div className="">
      {/* Heading */}
      <div className="border-b pb-2 flex items-center justify-between">
        <h1 className="text-primary-10/60 font-Lato text-lg font-bold">
          Create Post
        </h1>
        {showCrossIcon && (
          <Image
            onClick={() => {
              if (setOpenPostModal) {
                setOpenPostModal(false);
              }
            }}
            src={ICONS.cross}
            width={25}
            height={25}
            alt="icon"
            className="cursor-pointer"
          />
        )}
      </div>

      <form
        onSubmit={handleSubmit(handlePost)}
        className="flex flex-col gap-4 mt-4"
      >
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
            register={register("category", {
              required: "Category is required",
            })}
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
            register={register("contentType", {
              required: "Content Type is required",
            })}
            error={errors.category}
          />
        </div>

        <div className="w-full">
          <label className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70 mb-[6px]">
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
            <label
              htmlFor="image"
              className="flex flex-col gap-1 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={ICONS.photo}
                  width={25}
                  height={25}
                  alt="photo-icon"
                />
                Upload Image
              </div>
              <p className="text-xs text-primary-80 font-Lato">
                Image uploads limited to 2MB, video uploads up to 20MB.
              </p>
            </label>
            <input
              onChange={(e) => handleImageChange(e)}
              multiple
              type="file"
              id="image"
              className="hidden"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-gradient text-white px-3 py-3 rounded-md"
          >
            {isCreatingPost ? "Posting" : "Create Post"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5">
          {imagePreviews.length > 0 &&
            imagePreviews.map((previewUrl) => (
              <div key={previewUrl} className="p-2 rounded-md border">
                <Image
                  width={0}
                  height={0}
                  src={previewUrl}
                  alt="image"
                  className="h-full w-full object-cover object-center rounded-md"
                />
              </div>
            ))}
        </div>
      </form>
    </div>
  );
};

export default PostModal;
