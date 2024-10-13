'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ICONS } from "../../../../../../public";

const PostDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dots Icon */}
      <button onClick={toggleDropdown} className="focus:outline-none">
        <Image
          src={ICONS.menuDots}
          width={20}
          height={20}
          alt="menu dots"
          className="cursor-pointer"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border border-gray-200 z-10">
          <ul className="flex flex-col gap-2 p-2 text-sm text-gray-700">
            <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Edit Post</li>
            <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Delete Post</li>
            <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Hide Post</li>
            <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Save Post</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostDropdown;
