import React, { useState, useEffect } from 'react';
import '../../../App.css';
import { Image } from 'react-bootstrap';

const AdPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 10 segundos en milisegundos

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (showPopup) {
    return (
      <div className="ad-popup">
        <div className="ad-content">
          <span className="close-button" onClick={closePopup}>
            X
          </span>
          <h2>¡Aprovecha nuestra oferta especial!</h2>
          <Image src="https://pawxieimg.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/12/20174920/2-Royal-Canin.gif" rounded />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AdPopup;
