import React from "react";

function PortfolioStock({ stock, onDeleteStock }) {

  function handleDeleteStock() {
    onDeleteStock(stock)
  }

  return (
    <div onClick={handleDeleteStock}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default PortfolioStock;
