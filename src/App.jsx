import CashCounts from "./components/CashCounts";
import Header from "./components/Header";
import PersonalNotes from "./components/PersonalNotes";
import TotalSummary from "./components/TotalSummary";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <main>
        <Header />
        <UserInfo />
        <CashCounts />
        <TotalSummary />
        <PersonalNotes />
        <div className="text-center mt-10">
          <button className="w-32 px-8 py-2 border-2 text-xl font-bold border-stone-900 rounded-lg ">
            PRINT
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
