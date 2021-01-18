import React from "react";
import './CustomBox.scss'

const CustomBox = (props) => {
  return <div className="customBox">{props.children}</div>;
};

export default CustomBox;
