import GridComponent from './GridComponent';
import Blog from './blog.js';
import Home from './Home.js';
import React from 'react';
import NavBarComponent from './NavBarComponent';
import { Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';


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
        <NavBarComponent></NavBarComponent>

        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
              <Item>Header</Item>
            </Grid>
            <Grid item xs={12}>
              <Item>Home image</Item>
            </Grid>
          </Grid>
          <Grid container spacing={{xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array(9).fill(null).map((_, index) => (
              <Grid item xs={4} key={index}>
                <Item>Listed Item</Item>
              </Grid>
              ))}
          </Grid>
        </Box>
        

      </div>
    );
  }
}


// function App() {
//     return (
//         <div>
//             <GridComponent />
//             <Blog />
//         </div>
//     );
// }

 export default App;