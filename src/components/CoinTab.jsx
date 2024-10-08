const CoinTab = ({ coinTitle, coinAmount, coinName, handleChange }) => {
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <li>
      <p className="flex my-1 gap-2 ">
        <input
          type="number"
          value={coinAmount}
          onChange={(e) => handleChange(coinName, e.target.value)}
          onFocus={handleFocus}
          className="w-12 ml-20  font-bold"
        />
        <label className="w-20">{coinTitle}</label>
      </p>
    </li>
  );
};

export default CoinTab;
