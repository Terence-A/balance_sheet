import CashCounts from "./components/CashCounts";
import Header from "./components/Header";
import PersonalNotes from "./components/PersonalNotes";
import TotalSummary from "./components/TotalSummary";
import UserInfo from "./components/UserInfo";
import { useState } from "react";

function App() {
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

  const handleChange = (inputIdentifier, newValue) => {
    setCoinCount((prevCoinCount) => {
      return {
        ...prevCoinCount,
        [inputIdentifier]: +newValue,
      };
    });
  };

  let totalCoins = {
    nickels: coinCount.nickels * 0.05,
    dimes: coinCount.dimes * 0.1,
    quarters: coinCount.quarters * 0.25,
    loonies: coinCount.loonies * 1.0,
    toonies: coinCount.toonies * 2.0,
    fives: coinCount.fives * 5.0,
    tens: coinCount.tens * 10.0,
    twenties: coinCount.twenties * 20.0,
    fifties: coinCount.fifties * 50.0,
    hundreds: coinCount.hundreds * 100.0,
  };

  let totalCash =
    totalCoins.nickels +
    totalCoins.dimes +
    totalCoins.quarters +
    totalCoins.loonies +
    totalCoins.toonies +
    totalCoins.fives +
    totalCoins.tens +
    totalCoins.twenties +
    totalCoins.fifties +
    totalCoins.hundreds;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className=" print:text-xs print:leading-tight print-h1-sm">
        <Header />
        <UserInfo />
        <CashCounts
          totalCoins={totalCoins}
          coinCount={coinCount}
          handleChange={handleChange}
        />
        <TotalSummary totalCoins={totalCoins} totalCash={totalCash} />
        <PersonalNotes />
        <div className="text-center mt-5 print:hidden">
          <button
            className=" px-6 py-2 border-2 text-sm font-bold border-stone-900 rounded-lg"
            onClick={handlePrint}
          >
            PRINT
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
