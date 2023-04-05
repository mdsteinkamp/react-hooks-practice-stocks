import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(stocks => setStocks(stocks))
  }, [])

  function handleAddStock(stock) {
    setPortfolioStocks([...portfolioStocks, stock])
  }
  

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStock={handleAddStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
