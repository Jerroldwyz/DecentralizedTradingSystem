import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavBarComponent from '../component/NavBarComponent';

function SearchPage() {
  const { category } = useParams();
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {
    const sampleCryptos = Array(6).fill(null).map((_, index) => ({
      name: `${category} Product ${index + 1}`,
      abbreviation: `${category}${index + 1}`,
      price: Math.random() * 100,
      description: `This is a sample product in the ${category} category.`,
      change: Math.random() > 0.5 ? Math.random() * 10 : -Math.random() * 10,
    }));

    const filteredCryptos = sampleCryptos.filter(crypto => crypto.price >= minPrice && crypto.price <= maxPrice);

    setCryptos(filteredCryptos);
    setIsLoading(false);
  }, [category, minPrice, maxPrice]);

  const handleFilterButtonClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  const handleApplyFilter = () => {
    setFilterDialogOpen(false);
  };

  const handleAddToCart = (crypto) => {
    console.log(`Added ${crypto.name} to cart!`); // Implement cart logic here.
  };

  return (
    <Box>
      <Box display="flex" flexDirection="row" alignItems="start" padding={3}>
        <Button variant="outlined" onClick={handleFilterButtonClick} style={{ marginRight: '20px' }}>Filter</Button>
        <Box flexGrow={1}>
          <h1>Search Results for: {category}</h1>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            <Grid container spacing={3}>
              {cryptos.map((crypto, index) => (
                <Grid item xs={4} key={index}>
                  <Paper elevation={3}>
                    <Box padding={2} position="relative">
                      <Typography variant="h6">{crypto.name} ({crypto.abbreviation})</Typography>
                      <Typography color="textSecondary">${crypto.price.toFixed(2)}</Typography>
                      <Typography>{crypto.description}</Typography>
                      <Chip 
                        label={crypto.change > 0 ? `+${crypto.change.toFixed(2)}%` : `${crypto.change.toFixed(2)}%`} 
                        color={crypto.change > 0 ? 'primary' : 'secondary'}
                      />
                      <IconButton 
                        color="primary" 
                        onClick={() => handleAddToCart(crypto)}
                        style={{ position: 'absolute', bottom: 8, right: 8 }}
                      >
                        <ShoppingCartIcon />
                      </IconButton>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
      <Dialog open={filterDialogOpen} onClose={handleFilterDialogClose}>
        <DialogTitle>Filter by Price</DialogTitle>
        <DialogContent>
          <TextField
            label="Min Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            inputProps={{ min: 0 }}
          />
          <TextField
            label="Max Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            inputProps={{ min: 0 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApplyFilter}>Apply</Button>
          <Button onClick={handleFilterDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SearchPage;
