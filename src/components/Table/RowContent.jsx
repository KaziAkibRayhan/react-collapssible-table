const RowContent = ({ open }) => {
  return (
    <div className={`content ${open ? "open" : ""}`} onClick={() => {}}>
      row content
    </div>
  );
};
export default RowContent;
