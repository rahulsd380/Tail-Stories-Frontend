'use client';
import { useForm } from "react-hook-form";
import { useUpdateProfileMutation } from '@/redux/features/Auth/authApi';
import { toast } from 'sonner'
type TLocation={
  location:string;
}

const Location = ({ location }: { location: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLocation>();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const handleUpdateLocation = async (data:TLocation) => {
    const formData = new FormData();

    const profileUpdatedData = {
      location: data.location,
    };
    formData.append("data", JSON.stringify(profileUpdatedData));

    try {
      const response = await updateProfile(formData).unwrap();
      console.log(response);
      if (response.success) {
        toast.success('Location updated successfully.');
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to update location.');
      return;
    }
  };

  return (
    <div className="bg-white border rounded-3xl p-5 w-full h-fit font-Lato">
      <div className="flex items-center justify-between">
        <h1 className="text-primary-10/60 font-Lato text-lg font-bold">
          Location
        </h1>
        {/* <button className="text-primary-10/60 font-semibold">Cancel</button> */}
      </div>

      <form onSubmit={handleSubmit(handleUpdateLocation)} className="flex items-center gap-5 mt-4">
        <input
          {...register("location", { required: "Location is required" })} // Correctly using the spread operator
          defaultValue={location ? location : ""}
          placeholder="Add your location"
          type="text"
          className="bg-primary-70 rounded-xl px-4 py-[10px] border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow w-full"
        />
        {errors.location && <span className="text-red-500">{errors.location.message}</span>} {/* Error message */}

        <button type="submit" className="text-white bg-primary-gradient font-semibold rounded-xl px-1 md:px-4 py-[10px] hover:shadow transition duration-300 w-[150px] md:w-[200px] border text-xs md:text-base">
          {isLoading ? "Loading..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default Location;
