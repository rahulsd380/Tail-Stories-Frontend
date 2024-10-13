"use client";
import MyFollowersCard from "./MyFollowersCard";
import { useGetUserByIdQuery } from "@/redux/features/Auth/authApi";

const MyFollowers = ({ followers }:{followers:string[]}) => {
  if (followers?.length === 0) {
    return <p>No followers yet</p>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {followers?.map((follower, index) => {
        const { data: user, isLoading } = useGetUserByIdQuery(follower);
        if(isLoading){
            return <p>Loading</p>
        }
        console.log(user)

        return <MyFollowersCard key={index} data={user?.data} />;
      })}
    </div>
  );
};

export default MyFollowers;
