import SummaryTab from "./SummaryTab";

const TotalSummary = () => {
  return (
    <section className="mt-10">
      <ol>
        <SummaryTab title="A. TOTAL CASH" total={0} />
        <SummaryTab title="B. Cash left in till" total={200} />
        <SummaryTab title="C. Total Cash for DEPOSIT" total={0} />
        <SummaryTab title="D. Total Cheque" total={0} />
        <SummaryTab title="E. Total CREDIT CARDS" total={0} />
        <SummaryTab title="F. Total MONEY (C + D + E)" total={0} />
        <SummaryTab
          title="G. Net Received (Drawer Management Total)"
          total={0}
        />
        <SummaryTab title="H. Short or Over" total={0} />
        <SummaryTab title="I. Paid Outs" total={0} />
      </ol>
    </section>
  );
};

export default TotalSummary;
