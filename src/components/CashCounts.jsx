import { useState } from "react";
import CoinTab from "./CoinTab";

const CashCounts = () => {
  const [coinCount, setCoinCount] = useState({
    nickels: 0,
    dimes: 0,
    quarters: 0,
    loonies: 0,
    toonies: 0,
    fives: 0,
    tens: 0,
    twenties: 0,
    fifties: 0,
    hundreds: 0,
  });

  let totalCoin = coinCount.nickels * 0.05;

  const handleChange = ({ inputIdentifier, newValue }) => {
    setCoinCount = (prevCoinCount) => {
      return {
        ...prevCoinCount,
        [inputIdentifier]: +newValue,
      };
    };
  };
  return (
    <section className="mt-10">
      <header className="ml-56 text-2xl font-semibold mb-10">
        Money Tray Count
      </header>
      <div className="flex justify-evenly text-xl font-semibold">
        <div>
          <ol>
            <CoinTab
              coinTitle="X .05"
              coinName="nickels"
              coinValue={coinCount.nickels}
              handleChange={handleChange}
            />
          </ol>
        </div>
        <div>
          <ol>
            <li>
              <p>{coinCount.nickels}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CashCounts;
