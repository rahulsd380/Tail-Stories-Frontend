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
import { useUpdatePostMutation } from "@/redux/features/Posts/postsApi";
import { toast } from "sonner";
import { TPost } from "./posts.types";

type TPostModalTypes = {
  setOpenEditPostModal:
    | ((openEditPostModal: boolean) => void | undefined)
    | undefined;
  post: TPost;
};

type TPostData = {
  title: string;
  body: string;
  images: any;
  category: string;
  contentType: string;
};

const EditPostModal: React.FC<TPostModalTypes> = ({
  setOpenEditPostModal,
  post,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPostData>();
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const [imagePreviews, setImagePreviews] = useState<string[] | []>(
    post?.images as string[]
  );

  const [updatePost, { isLoading: isCreatingPost }] = useUpdatePostMutation();
  const editor = useRef(null);
  const [content, setContent] = useState(post?.body);
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

  const handleRemoveImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle image upload
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

  const handleEditPost = async (data: TPostData) => {
    const formData = new FormData();

    const updatedPostData = {
      title: data.title,
      body: content,
      category: data.category,
      contentType: data.contentType,
    };

    formData.append("data", JSON.stringify(updatedPostData));

    for (const image of imageFiles) {
      formData.append("files", image);
    }

    console.log(formData.get("data"));
    console.log(formData.get("files"));

    try {
      const response = await updatePost({
        postId: post?._id,
        formData,
      }).unwrap();
      if (response.success) {
        toast.success("Post updated successfully.");
        if (setOpenEditPostModal) {
          setOpenEditPostModal(false);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* Heading */}
      <div className="border-b pb-2 flex items-center justify-between">
        <h1 className="text-primary-10/60 font-Lato text-lg font-bold">
          Edit Post
        </h1>

        <Image
          onClick={() => {
            if (setOpenEditPostModal) {
              setOpenEditPostModal(false);
            }
          }}
          src={ICONS.cross}
          width={25}
          height={25}
          alt="icon"
          className="cursor-pointer"
        />
      </div>

      <form
        onSubmit={handleSubmit(handleEditPost)}
        className="flex flex-col gap-4 mt-4"
      >
        <InputField
          defaultValue={post?.title}
          label="Post Title"
          id="title"
          type="text"
          placeholder="Enter your post title"
          register={register("title", { required: "Title is required" })}
          error={errors.title}
        />
        <div className="flex gap-4">
          <SelectDropdown
            defaultValue={post?.category}
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
            defaultValue={post?.contentType}
            label="Select Content Type"
            id="category"
            placeholder="Choose a content type"
            options={[
              { value: "free", label: "free" },
              { value: "premium", label: "premium" },
            ]}
            register={register("contentType", {
              required: "Content Type is required",
            })}
            error={errors.contentType}
          />
        </div>

        <div className="w-full">
          <label className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70 mb-[6px]">
            Content
          </label>
          <JoditEditor ref={editor} value={content} onChange={setContent} />
          {contentError && (
            <span className="text-warning-10 text-start">{contentError}</span>
          )}
        </div>

        <div className="bg-white border rounded-md p-3 w-full flex items-center justify-between">
          <div className="cursor-pointer">
            <label
              htmlFor="images"
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
              onChange={handleImageChange}
              multiple
              type="file"
              id="images"
              className="hidden"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-gradient text-white px-3 py-3 rounded-md"
          >
            {isCreatingPost ? "Updating..." : "Update Post"}
          </button>
        </div>

        {/* Image Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5">
          {imagePreviews.length > 0 &&
            imagePreviews.map((previewUrl, index) => (
              <div key={previewUrl} className="p-2 rounded-md border relative">
                <Image
                  width={0}
                  height={0}
                  src={previewUrl}
                  alt="image"
                  className="h-full w-full object-cover object-center rounded-md"
                />
                <Image
                  onClick={() => handleRemoveImage(index)}
                  src={ICONS.cross}
                  alt="remove-image"
                  className="absolute top-3 right-3 cursor-pointer"
                  width={25}
                  height={25}
                />
              </div>
            ))}
        </div>
      </form>
    </div>
  );
};

export default EditPostModal;
