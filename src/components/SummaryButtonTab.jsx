const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const handleFocus = (e) => {
  e.target.select();
};

const SummaryButtonTab = ({ title, handleInput, totals, identifier }) => {
  return (
    <li className="flex justify-between text-md font-semibold  mt-2 border-b border-b-stone-800 w-[68%] mx-auto">
      <h2 className=" w-[50%]  ">{title}</h2>
      <p className="w-[50%] pl-80">
        $
        <input
          type="number"
          value={totals}
          onFocus={handleFocus}
          onChange={(e) => handleInput(identifier, e.target.value)}
          className="w-36  "
        />
      </p>
    </li>
  );
};

export default SummaryButtonTab;
