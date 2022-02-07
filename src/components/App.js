import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import QuoteCard from './QuoteCard'

import './App.css'

const App = () => {
    return (
        <>
            <CssBaseline />
            <Grid 
                container 
                spacing={3}
                sx = {{
                    width: '100%',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#2596be',
                    p:0,
                    margin:0
                }}
            >
                <QuoteCard id="quote-box"/>
            </Grid>
        </>
    );
}

export default App;