import { ICONS } from "../../../../../../../public";
import Image from 'next/image';

const PersonalDetails = () => {
    const userInfo = [
        {
            title: "Full Name",
            value : "Rahul Sutradhar"
        },
        {
            title: "Email",
            value : "rahul@gmail.com"
        },
        {
            title: "Phone",
            value : "+880 1608249337"
        },
    ]
    return (
        <div className="bg-white border rounded-3xl p-5 w-full h-fit font-Lato">
           <div className="flex items-center justify-between">
           <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Personal Information</h1>
           <button className="text-primary-10/60 font-semibold bg-white rounded-xl border px-3 py-[7px] hover:shadow transition duration-300 flex items-center gap-2">
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
            {
                userInfo.map((info, index) => 
                    <div key={index} className="flex flex-col gap-1">
            <p className="text-primary-10/60 font-medium text-[13px]">{info.title}</p>
            <p className="text-primary-10/60 font-semibold text-[15px]">{info.value}</p>
            </div>
                )
            }
           </div>
        </div>
    );
};

export default PersonalDetails;