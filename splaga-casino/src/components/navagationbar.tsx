import * as React from 'react';
import { Grid, Button, Link, ThemeProvider, Typography } from '@mui/material';
import Logo from '../assets/splaga.png';
import '../App.css';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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
<Grid container className="top-bar" >
      <Grid item  xs={1} md={1} lg={1} mt={1} ml={1}>
        <Link href="/"><img src={Logo}  style={{ width: "200px", height: "200px" }}/></Link>
      </Grid>

      <Grid container item justifyContent="center" mt={-16}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" color="primary" gutterBottom>
              Gamble All Your "Money" Away!!
        </Typography>
      </ThemeProvider>
      </Grid>

      <Grid container item mt={-15} mr={6} justifyContent="end" className="navigation-buttons">
        <Grid item>
          <ThemeProvider theme={theme}>
            <Button size="large" variant="outlined" color="primary" className="account-button">Account</Button>
          </ThemeProvider>
        </Grid>
      </Grid>
  </Grid>
  );
}
export default NavTabs;