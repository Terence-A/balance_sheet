import { useEffect, useState } from "react";

const UserInfo = () => {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-CA");
    setCurrentDate(formattedDate);
  }, []);

  return (
    <section className="flex justify-evenly font-semibold">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h2 className="font-bold">Store Name: </h2>
          <p className=" border-b border-b-stone-950 w-72 print:w-52 text-center ">
            6800
          </p>
        </div>
        <p className="flex gap-2">
          <label className="font-bold">Till Number:</label>
          <input
            type="number"
            className=" border-b border-b-stone-950 w-72 print:w-52 text-center "
          />
        </p>
      </div>
      <div className="flex flex-col gap-2  ">
        <p className=" flex gap-5 ">
          <label className="font-bold">Date: </label>
          <input
            className="w-72 print:w-52 text-center border-b border-b-stone-950"
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </p>

        <p className="flex gap-2">
          <label className="font-bold">Name: </label>
          <input
            className="w-72 print:w-52 text-center border-b border-b-stone-950"
            type="text"
          />
        </p>
      </div>
    </section>
  );
};

export default UserInfo;
