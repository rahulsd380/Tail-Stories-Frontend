"use client";
import MyFollowersCard from "./MyFollowersCard";
import { useGetUserByIdQuery } from "@/redux/features/Auth/authApi";

const MyFollowers = ({ followers }: { followers: string[] }) => {
  if (followers.length === 0) {
    return <p>No followers yet</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {followers.map((followerId) => (
        <FollowerCard key={followerId} followerId={followerId} />
      ))}
    </div>
  );
};

const FollowerCard = ({ followerId }: { followerId: string }) => {
  const { data: user, isLoading } = useGetUserByIdQuery(followerId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <MyFollowersCard data={user?.data} />;
};

export default MyFollowers;
