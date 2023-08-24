import React from 'react';
import NavBarComponent from './NavBarComponent';
import { Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import FooterComponent from './FooterComponent'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class App extends React.Component {
  render() {
    return (
      <div>

        <NavBarComponent/>

        <Box sx={{ flexGrow: 1}} style={{ marginTop: '2vw' }}>
          <Grid container rowSpacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
              <Item>Home Image</Item>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{flexGrow: 1}} style={{ marginTop: '2vw', marginBottom:'2vw'}}>
          <Grid container rowSpacing={{xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array(24).fill(null).map((_, index) => (
              <Grid item xs={4} key={index}>
                <Item>Listed Item</Item>
              </Grid>
              ))}
          </Grid>
        </Box>
        
        <FooterComponent/>

      </div>
    );
  }
}

 export default App;