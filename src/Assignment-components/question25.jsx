import React from "react";

const StaticUI = React.memo(() => {
  console.log("StaticUI rendered");

  return (
    <div className="ml-10">
      <p className="my-10  text-xl -ml-10 font-bold underline">Question 25</p>
      <h2 className="text-2xl font-bold">Welcome to the Live Clock App</h2>
      <p className="font-semibold">This text should NOT re-render every second.</p>
    </div>
  );
});


import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h3 className="ml-10 font-bold">Current Time: {time.toLocaleTimeString()}</h3>;
}



function LiveTimeApp() {
  return (
    <div>
      <StaticUI />
      <Clock />
    </div>
  );
}

export default LiveTimeApp;



