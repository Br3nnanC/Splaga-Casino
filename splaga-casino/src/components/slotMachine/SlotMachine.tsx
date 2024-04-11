// SlotMachine.tsx
import React, { useState } from "react";
import Reel from "./Reel";
import "./slotMachine.css";
import { Button } from "@mui/material";
import css from '../../App.module.css';


const images = (require as any).context('./cardAssets', true);
const imageList = images.keys().map((image: string) => images(image));


const SlotMachine: React.FC = () => {
  const [symbols, setSymbols] = useState<string[]>(imageList.slice(0, 5)); // Initial symbols
  const [spinning, setSpinning] = useState<boolean>(false);

  const spinReels = () => {
    if (!spinning) {
      setSpinning(true);
      // Generate random symbols for each reel
      const newSymbols = Array.from({ length: 5 }, () => getRandomSymbol());
      setSymbols(newSymbols);
      // Simulate spinning animation
      setTimeout(() => {
        setSpinning(false);
      }, 2000); // Adjust duration as needed
    }
  };

  const getRandomSymbol = () => {
    return imageList[Math.floor(Math.random() * imageList.length)]; // Select from allSymbols
  };

  return (
    <div className="slot-machine">
      <div className="reels">
        {symbols.map((symbol, index) => (
          <Reel key={index} symbol={symbol} spinning={spinning} />
        ))}
      </div>
      <Button size="large" variant="outlined" color="primary" className={css["slots-button"]} onClick={spinReels} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </Button>
    </div>
  );
};

export default SlotMachine;
