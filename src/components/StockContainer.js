import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock}) {

  function handleAddStock(stock) {
   onAddStock(stock)
  }

  const stocksList = stocks.map(stock => (
    <Stock key={stock.id} stock={stock} onAddStock={handleAddStock}/>
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
