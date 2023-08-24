import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f5f5f5', // This sets the background color to grey
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MyGridComponent() {
    return (
        <Grid container spacing={2}>
            {/* First item */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>Grid 1</Item>
            </Grid>

            {/* Second item */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>Grid 2</Item>
            </Grid>

            {/* Third item */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>Grid 3</Item>
            </Grid>

            {/* Fourth item */}
            <Grid item xs={12} sm={6} md={12} lg={3}>
            <Item>Grid 4</Item>
            </Grid>
        </Grid>
    );
}


export default MyGridComponent;