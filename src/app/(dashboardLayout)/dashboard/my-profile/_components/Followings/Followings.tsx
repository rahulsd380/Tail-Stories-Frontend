import { useGetUserByIdQuery } from "@/redux/features/Auth/authApi";
import MyFollowersCard from "../MyFollowers/MyFollowersCard";

const Followings = ({ following }: { following: string[] }) => {
  if (following.length === 0) {
    return <p>No followings yet</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {following.map((userId) => (
        <FollowingCard key={userId} userId={userId} />
      ))}
    </div>
  );
};

const FollowingCard = ({ userId }: { userId: string }) => {
  const { data: user, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <MyFollowersCard data={user?.data} />;
};

export default Followings;
