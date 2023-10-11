import React from "react";

export const Status = { WON: "won", LOST: "lost", RUNNING: "running" };

function GameOverBanner({ status, children }) {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
    </div>
  );
}

export default GameOverBanner;
