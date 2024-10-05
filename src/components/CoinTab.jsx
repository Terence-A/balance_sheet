const CoinTab = ({ coinTitle, coinAmount, coinName, handleChange }) => {
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <li>
      <p className="flex my-2 gap-2 ">
        <label className="w-20">{coinTitle}</label>
        <input
          type="number"
          value={coinAmount}
          onChange={(e) => handleChange(coinName, e.target.value)}
          onFocus={handleFocus}
          className="w-20 ml-10  font-bold"
        />
      </p>
    </li>
  );
};

export default CoinTab;
