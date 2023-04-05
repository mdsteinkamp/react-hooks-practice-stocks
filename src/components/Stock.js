import React from "react";

function Stock({ stock, onAddStock }) {

  function handleAddStock() {
    onAddStock(stock)
  }

  return (
    <div onClick={handleAddStock}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
