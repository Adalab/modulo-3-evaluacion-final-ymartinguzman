import React from 'react';

const Header = () => {
  const handleStart = () => {
    window.scrollTo(0, 700);
  };
  return (
    <div className="header">
      <button className="btn-header" onClick={handleStart}>
        START
      </button>
    </div>
  );
};

export default Header;
