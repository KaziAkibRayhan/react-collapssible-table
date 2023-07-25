import React from "react";

const AccountDetails = () => {
  return (
    <div className="p-5 box-border">
      <div>
        <h4 className="p-0 m-0 font-semibold text-[15px]">Account details</h4>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-normal flex items-center gap-2">
            FLOATING PROFIT <p className="bg-[#DBDBDB] hover:bg-[#bab9b9] flex justify-center items-center w-3 h-3 text-[#f0f0f0] text-[9px] rounded-[50%] cursor-pointer">?</p>
          </p>
          <p className="m-0 -mt-1 p-0 text-[var(--color-red)] text-[13px] font-bold">-$9.11</p>
        </div>
        <div className="w-1/2">
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-normal flex items-center gap-2">
            Balance <p className="bg-[#DBDBDB] hover:bg-[#bab9b9] flex justify-center items-center w-3 h-3 text-[#f0f0f0] text-[9px] rounded-[50%] cursor-pointer">?</p>
          </p>
          <p className="m-0 -mt-1 p-0 text-[13px] font-bold">$150.61</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-normal flex items-center gap-2">
            MASTER TRADER'S BONUS <p className="bg-[#DBDBDB] hover:bg-[#bab9b9] flex justify-center items-center w-3 h-3 text-[#f0f0f0] text-[9px] rounded-[50%] cursor-pointer">?</p>
          </p>
          <p className="m-0 -mt-1 p-0 text-[13px] font-bold">$0.00</p>
        </div>
        <div className="w-1/2">
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-normal flex items-center gap-2">
            LEVERAGE <p className="bg-[#DBDBDB] hover:bg-[#bab9b9] flex justify-center items-center w-3 h-3 text-[#f0f0f0] text-[9px] rounded-[50%] cursor-pointer">?</p>
          </p>
          <p className="m-0 -mt-1 p-0 text-[13px] font-bold">1.500</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
