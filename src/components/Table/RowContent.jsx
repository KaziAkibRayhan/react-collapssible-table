import React from "react";
import TableDetails from "./TableDetails/TableDetails";
import GunnerFx from "./GunnerFx/GunnerFx";
import BarChartLevarage from "./BarChartLevarage/BarChartLevarage";
import AccountDetails from "./AccountDetails/AccountDetails";
import Performance from "./Performance/Performance";

const RowContent = ({ open, handleContentStopPropagationClick }) => {
  return (
    <div className={`content ${open ? "open" : ""} bg-[#F6F7F8]`} onClick={handleContentStopPropagationClick}>
      <div className="w-full h-full flex justify-between items-center p-3 box-border space-x-2">
        {/* Gunner fx start */}
        <div className="w-[20%] h-[170px] bg-white rounded space-y-3">
          <GunnerFx />
        </div>
        {/* Bar chart leverage start */}
        <div className="w-[5%] h-[170px] flex justify-center items-center flex-col space-y-3">
          <BarChartLevarage />
        </div>
        {/* Table start here */}
        <div className="w-[29%]">
          <TableDetails />
        </div>
        <div className="w-[23%] h-[170px] bg-white rounded">
          <Performance />
        </div>
        <div className="w-[23%] h-[170px] bg-white rounded">
          <AccountDetails />
        </div>
      </div>
    </div>
  );
};

export default RowContent;
