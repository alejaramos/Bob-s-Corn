import React from 'react';
import ShopButton from '../../../components/button/Button.tsx';
import Navbar from '../../../components/navbar/Navbar.tsx';
import './homescreen.view.scss';
import cornImage from '../../../assets/cornImage.png';


function HomescreenView() {

  return (
    <div className="homescreen-container">
      <Navbar />
      <div className="content-section">
        <div className="image-and-button-container">
          <div className="image-container">
            <img src={cornImage} alt="Corn Farm" className="corn-image" />
          </div>
          <ShopButton />
        </div>
      </div>
    </div>
  );
}

export default HomescreenView;