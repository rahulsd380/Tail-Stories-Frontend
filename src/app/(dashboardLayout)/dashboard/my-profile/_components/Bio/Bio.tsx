import { ICONS } from "../../../../../../../public";
import Image from 'next/image';

const Bio = () => {
    return (
        <div className="bg-white border rounded-3xl p-5 w-full h-fit font-Lato">
           <div className="flex items-center justify-between">
           <h1 className="text-primary-10/60 font-Lato text-lg font-bold">Bio</h1>
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
           <p className="text-primary-10 font-medium text-[15px]">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           </div>
        </div>
    );
};

export default Bio;