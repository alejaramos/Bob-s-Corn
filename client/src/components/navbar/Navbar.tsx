import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Navbar.scss';

function Navbar() {
  const count = 0;

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <h1 className="title">Bob's Corn Farm</h1>
        <div className="purchase-info">
          <h1 className="text">You've bought</h1>
          <span className="count">{count}</span>
          <h1 className="text">corns</h1>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;