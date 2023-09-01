import React from 'react';
import NavBarComponent from './component/NavBarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import FooterComponent from './component/FooterComponent';
import CarouselComponent from './component/CarouselComponent';
import SearchPage from './pages/SearchPage';  // Make sure to provide the correct path

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
      <Router>
        <div>
          <NavBarComponent/>
          <Routes>
            <Route path="/" element={
              <>
                <CarouselComponent/>
                <Box sx={{flexGrow: 1, marginTop: '2vw', marginBottom:'2vw'}}>
                  <Grid container spacing={2} columnSpacing={4}>
                    {Array(24).fill(null).map((_, index) => (
                      <Grid item xs={4} key={index}>
                        <Item>Listed Item</Item>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <FooterComponent/>
              </>
            } />
            <Route path="/search/:category" element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
