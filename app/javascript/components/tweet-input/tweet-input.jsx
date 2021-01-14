import React from "react";

const TweetInput = ({id, name, placeholder, handleChange, className}) => {
  return <textarea
    required
    maxLength="140"
    className={className}
    id={id} name={name}
    placeholder={placeholder}
    onKeyUpCapture={handleChange}
  />;
}

export default TweetInput;