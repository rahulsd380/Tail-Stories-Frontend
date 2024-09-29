import Image from 'next/image';
import React from 'react';
import { ICONS } from '../../../../../public';

const CategoryFilter = () => {
    const categories = [
        "Pets Care",
        "Adventure Travel",
        "Cultural Tours",
        "Luxury Escapes",
        "Budget-Friendly Trips",
      ];
    return (
      <div className='bg-[#F6F7F8] p-4 border rounded-xl font-Lato'>
        <div className="border-b pb-2">
      <h1 className="text-lg">Categories</h1>
      </div>
        <div className="flex flex-col gap-2 mt-4">
    {categories.map((category, index) => (
      <button
        key={index}
        className="bg-primary-70 text-primary-10/70 font-medium flex items-center justify-between text-[15px] rounded-md px-3 py-3 w-full"
      >
        <div className="flex items-center gap-2">
          <Image
          src={ICONS.pet}
          width={20}
          height={20}
          alt="pet"
          />
        <h1>{category}</h1>
        </div>
        <h1>26</h1>
      </button>
    ))}
    </div>
      </div>
    );
};

export default CategoryFilter;