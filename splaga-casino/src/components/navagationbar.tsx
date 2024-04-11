import * as React from 'react';
import { Grid, Button, Link, ThemeProvider, Typography } from '@mui/material';
import Logo from '../assets/splaga.png';
import { createTheme } from '@mui/material/styles';
import Balance from './balance'
import css from '../App.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },

  },
});


function NavTabs() {
  return (
<Grid container justify-content="space-evenly" className={css["top-bar"]} >
      <Grid item mt={1} ml={1}>
        <Link href="/"><img src={Logo}  style={{ width: "200px", height: "200px" }}/></Link>
      </Grid>

      <Grid container item justifyContent="center" mt={-16}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" color="primary" gutterBottom>
          Gamble Your Net Worth!!
        </Typography>
      </ThemeProvider>
      </Grid>

      <Grid container item mt={-20} mr={6} justifyContent="end">
        <Grid item>
          <ThemeProvider theme={theme}>
            <Balance initialBalance={1000}/>
          </ThemeProvider>
        </Grid>
      </Grid>
  </Grid>
  );
}export default NavTabs;