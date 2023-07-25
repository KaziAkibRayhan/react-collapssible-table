import React from "react";
import RowContent from "./RowContent";

const RowItem = ({ index, isOpen, setOpenRowIndex, expertTrader, risk_score, leverage, group, trade, instrument, volume, open_price, open_time, profit_loss, copy, action }) => {
  const toggleRow = () => {
    setOpenRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li onClick={toggleRow} className={isOpen ? "open" : ""}>
      <div className="heading">
        <div className="col">{expertTrader}</div>
        <div className="col">{risk_score}</div>
        <div className="col">{leverage}</div>
        <div className="col">{group}</div>
        <div className="col">{trade}</div>
        <div className="col">{instrument}</div>
        
        <div className="col">{volume}</div>
        <div className="col">{open_price}</div>
        <div className="col">{open_time}</div>
        <div className="col">{profit_loss}</div>
        <div className="col">{copy}</div>
        <div className="col">{action}</div>
      </div>
      <RowContent open={isOpen} handleContentClick={handleContentClick} />
    </li>
  );
};

export default RowItem;
