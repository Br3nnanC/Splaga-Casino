import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import css from '../App.module.css';

// Define the type for the BalanceProps
type BalanceProps = {
  initialBalance: number; // Initial balance
};
const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      }
    },
  });

// Define the Balance component
const Balance: React.FC<BalanceProps> = ({ initialBalance }) => {
  // State to hold the current balance
  const [balance, setBalance] = useState<number>(initialBalance);

  // Function to handle deposit
  const deposit = (amount: number) => {
    setBalance(prevBalance => prevBalance + amount);
  };

  // Function to handle withdrawal
  const withdraw = (amount: number) => {
    if (balance - amount >= 0) {
      setBalance(prevBalance => prevBalance - amount);
    } else {
      alert("Insufficient balance!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
        <Typography variant="h5" color="primary" gutterBottom align='center'>
            Balance: ${balance}
        </Typography>

        <Button size="large" variant="outlined" color="primary" className={css["deposit-button"]} onClick={() => deposit(100)}>Deposit $100</Button>
        <Button size="large" variant="outlined" color="primary" className={css["withdraw-button"]} onClick={() => withdraw(100)}>withdraw $100</Button>
    </ThemeProvider>
  );
};export default Balance;
export {};