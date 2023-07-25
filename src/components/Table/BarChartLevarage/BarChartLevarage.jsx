import React from "react";

const BarChartLevarage = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="bg-[var(--color-green)] h-[50px] w-[50px] flex flex-col justify-center items-center text-[white] rounded-[3px]">
          <span className="text-3xl font-medium">1</span>
          <span className="text-[11px]">RISK</span>
        </div>
        <div className="bg-[var(--color-blue)] h-[50px] w-[50px] flex flex-col justify-center items-center text-[white] rounded-[3px]">
          <svg height="400" viewBox="0 0 512 512" width="400" xmlns="http://www.w3.org/2000/svg">
            <title />
            <path d="M128,496H48V304h80Z" fill="white" />
            <path d="M352,496H272V208h80Z" fill="white" />
            <path d="M464,496H384V96h80Z" fill="white" />
            <path d="M240,496H160V16h80Z" fill="white" />
          </svg>
        </div>
        <div className="bg-[var(--color-red)] h-[50px] w-[50px] flex flex-col justify-center items-center text-[white] rounded-[3px]">
          <svg version="1.1" viewBox="0 0 48 48" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg">
            <title />
            <g fill="none" fillRule="evenodd" id="arrow-up" stroke="none" strokeWidth="1">
              <path
                d="M16.0839749,20.2226499 L16.0434343,20.2953753 C15.8973068,20.6162383 16.1291771,21 16.5,21 L22,21 L22,39.5 C22,39.7761424 22.2238576,40 22.5,40 L26.5,40 L26.5898756,39.9919443 C26.8231248,39.9496084 27,39.7454599 27,39.5 L27,21 L32.5,21 C32.8993477,21 33.1375434,20.5549273 32.9160251,20.2226499 L24.9160251,8.2226499 C24.7181141,7.92578337 24.2818859,7.92578337 24.0839749,8.2226499 L16.0839749,20.2226499 Z"
                fill="var(--color-white)"
                fillRule="nonzero"
                id="Path"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BarChartLevarage;
