const SummaryTab = ({ title, total }) => {
  console.log(total);

  return (
    <li className="flex justify-between text-xl font-semibold  mt-2 border-b-2 border-b-stone-800 w-[62%] mx-auto">
      <h2 className=" w-[50%]  ">{title}</h2>
      <p className="w-[50%] pl-96">{total}</p>
    </li>
  );
};

export default SummaryTab;
