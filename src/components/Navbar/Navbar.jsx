import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Smart Sales Forecasting
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/train/file">
          About
        </Button>
        <Button color="inherit" component={Link} to="/train/manual">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
