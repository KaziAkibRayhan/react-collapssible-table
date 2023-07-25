import React, { useState } from "react";
import rabbit_tortoise from "../../assets/rabbit-tortoise.png";

const HeaderColumn = ({ label }) => {
  return <div className="hcol">{label}</div>;
};

const RowContent = ({ open, handleContentClick }) => {
  return (
    <div className={`content ${open ? "open" : ""} bg-[#F6F7F8]`} onClick={handleContentClick}>
      <div className="w-full h-full flex justify-between items-center p-3 box-border space-x-1">
        <div className="w-[20%] h-[170px] bg-white rounded flex justify-center items-center flex-col space-y-3">
          <div className="flex justify-center items-center gap-5">
            <div className="bg-[#01C94C] w-[45px] h-[45px] rounded-[50%] flex justify-center items-center">
              <img className="w-20 h-20" src={rabbit_tortoise} alt="rabbit_tortoise" />
            </div>
            <div>
              <h3 className="p-0 m-0 text-base">GunnerFx</h3>
              <p className="p-0 m-0 text-xs flex justify-start items-center">
                <span>
                  <svg height="14px" id="Layer_1" version="1.2" viewBox="0 0 24 24" style={{ fill: "#01C94C" }} width="14px" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <g>
                        <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
                      </g>
                    </g>
                  </svg>
                </span>
                <span>Higher achiever</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button type="button" className="h-8 w-56 border-none bg-[#01C94C] hover:bg-[#52b979] cursor-pointer rounded text-white text-[11px]">
              SET UP COPYING
            </button>
          </div>
          <div className="flex justify-center items-center text-xs">
            <span>Minimum investment</span> <span className="ml-1 font-bold">$25</span>
          </div>
        </div>
        <div className="w-[10%] bg-slate-400">data 2</div>
        <div className="w-[30%] bg-slate-400">data 3</div>
        <div className="w-[20%] bg-slate-400">data 4</div>
        <div className="w-[20%] bg-slate-400">data 5</div>
      </div>
    </div>
  );
};

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

const Table = ({ data, columns, headerFixed }) => {
  const [openRowIndex, setOpenRowIndex] = useState(null);
  const header = columns.map((item, inx) => {
    return <HeaderColumn key={inx} label={item.label} />;
  });

  const rows = data.map((item, inx) => {
    const isOpen = inx === openRowIndex;
    return <RowItem key={item.id} index={inx} isOpen={isOpen} setOpenRowIndex={setOpenRowIndex} {...item} />;
  });

  const headerClass = headerFixed ? "header fixed" : "header";

  return (
    <div className="table">
      <div className={headerClass}>{header}</div>
      <ul>{rows}</ul>
    </div>
  );
};

export default Table;
