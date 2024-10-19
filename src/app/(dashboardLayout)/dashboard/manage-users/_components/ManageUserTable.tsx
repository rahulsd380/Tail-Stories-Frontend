/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineChangeCircle } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useChangeUserRoleToAdminMutation, useChangeUserRoleToUserMutation, useGetAllUsersQuery, useDeleteUserMutation } from '@/redux/features/Auth/authApi';
import { toast } from "sonner";
import { TUser } from '@/components/Home/People/user.types';

const ManageUserTable = () => {
  // Dropdown state
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener('mousedown', closeDropdown);
    return () => document.removeEventListener('mousedown', closeDropdown);
  }, []);

  const {data:users} = useGetAllUsersQuery({});
  const [changeUserRoleToAdmin] =useChangeUserRoleToAdminMutation();
  const [changeUserRoleToUser] =useChangeUserRoleToUserMutation();
  const [deleteUser] =useDeleteUserMutation();

  const handleMakeAdmin = async (userId: string) => {
    toast.promise(
      changeUserRoleToAdmin(userId).unwrap(),
      {
        loading: "Promoting user to admin...",
        success: "User role updated to admin!",
        error: "Failed to update user role to admin",
      }
    );
  };

  const handleMakeUser = async (userId: string) => {
    toast.promise(
      changeUserRoleToUser(userId).unwrap(),
      {
        loading: "Demoting user to regular user...",
        success: "User role updated to user!",
        error: "Failed to update user role to user",
      }
    );
  };

  const handleDeleteUser = async (userId: string) => {
    toast.promise(
      deleteUser(userId).unwrap(),
      {
        loading: "Deleting user...",
        success: "User deleted successfully!",
        error: "Failed to delete user",
      }
    );
  };

  return (
    <div className="w-full p-4">
        
        <h1 className="text-primary-10 font-Lato text-3xl font-bold mb-5">Manage Users</h1>
      <table className="min-w-full border-collapse mt-4">
        {/* Table header with rounded corners */}
        <thead className="bg-primary-gradient text-white text-sm rounded-t-xl">
          <tr className="">
            <th className="py-3 px-4 text-left rounded-tl-xl">User Name</th>
            <th className="py-3 px-4 text-left">User Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Occupation</th>
            <th className="py-3 px-4 text-left">Role</th>
            <th className="py-3 px-4 text-left rounded-tr-xl">Action</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {users?.data?.map((user:TUser, idx:number) => (
            <tr key={user?._id} className="border-b bg-gray-50">
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.userName}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.occupation ? user.occupation : "N/A"}</td>
              <td className="py-3 px-4">{user.role}</td>
              <td className="py-3 px-4 relative">
                <button
                  onClick={() => setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)}
                  className="text-xl"
                >
                  <HiOutlineDotsVertical  />
                </button>
                
                {openDropdownIndex === idx && (
                  <ul ref={dropdownRef} className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40 z-50">
                    <li onClick={() => handleDeleteUser(user?._id)} className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <FaTrashAlt className="text-red-500" />
                      Delete
                    </li>
                    
                    {
                        user?.role === "user" ?
                        <li onClick={() => handleMakeAdmin(user?._id)} className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <MdOutlineChangeCircle className="text-blue-500" />
                      Make Admin
                    </li>
                    :
                    <li onClick={() => handleMakeUser(user?._id)} className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <MdOutlineChangeCircle className="text-blue-500" />
                      Make User
                    </li>
                      }
                    
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUserTable;
