import CashCounts from "./components/CashCounts";
import Header from "./components/Header";
import PersonalNotes from "./components/PersonalNotes";
import UserInfo from "./components/UserInfo";
import TotalSummary from "./TotalSummary";

function App() {
  return (
    <>
      <main>
        <Header />
        <UserInfo />
        <CashCounts />
        <TotalSummary />
        <PersonalNotes />
      </main>
    </>
  );
}

export default App;
