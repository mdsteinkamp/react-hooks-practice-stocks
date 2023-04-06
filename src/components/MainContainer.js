import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  // const [alphaChecked, setAlphaChecked] = useState(false)
  // const [priceChecked, setPriceChecked] = useState(false)


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(stocks => setStocks(stocks))
  }, [])

  function handleAddStock(stock) {
    setPortfolioStocks([...portfolioStocks, stock])
  }

  function handleDeleteStock(deletedStock) {
    const updatedPortfolioStocks = portfolioStocks.filter(stock => stock.id !== deletedStock.id)
    setPortfolioStocks(updatedPortfolioStocks)
  }

  function handleSort(e){
    if (e.target.value === "Alphabetically") {
      const alphaSortedStocks = [...stocks].sort((s1, s2) => {
        if (s1.name < s2.name) {
          return -1
        }
        else if (s1.name > s2.name) {
          return 1
        } else return 0
      })
      setStocks(alphaSortedStocks)
    } else if (e.target.value === "Price") {
      const priceSortedStocks = [...stocks].sort((s1, s2) => {
        if (s1.price < s2.price) {
          return -1
        }
        else if (s1.price > s2.price) {
          return 1
        } else return 0
      })
      setStocks(priceSortedStocks)
    }
  
  }
  

  return (
    <div>
      <SearchBar onSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStock={handleAddStock}  />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} onDeleteStock={handleDeleteStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
