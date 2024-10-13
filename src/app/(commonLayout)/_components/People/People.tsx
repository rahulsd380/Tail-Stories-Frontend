'use client'
import { useGetAllUsersQuery } from '@/redux/features/Auth/authApi';
import PeopleCard from './PeopleCard';
import { TUser } from './user.types';

const People = () => {
  const {data:allUsers} = useGetAllUsersQuery({});
  console.log(allUsers)

  return (
    <div className="rounded-xl bg-[#F6F7F8] p-4 border dark:bg-[#18181B] font-Lato">
     <div className="border-b pb-2 mb-4">
        <h1 className="text-lg">People You May Know</h1>
      </div>

        <div className="flex flex-col gap-3">
          {
            allUsers?.data?.map((user:TUser) => 
            <PeopleCard key={user?._id} user={user}/>
            )
          }
        </div>
      
    </div>
  );
};

export default People;
