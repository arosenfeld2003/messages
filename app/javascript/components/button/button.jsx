import React from "react";

const Button = ({type, className, onClick, children, otherProps}) => {
  return <button className={className} type={type} onClick={onClick}>{children}</button>
}

export default Button;
