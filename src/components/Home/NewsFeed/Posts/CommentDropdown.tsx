'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ICONS } from "../../../../../public";

type TCommentDropdownProps ={
  setIsEditExpanded: (isExpanded: boolean) => void;
  handleDeleteComment: (commentId: string) => void;
  commentId: string;
}

const CommentDropdown : React.FC<TCommentDropdownProps>= ({setIsEditExpanded, handleDeleteComment, commentId}) => {
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
    document.addEventListener("mousedown", handleClickOutside);
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
          <ul className="flex flex-col gap-2 p-1 text-xs text-gray-700">
            <li onClick={() => {
              setIsEditExpanded(true);
              setIsOpen(false);
            }} className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Edit</li>
            <li onClick={() => handleDeleteComment(commentId)} className="hover:bg-gray-100 px-3 py-2 cursor-pointer rounded-md">Delete Comment</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentDropdown;
