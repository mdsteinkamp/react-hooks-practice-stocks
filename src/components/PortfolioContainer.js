import React from "react";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer({ portfolioStocks }) {

  const portfolioStocksList = portfolioStocks.map(stock => (
    <PortfolioStock key={stock.id} stock={stock} />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolioStocksList}
    </div>
  );
}

export default PortfolioContainer;
