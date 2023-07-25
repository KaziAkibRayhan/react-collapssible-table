import React, { useState } from "react";

const Performance = () => {
  const [activeButton, setActiveButton] = useState("2W");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };
  return (
    <div className="p-5 box-border space-y-5">
      <div>
        <h4 className="p-0 m-0 font-semibold text-[15px]">Performance</h4>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-medium mb-[7px]">GAIN</p>
          <p className="m-0 -mt-1 p-0 text-[var(--color-red)] text-[13px] font-bold">-0.24%</p>
        </div>
        <div>
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-medium mb-[7px]">COPIERS</p>
          <p className="m-0 -mt-1 p-0 text-[13px] font-bold flex items-center gap-1">
            6885
            <p className="p-0 m-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--color-green)" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
              </svg>
            </p>
            5639
          </p>
        </div>
        <div>
          <p className="m-0 p-0 text-[10px] text-[var(--text-color)] font-medium mb-[7px]">PROFIT AND LOSS</p>
          <div className="flex space-x-16">
            <p className="m-0 -mt-1 p-0 text-[13px] font-bold">$8.87</p>
            <p className="m-0 -mt-1 p-0 text-[13px] font-bold">$8.87</p>
          </div>
          <hr className="border border-[var(--color-green)] m-0 p-0 mt-1" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => handleButtonClick("2W")}
          className={`${
            activeButton === "2W" ? "bg-[var(--color-blue)] text-[var(--color-white)]" : "bg-[#F6F6F6]"
          }  border-none text-[11px] w-[50px] h-6 rounded-[14px] cursor-pointer`}
        >
          2W
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("1M")}
          className={`${
            activeButton === "1M" ? "bg-[var(--color-blue)] text-[var(--color-white)]" : "bg-[#F6F6F6]"
          } border-none text-[11px] w-[50px] h-6 rounded-[14px] cursor-pointer`}
        >
          1M
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("3M")}
          className={`${
            activeButton === "3M" ? "bg-[var(--color-blue)] text-[var(--color-white)]" : "bg-[#F6F6F6]"
          }  border-none text-[11px] w-[50px] h-6 rounded-[14px] cursor-pointer`}
        >
          3M
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("6M")}
          className={`${
            activeButton === "6M" ? "bg-[var(--color-blue)] text-[var(--color-white)]" : "bg-[#F6F6F6]"
          }  border-none text-[11px] w-[50px] h-6 rounded-[14px] cursor-pointer`}
        >
          6M
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("ALL")}
          className={`${
            activeButton === "ALL" ? "bg-[var(--color-blue)] text-[var(--color-white)]" : "bg-[#F6F6F6]"
          }  border-none text-[11px] w-[50px] h-6 rounded-[14px] cursor-pointer`}
        >
          ALL
        </button>
      </div>
    </div>
  );
};

export default Performance;
