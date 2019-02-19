import React from "react";
import PropTypes from "prop-types";
// styles
import { TabsStyled, TabButtonStyled } from "../../themes/tab/tabs";

const TabBar = ({ names, setActiveTab, active }) => {
  return (
    <TabsStyled>
      {names.map((item, index) => (
        <TabButtonStyled
          key={index}
          onClick={() => setActiveTab(index)}
          isActive={active === index}
        >
          {item}
        </TabButtonStyled>
      ))}
    </TabsStyled>
  );
};

TabBar.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired
};

export default TabBar;