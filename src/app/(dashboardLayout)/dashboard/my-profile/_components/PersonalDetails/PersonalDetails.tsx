'use client'
import { ICONS } from "../../../../../../../public";
import Image from 'next/image';
import { useState } from "react";
import Modal from '@/components/Modal/Modal';
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import { useUpdateProfileMutation } from '@/redux/features/Auth/authApi';
import { toast } from 'sonner'
import { TUser } from "@/components/Home/People/user.types";

type TDetails={
  name:string;
  email:string;
  phoneNumber:string;
  occupation:string;
  userName:string;
}

// type TPersonalDetailsProps = {
//     name:string
// }
const PersonalDetails = ({details}:{details:TUser}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TDetails>();

      const [updateProfile, {isLoading}] = useUpdateProfileMutation();

    const [openProfileDetailsUpdate, setOpenProfileDetailsUpdate] = useState<boolean>(false);
   
    const {name, email, phoneNumber, occupation, userName} = details || {};
    const userInfo = [
        {
            title: "Full Name",
            value : name? name : "N/A"
        },
        {
            title: "Email",
            value : email ? email : "N/A"
        },
        {
            title: "Phone",
            value : phoneNumber? phoneNumber : "N/A"
        },
        {
            title: "Occupation",
            value : occupation? occupation : "N/A"
        },
        {
            title: "User Name",
            value : userName? userName : "N/A"
        },
    ];

    const handleUpdateDetails = async (data:TDetails) => {
        const formData = new FormData();
        const profileUpdatedData = {
            name : data.name,
            email : data.email,
            phoneNumber : data.phoneNumber,
            occupation : data.occupation,
            userName : data.userName,
        };
        formData.append("data", JSON.stringify(profileUpdatedData));

        try{
            const response = await updateProfile(formData).unwrap();
            console.log(response);
          if(response.success) {
            toast.success('Profile updated successfully.');
            setOpenProfileDetailsUpdate(false);
          }
          }catch(err){
            console.log(err)
            return;
          }
    }

    return (
        <div className="bg-white border rounded-3xl p-5 w-full h-fit font-Lato">
           <div className="flex items-center justify-between">
           <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Personal Information</h1>
           <button onClick={() => setOpenProfileDetailsUpdate(true)} className="text-primary-10/60 font-semibold bg-white rounded-xl border px-3 py-[7px] hover:shadow transition duration-300 flex items-center gap-2">
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

           <div className="flex flex-wrap gap-3 md:gap-0 items-center justify-between mt-4">
            {
                userInfo.map((info, index) => 
                    <div key={index} className="flex flex-col gap-1">
            <p className="text-primary-10/60 font-medium text-[13px]">{info.title}</p>
            <p className="text-primary-10/60 font-semibold text-[15px]">{info.value}</p>
            </div>
                )
            }
           </div>

           <Modal
           openModal={openProfileDetailsUpdate}
        setOpenModal={setOpenProfileDetailsUpdate}
        classNames="w-full max-w-[500px] h-[400px] p-5"
           >
             {/* Heading */}
             <div className="border-b pb-2 flex items-center justify-between">
            <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Update Profile Details</h1>
            <Image
            onClick={() => setOpenProfileDetailsUpdate(false)}
                    src={ICONS.cross}
                    width={25}
                    height={25}
                    alt="icon"
                    className="cursor-pointer"
                    />
            </div>

            <form onSubmit={handleSubmit(handleUpdateDetails)} className="flex flex-col gap-4 mt-4">
            <InputField
        label="Name"
        id="name"
        type="text"
        defaultValue={name}
        placeholder="Enter your name"
        register={register("name", { required: "Name is required" })}
        error={errors.name}
      />
            <InputField
        label="Email"
        id="email"
        type="text"
        defaultValue={email}
        placeholder="Enter your email"
        register={register("email", { required: "Email is required" })}
        error={errors.name}
      />
            <InputField
        label="Phone Number"
        id="phoneNumber"
        type="text"
        defaultValue={phoneNumber}
        placeholder="Enter your phone Number"
        register={register("phoneNumber", { required: "Phone Number is required" })}
        error={errors.name}
      />
            <InputField
        label="Occupation"
        id="occupation"
        type="text"
        defaultValue={occupation}
        placeholder="Enter your Occupation"
        register={register("occupation", { required: "Occupation is required" })}
        error={errors.name}
      />
            <InputField
        label="User Name"
        id="userName"
        type="text"
        defaultValue={userName}
        placeholder="Enter your User Name"
        register={register("userName", { required: "User Name is required" })}
        error={errors.name}
      />


            <button type="submit" className="bg-primary-gradient text-white px-3 py-3 rounded-md">
                  {
                    isLoading ? "Loading" : "Update Details"
                  }
                
               </button>
                </form>

           </Modal>
        </div>
    );
};

export default PersonalDetails;