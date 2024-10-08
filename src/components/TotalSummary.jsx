import { useState } from "react";
import SummaryButtonTab from "./SummaryButtonTab";
import SummaryTab from "./SummaryTab";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TotalSummary = ({ totalCash }) => {
  const [totals, setTotals] = useState({
    cheque: 0,
    creditCards: 0,
    netReceived: 0,
  });

  let cashDeposit = formatter.format(totalCash - 200);
  let totalMoney = formatter.format(
    totals.cheque + totals.creditCards + totalCash - 200
  );
  let shortOrOver =
    totals.cheque + totals.creditCards + totalCash - 200 - totals.netReceived;

  const handleInput = (inputIdentifier, newAmount) => {
    setTotals((prevTotals) => {
      return {
        ...prevTotals,
        [inputIdentifier]: +newAmount,
      };
    });
    console.log(formatter.format(newAmount));
  };

  return (
    <section className="mt-10">
      <ol>
        <SummaryTab title="A. TOTAL CASH" total={formatter.format(totalCash)} />
        <SummaryTab
          title="B. Cash left in till"
          total={formatter.format(200)}
        />
        <SummaryTab title="C. Total Cash for DEPOSIT" total={cashDeposit} />

        <SummaryButtonTab
          title="D. Total Cheque"
          totals={totals.cheque}
          identifier="cheque"
          handleInput={handleInput}
        />
        <SummaryButtonTab
          title="E. Total CREDIT CARDS"
          totals={totals.creditCards}
          identifier="creditCards"
          handleInput={handleInput}
        />
        <SummaryTab title="F. Total MONEY (C + D + E)" total={totalMoney} />
        <SummaryButtonTab
          title="G. Net Received (Drawer Management Total)"
          totals={totals.netReceived}
          identifier="netReceived"
          handleInput={handleInput}
        />
        <SummaryTab
          title="H. Short or Over"
          total={formatter.format(shortOrOver)}
        />
        <SummaryTab title="I. Paid Outs" total={0} />
      </ol>
    </section>
  );
};

export default TotalSummary;
