import React from 'react';
import css from './App.module.css';
import NavTabs from './components/navagationbar';
import { StyledEngineProvider } from '@mui/system';
import SlotMachine from './components/slotMachine/SlotMachine';
import { Grid } from '@mui/material';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <NavTabs />
      <div className={css["body"]}>
        <SlotMachine />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
