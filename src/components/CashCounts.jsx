import CoinTab from "./CoinTab";
import TotalTab from "./TotalTab";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const CashCounts = ({ totalCoins, coinCount, handleChange }) => {
  return (
    <section className="mt-10">
      <header className="ml-[20%] text-xl font-extrabold mb-10">
        Money Tray Count
      </header>
      <div className="flex justify-around text-lg font-semibold w-[80%]  mx-auto ">
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
            <TotalTab total={formatter.format(totalCoins.nickels)} />
            <TotalTab total={formatter.format(totalCoins.dimes)} />
            <TotalTab total={formatter.format(totalCoins.quarters)} />
            <TotalTab total={formatter.format(totalCoins.loonies)} />
            <TotalTab total={formatter.format(totalCoins.toonies)} />
            <TotalTab total={formatter.format(totalCoins.fives)} />
            <TotalTab total={formatter.format(totalCoins.tens)} />
            <TotalTab total={formatter.format(totalCoins.twenties)} />
            <TotalTab total={formatter.format(totalCoins.fifties)} />
            <TotalTab total={formatter.format(totalCoins.hundreds)} />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CashCounts;
