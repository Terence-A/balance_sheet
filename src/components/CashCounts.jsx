import { useState } from "react";
import CoinTab from "./CoinTab";
import TotalTab from "./totalTab";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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

  //   let totalCoin = coinCount.nickels * 0.05;

  const handleChange = (inputIdentifier, newValue) => {
    setCoinCount((prevCoinCount) => {
      return {
        ...prevCoinCount,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <section className="mt-10">
      <header className="ml-[20%] text-2xl font-extrabold mb-10">
        Money Tray Count
      </header>
      <div className="flex justify-around text-xl font-semibold w-[80%]  mx-auto ">
        <div className="w-[50%] ml-60 ">
          <ol>
            <CoinTab
              coinTitle="X .05"
              coinName="nickels"
              coinAmount={coinCount.nickels}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X .10"
              coinName="dimes"
              coinAmount={coinCount.dimes}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X .25"
              coinName="quarters"
              coinAmount={coinCount.quarters}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 1.00"
              coinName="loonies"
              coinAmount={coinCount.loonies}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 2.00"
              coinName="toonies"
              coinAmount={coinCount.toonies}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 5.00"
              coinName="fives"
              coinAmount={coinCount.fives}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 10.00"
              coinName="tens"
              coinAmount={coinCount.tens}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 20.00"
              coinName="twenties"
              coinAmount={coinCount.twenties}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 50.00"
              coinName="fifties"
              coinAmount={coinCount.fifties}
              handleChange={handleChange}
            />
            <CoinTab
              coinTitle="X 100.00"
              coinName="hundreds"
              coinAmount={coinCount.hundreds}
              handleChange={handleChange}
            />
          </ol>
        </div>
        <div className="w-[50%] pl-72 ">
          <ol>
            <TotalTab total={formatter.format(coinCount.nickels * 0.05)} />
            <TotalTab total={formatter.format(coinCount.dimes * 0.1)} />
            <TotalTab total={formatter.format(coinCount.quarters * 0.25)} />
            <TotalTab total={formatter.format(coinCount.loonies * 1.0)} />
            <TotalTab total={formatter.format(coinCount.toonies * 2.0)} />
            <TotalTab total={formatter.format(coinCount.fives * 5.0)} />
            <TotalTab total={formatter.format(coinCount.tens * 10.0)} />
            <TotalTab total={formatter.format(coinCount.twenties * 20.0)} />
            <TotalTab total={formatter.format(coinCount.fifties * 50.0)} />
            <TotalTab total={formatter.format(coinCount.hundreds * 100.0)} />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CashCounts;
