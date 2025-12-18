import React from "react";

const StaticUI = React.memo(() => {
  console.log("StaticUI rendered");

  return (
    <div>
      <h2>Welcome to the Live Clock App</h2>
      <p>This text should NOT re-render every second.</p>
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

  return <h3>Current Time: {time.toLocaleTimeString()}</h3>;
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



