import React from "react";
import Table from "./Table";

const TraderTable = () => {
  const data = [
    {
      expertTrader: "Expert Trader",
      risk_score: (
        <div className="flex justify-center items-center">
          <div className="bg-[#01C94C] h-[29px] w-[29px] flex justify-center items-center text-[white] text-3xl font-medium rounded-[3px]">1</div>
          <div>
            <svg version="1.1" viewBox="0 0 43 43" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g fill="none" fillRule="evenodd" id="arrow-up" stroke="none" strokeWidth="1">
                <path
                  d="M16.0839749,20.2226499 L16.0434343,20.2953753 C15.8973068,20.6162383 16.1291771,21 16.5,21 L22,21 L22,39.5 C22,39.7761424 22.2238576,40 22.5,40 L26.5,40 L26.5898756,39.9919443 C26.8231248,39.9496084 27,39.7454599 27,39.5 L27,21 L32.5,21 C32.8993477,21 33.1375434,20.5549273 32.9160251,20.2226499 L24.9160251,8.2226499 C24.7181141,7.92578337 24.2818859,7.92578337 24.0839749,8.2226499 L16.0839749,20.2226499 Z"
                  fill="#01C94C"
                  fillRule="nonzero"
                  id="Path"
                />
              </g>
            </svg>
          </div>
        </div>
      ),
      leverage: "1:500",
      group: "VIP Group",
      trade: "#125401",
      instrument: "EUR/USD",
      volume: "0.1",
      open_price: "1.4416",
      open_time: "1:45:59 PM",
      profit_loss: <span className="text-[#01C94C]">+ $ 10.25</span>,
      copy: (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="copy" width="24" height="24" fill="#F86961">
            <path
              fill="none"
              stroke="#F86961"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M47,17v6a2,2,0,0,0,2,2h6l-8-8H41V46a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V7a2,2,0,0,1,2-2H33l8,8H35a2,2,0,0,1-2-2V5"
            />
            <path fill="none" stroke="#F86961" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M55,29V57a2,2,0,0,1-2,2H25a2,2,0,0,1-2-2V48" />
          </svg>
        </span>
      ),
      action: (
        <div className="flex justify-center items-center gap-5">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#01C94C" class="w-7 h-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#01C94C" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </span>
        </div>
      ),
    },
    {
      expertTrader: "Expert Trader",
      risk_score: (
        <div className="flex justify-center items-center">
          <div className="bg-[#01C94C] h-[29px] w-[29px] flex justify-center items-center text-[white] text-3xl font-medium rounded-[3px]">1</div>
          <div>
            <svg version="1.1" viewBox="0 0 43 43" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g fill="none" fillRule="evenodd" id="arrow-up" stroke="none" strokeWidth="1">
                <path
                  d="M16.0839749,20.2226499 L16.0434343,20.2953753 C15.8973068,20.6162383 16.1291771,21 16.5,21 L22,21 L22,39.5 C22,39.7761424 22.2238576,40 22.5,40 L26.5,40 L26.5898756,39.9919443 C26.8231248,39.9496084 27,39.7454599 27,39.5 L27,21 L32.5,21 C32.8993477,21 33.1375434,20.5549273 32.9160251,20.2226499 L24.9160251,8.2226499 C24.7181141,7.92578337 24.2818859,7.92578337 24.0839749,8.2226499 L16.0839749,20.2226499 Z"
                  fill="#01C94C"
                  fillRule="nonzero"
                  id="Path"
                />
              </g>
            </svg>
          </div>
        </div>
      ),
      leverage: "1:500",
      group: "VIP Group",
      trade: "#125401",
      instrument: "EUR/USD",
      volume: "0.1",
      open_price: "1.4416",
      open_time: "1:45:59 PM",
      profit_loss: <span className="text-[#01C94C]">+ $ 10.25</span>,
      copy: (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="copy" width="24" height="24" fill="#F86961">
            <path
              fill="none"
              stroke="#F86961"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M47,17v6a2,2,0,0,0,2,2h6l-8-8H41V46a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V7a2,2,0,0,1,2-2H33l8,8H35a2,2,0,0,1-2-2V5"
            />
            <path fill="none" stroke="#F86961" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M55,29V57a2,2,0,0,1-2,2H25a2,2,0,0,1-2-2V48" />
          </svg>
        </span>
      ),
      action: (
        <div className="flex justify-center items-center gap-5">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#01C94C" class="w-7 h-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#01C94C" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </span>
        </div>
      ),
    },
    {
      expertTrader: "Expert Trader",
      risk_score: (
        <div className="flex justify-center items-center">
          <div className="bg-[#01C94C] h-[29px] w-[29px] flex justify-center items-center text-[white] text-3xl font-medium rounded-[3px]">1</div>
          <div>
            <svg version="1.1" viewBox="0 0 43 43" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g fill="none" fillRule="evenodd" id="arrow-up" stroke="none" strokeWidth="1">
                <path
                  d="M16.0839749,20.2226499 L16.0434343,20.2953753 C15.8973068,20.6162383 16.1291771,21 16.5,21 L22,21 L22,39.5 C22,39.7761424 22.2238576,40 22.5,40 L26.5,40 L26.5898756,39.9919443 C26.8231248,39.9496084 27,39.7454599 27,39.5 L27,21 L32.5,21 C32.8993477,21 33.1375434,20.5549273 32.9160251,20.2226499 L24.9160251,8.2226499 C24.7181141,7.92578337 24.2818859,7.92578337 24.0839749,8.2226499 L16.0839749,20.2226499 Z"
                  fill="#01C94C"
                  fillRule="nonzero"
                  id="Path"
                />
              </g>
            </svg>
          </div>
        </div>
      ),
      leverage: "1:500",
      group: "VIP Group",
      trade: "#125401",
      instrument: "EUR/USD",
      volume: "0.1",
      open_price: "1.4416",
      open_time: "1:45:59 PM",
      profit_loss: <span className="text-[#01C94C]">+ $ 10.25</span>,
      copy: (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="copy" width="24" height="24" fill="#F86961">
            <path
              fill="none"
              stroke="#F86961"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M47,17v6a2,2,0,0,0,2,2h6l-8-8H41V46a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V7a2,2,0,0,1,2-2H33l8,8H35a2,2,0,0,1-2-2V5"
            />
            <path fill="none" stroke="#F86961" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M55,29V57a2,2,0,0,1-2,2H25a2,2,0,0,1-2-2V48" />
          </svg>
        </span>
      ),
      action: (
        <div className="flex justify-center items-center gap-5">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#01C94C" class="w-7 h-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#01C94C" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </span>
        </div>
      ),
    },
  ];

  const cols = [
    { label: "TRADER" },
    { label: "RISK SCORE" },
    { label: "LEVERAGE" },
    { label: "GROUP" },
    { label: "TRADE" },
    { label: "INSTRUMENT" },
    { label: "VOLUME" },
    { label: "OPEN PRICE" },
    { label: "OPEN TIME" },
    { label: "PROFIT/LOSS" },
    { label: "COPY" },
    { label: "ACTION" },
  ];

  return (
    <div className="container">
      <Table data={data} columns={cols} headerFixed={false} />
    </div>
  );
};

export default TraderTable;
