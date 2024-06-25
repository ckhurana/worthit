import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoghnutChart from "./DoghnutChart";

const NetWorthBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoghnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Balance Label</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter end={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetWorthBox;
