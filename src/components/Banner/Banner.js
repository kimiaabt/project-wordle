import React from "react";

function Banner({ status, children }) {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
