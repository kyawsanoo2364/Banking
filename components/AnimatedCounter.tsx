"use client";

import CounterUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CounterUp end={amount} prefix="$" decimal="," decimals={2} />
    </div>
  );
};
export default AnimatedCounter;
