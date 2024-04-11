// Reel.tsx
import React from "react";
import "./slotMachine.css";

interface ReelProps {
  symbol: string;
  spinning: boolean;
}

const Reel: React.FC<ReelProps> = ({ symbol, spinning }) => {
    return (
      <div className={`reel ${spinning ? "spinning" : ""}`}>
        <img src={symbol} alt="Symbol" /> {/* Render image */}
      </div>
    );
  };

export default Reel;
