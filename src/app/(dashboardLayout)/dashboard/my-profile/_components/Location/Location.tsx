const Location = () => {
  return (
    <div className="bg-white border rounded-3xl p-5 w-full h-fit font-Lato">
      <div className="flex items-center justify-between">
        <h1 className="text-primary-10/60 font-Lato text-lg font-bold">
          Location
        </h1>
        <button className="text-primary-10/60 font-semibold">Cancel</button>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <input
          defaultValue={"Cumilla"}
          placeholder="Add your location"
          type="text"
          className="bg-primary-70 rounded-xl px-4 py-[10px] border border-primary-30 focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow w-full"
        />

        <button className="text-white bg-primary-gradient font-semibold rounded-xl px-4 py-[10px] hover:shadow transition duration-300 w-[200px] border">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Location;
