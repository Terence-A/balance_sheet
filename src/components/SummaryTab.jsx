const SummaryTab = ({ title, total }) => {
  console.log(total);

  return (
    <li className="flex justify-between text-md font-semibold  mt-1 border-b border-b-stone-800 w-[68%] print:w-[80%] mx-auto">
      <h2 className=" w-[50%]  ">{title}</h2>
      <p className="w-[50%] pl-80 print:pl-44">{total}</p>
    </li>
  );
};

export default SummaryTab;
