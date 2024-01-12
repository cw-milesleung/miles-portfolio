const TabButton = ({ isSelected, children, ...props }) => {
  const isActive = isSelected ? "btn-2 active-btn" : "btn-2";
  return (
    <>
      <button className={isActive} {...props}>
        {children}
      </button>
    </>
  );
};
export default TabButton;
