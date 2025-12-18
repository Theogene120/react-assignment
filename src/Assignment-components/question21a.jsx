
import React from "react";

const Child = React.memo(({ message }) => {

  return (
    <div className="my-5">
      <h3 className="text-xl font-bold">Child Component</h3>
      <p>{message}</p>
    </div>
  );
});

export default Child;
