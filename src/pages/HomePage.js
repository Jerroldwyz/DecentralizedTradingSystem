import React from 'react';
import NavBarComponent from '../component/NavBarComponent';
// import { Routes, Route, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FooterComponent from '../component/FooterComponent';
import CarouselComponent from '../component/CarouselComponent';
import ImageListComponent from '../component/ImageListComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class HomePage extends React.Component{
  render() {
    return (
      <div>
        <NavBarComponent/>

        <CarouselComponent/>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Item>
              <ImageListComponent/>
            </Item>
          </Grid>  
        </Grid>

        <FooterComponent/>
      </div>
      
    )
  }
}

export default HomePage;
