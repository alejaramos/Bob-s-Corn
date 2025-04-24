import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Navbar.scss';
import { useClient } from '../../contexts/ClientContext.tsx';

function Navbar() {
  const { clientId, totalQuantity, cornQuantity, dataReady } = useClient();

  useEffect(() => {
    cornQuantity();
  }, [cornQuantity]);

  if (!dataReady) {
    return null;
  }

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <h1 className="title">Bob's Corn Farm</h1>
        <div className="purchase-info">
          <h1 className="text">Hi client <strong>{clientId.substring(0, 8)}</strong>!</h1>
          <h1 className="text">You've bought</h1>
          <span className="count">{totalQuantity}</span>
          <h1 className="text">corns</h1>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;