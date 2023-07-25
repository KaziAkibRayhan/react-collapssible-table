import Table from "rc-table";
import React from "react";

const TableDetails = () => {
  const columns = [
    {
      title: "SYMBOL",
      dataIndex: "symbol",
      key: "symbol",
      width: 100,
    },
    {
      title: "OPEN",
      dataIndex: "open",
      key: "open",
      width: 100,
    },
    {
      title: "CLOSE",
      dataIndex: "close",
      key: "close",
      width: 200,
    },
    {
      title: "TRADE",
      dataIndex: "trade",
      key: "trade",
    },
    {
      title: "VOL",
      dataIndex: "vol",
      key: "vol",
    },
    {
      title: "P/L",
      dataIndex: "p_l",
      key: "p_l",
    },
  ];

  const data = [
    { symbol: "EURUSD", open: 1.45124, close: 1.45124, trade: "BUY", vol: 0.1, p_l: "+$1245" },
    { symbol: "EURUSD", open: 1.45124, close: 1.45124, trade: "BUY", vol: 0.1, p_l: "+$1245" },
    { symbol: "EURUSD", open: 1.45124, close: 1.45124, trade: "BUY", vol: 0.1, p_l: "+$1245" },
    { symbol: "EURUSD", open: 1.45124, close: 1.45124, trade: "BUY", vol: 0.1, p_l: "+$1245" },
    { symbol: "EURUSD", open: 1.45124, close: 1.45124, trade: "BUY", vol: 0.1, p_l: "+$1245" },
  ];
  return (
    <div>
      <Table className="custom-table" columns={columns} data={data} />
    </div>
  );
};

export default TableDetails;
