import * as React from 'react';
import { Grid, Button, Link, ThemeProvider, Typography } from '@mui/material';
import Logo from '../assets/splaga.png';
import '../App.css';
import { createTheme } from '@mui/material/styles';
import Balance from './balance'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

  },
});


function NavTabs() {
  return (
<Grid container justify-content="space-evenly" className="top-bar" >
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

      <Grid container item mt={-22} mr={6} justifyContent="end" className="navigation-buttons">
        <Grid item>
          <ThemeProvider theme={theme}>
            {/* <Button size="large" variant="outlined" color="primary" className="account-button">Account</Button> */}
            <Balance initialBalance={1000}/>
          </ThemeProvider>
        </Grid>
      </Grid>
  </Grid>
  );
}export default NavTabs;