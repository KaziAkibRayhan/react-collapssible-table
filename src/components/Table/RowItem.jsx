const { useState } = require("react");

const RowItem = ({ id, name, details, state }) => {
  const [open, setOpen] = useState(false);

  const toggleRow = () => {
    setOpen(!open);
  };

  return (
    <li onClick={toggleRow} className={open ? "open" : ""}>
      <div className="heading">
        <div className="col">{id}</div>
        <div className="col">{name}</div>
        <div className="col">{details}</div>
        <div className="col">{state}</div>
      </div>
      {/* <RowContent open={open} /> */}
      {/* {this.props.children} */}
    </li>
  );
};

export default RowItem;
