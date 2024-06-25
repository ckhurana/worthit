import HeaderBox from "@/components/HeaderBox";
import NetWorthBox from "@/components/NetWorthBox";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Chirag",
    lastName: "Khurana",
    email: "contact@chiragkhurana.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and investments efficiently."
          />
          <NetWorthBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 135.5 }, { currentBalance: 501.23 }]}
      />
    </section>
  );
};

export default Home;
