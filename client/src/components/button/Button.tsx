import * as React from 'react';
import Button from '@mui/material/Button';
import './Button.scss';

export default function ShopButton() {
  return (
    <Button
      variant="contained"
      className="shop-button"
    >
      Click here to buy some corn
    </Button>
  );
}