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
          <Grid item xs={12}>
            <Item>Home Image</Item>
          </Grid>
        </Box>

        <Box sx={{flexGrow: 1}} style={{ marginTop: '2vw', marginBottom:'2vw'}}>
          <Grid container spacing={2} columnSpacing={4}>
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