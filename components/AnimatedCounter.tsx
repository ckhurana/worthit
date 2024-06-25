"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({
  end,
  prefix = "Rs. ",
}: {
  end: number;
  prefix?: string;
}) => {
  return (
    <div className="w-full">
      <CountUp
        decimal="."
        prefix={prefix}
        decimals={2}
        end={end}
        duration={0.8}
      />
    </div>
  );
};

export default AnimatedCounter;
