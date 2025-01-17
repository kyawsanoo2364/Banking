import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalbalanceBox from "@/components/TotalbalanceBox";

export default function Home() {
  const loggedIn = {
    firstName: "Kyaw San",
    lastName: "Oo",
    email: "skyaw6736@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            user="Guest"
            title="Welcome"
            subtext="Acess and manage your account and transcations efficiently"
          />
          <TotalbalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      />
    </section>
  );
}
