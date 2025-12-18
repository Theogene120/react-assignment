import React from "react";

const ItemList = React.memo(() => {
  console.log("ItemList rendered");

  return (
    <ul className="list-disc ml-5">
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ul>
  );
});

export default ItemList;
