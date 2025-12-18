import React from "react";

const ItemList = React.memo(() => {
  console.log("ItemList rendered");

  return (
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ul>
  );
});

export default ItemList;
