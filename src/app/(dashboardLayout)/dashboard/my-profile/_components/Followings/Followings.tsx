import { useGetUserByIdQuery } from "@/redux/features/Auth/authApi";
import MyFollowersCard from "../MyFollowers/MyFollowersCard";

const Followings = ({ following }:{following:string[]}) => {
  if (following?.length === 0) {
    return <p>No followings yet</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {following?.map((data, index) => {
        const { data: user, isLoading } = useGetUserByIdQuery(data);
        
        if (isLoading) {
          return <p key={index}>Loading...</p>;
        }

        return <MyFollowersCard key={index} data={user?.data} />;
      })}
    </div>
  );
};

export default Followings;
