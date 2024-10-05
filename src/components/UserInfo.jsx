const UserInfo = () => {
  return (
    <section className="flex justify-evenly text-2xl font-semibold">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h2 className="font-bold">Store Name: </h2>
          <p className=" border-b border-b-stone-950 w-72 text-center ">6800</p>
        </div>
        <p className="flex gap-2">
          <label className="font-bold">Till Number:</label>
          <input
            type="number"
            className=" border-b border-b-stone-950 w-72 text-center "
          />
        </p>
      </div>
      <div className="flex flex-col gap-2  ">
        <p className=" flex gap-5 ">
          <label className="font-bold">Date: </label>
          <input
            className="w-72 text-center border-b border-b-stone-950"
            type="date"
          />
        </p>

        <p className="flex gap-2">
          <label className="font-bold">Name: </label>
          <input
            className="w-72 text-center border-b border-b-stone-950"
            type="text"
          />
        </p>
      </div>
    </section>
  );
};

export default UserInfo;
