import React from 'react';

const ButtonBack = () => {
  const handleBack = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className="link-home" onClick={handleBack}>
      UP
    </button>
  );
};

export default ButtonBack;
