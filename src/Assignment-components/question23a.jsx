import React from "react";

const HeavyCalculation = React.memo(({ number }) => {

  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += number;
  }

  // The above heavy calculation won't rendered everytime parent rendered

  return (
    <div>
      <h3 className="text-xl font-bold">Heavy Calculation Result</h3>
      <p>{result}</p>
    </div>
  );
});

export default HeavyCalculation;
