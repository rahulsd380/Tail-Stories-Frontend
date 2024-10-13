'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IMAGES, ICONS } from '../../../../../public';
import { useFollowUserMutation, useUnfollowUserMutation } from '../../../../redux/features/Auth/authApi';
import { useGetMeQuery } from '@/redux/features/Auth/authApi';
import { TUser } from './user.types';

const PeopleCard = ({ user }:{user:TUser}) => {
  const [isFollowing, setIsFollowing] = useState(false); 
  const { data, isLoading: isProfileLoading } = useGetMeQuery({});

  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  // Check if the user is already followed by the current user
  useEffect(() => {
    if (data?.data?.followings?.includes(user?._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [data, user]);

  const handleFollowUser = async () => {
    const userId = user?._id;
    try {
      const response = await followUser(userId);
      console.log(response);
      setIsFollowing(true); // Set the state to true after following
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollowUser = async () => {
    const userId = user?._id;
    try {
      const response = await unfollowUser(userId);
      console.log(response);
      setIsFollowing(false); // Set the state to false after unfollowing
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="flex items-center justify-between font-Inter border-b pb-2">
      <div className="flex items-center gap-3">
        {user?.profilePicture ? (
          <div className="size-[50px] rounded-full bg-primary-70">
            <Image
              className="size-[50px] rounded-full object-cover"
              src={IMAGES.img3}
              alt="user"
            />
          </div>
        ) : (
          <Image
            className="size-[30px] rounded-full object-cover"
            src={ICONS.user}
            alt="user-icon"
          />
        )}

        <div>
          <h1 className="text-primary-10/60 font-Lato text-xs xl:text-sm font-semibold">
            {user?.name}
          </h1>
          <p className="text-primary-10/50 text-[10px] xl:text-xs">
            {user?.occupation ? user?.occupation : 'N/A'}
          </p>
        </div>
      </div>

      {isFollowing ? (
        <button
          onClick={handleUnfollowUser}
          className="bg-red-500 px-3 py-1 text-sm rounded-3xl border text-white"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={handleFollowUser}
          className="bg-primary-60 px-3 py-1 text-sm rounded-3xl border text-primary-10"
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default PeopleCard;
