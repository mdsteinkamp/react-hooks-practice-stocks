import React from "react";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer({ portfolioStocks, onDeleteStock }) {

  function handleDeleteStock(stock) {
    onDeleteStock(stock)
  }

  const portfolioStocksList = portfolioStocks.map(stock => (
    <PortfolioStock key={stock.id} stock={stock} onDeleteStock={handleDeleteStock}/>
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolioStocksList}
    </div>
  );
}

export default PortfolioContainer;