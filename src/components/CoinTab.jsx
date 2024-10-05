const CoinTab = ({ coinTitle, coinAmount, setCoinCount }) => {
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <li>
      <p>
        <label className="w-20">{coinTitle}</label>
        <input
          type="number"
          value={coinAmount}
          onChange={(e) => handleChange(coinName, e.target.value)}
          onFocus={handleFocus}
        />
      </p>
    </li>
  );
};

export default CoinTab;
