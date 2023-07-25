import { useState } from "react";
import HeaderColumn from "./HeaderColumn";
import RowItem from "./RowItem";

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
