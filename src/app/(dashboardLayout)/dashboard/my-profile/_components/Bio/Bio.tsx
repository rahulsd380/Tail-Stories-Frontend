'use client'
import { ICONS } from "../../../../../../../public";
import Image from 'next/image';
import Modal from '@/components/Modal/Modal';
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import { useUpdateProfileMutation } from '@/redux/features/Auth/authApi';
import { toast } from 'sonner'
import { useState } from "react";
type TBio={
  bio:string;
}

const Bio = ({bio} : {bio:string}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TBio>();

      const [updateProfile, {isLoading}] = useUpdateProfileMutation();

    const [openProfileDetailsUpdate, setOpenProfileDetailsUpdate] = useState<boolean>(false);

    const handleUpdateBio = async (data:TBio) => {
    const formData = new FormData();

    const profileUpdatedData = {
      bio: data.bio,
    };
    formData.append("data", JSON.stringify(profileUpdatedData));

    try {
      const response = await updateProfile(formData).unwrap();
      console.log(response);
      if (response.success) {
        toast.success('Bio updated successfully.');
        setOpenProfileDetailsUpdate(false);
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to update Bio.');
      return;
    }
  };


    return (
        <div className="bg-white border rounded-3xl p-5 w-full h-fit font-Lato">
           <div className="flex items-center justify-between">
           <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Bio</h1>
           <button onClick={() => setOpenProfileDetailsUpdate(true)}  className="text-primary-10/60 font-semibold bg-white rounded-xl border px-3 py-[7px] hover:shadow transition duration-300 flex items-center gap-2">
           <Image
          src={ICONS.edit}
          width={20}
          height={20}
          alt="edit icon"
          className=""
          />
            Edit
            </button>
           </div>

           <div className="flex items-center gap-16 mt-4">
           <p className="text-primary-10 font-medium text-[15px]">
           {bio ? bio : "No bio added."}
           </p>
           </div>

           <Modal
           openModal={openProfileDetailsUpdate}
        setOpenModal={setOpenProfileDetailsUpdate}
        classNames="w-full max-w-[500px] h-fit p-5"
           >
             {/* Heading */}
             <div className="border-b pb-2 flex items-center justify-between">
            <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Update Bio</h1>
            <Image
            onClick={() => setOpenProfileDetailsUpdate(false)}
                    src={ICONS.cross}
                    width={25}
                    height={25}
                    alt="icon"
                    className="cursor-pointer"
                    />
            </div>

            <form onSubmit={handleSubmit(handleUpdateBio)} className="flex flex-col gap-4 mt-4">
            <InputField
        label="Bio"
        id="bio"
        type="text"
        defaultValue={bio}
        placeholder="Enter your bio"
        register={register("bio", { required: "Bio is required" })}
        error={errors.bio}
      />


            <button type="submit" className="bg-primary-gradient text-white px-3 py-3 rounded-md">
                  {
                    isLoading ? "Loading..." : "Update Bio"
                  }
                
               </button>
                </form>

           </Modal>


        </div>
    );
};

export default Bio;