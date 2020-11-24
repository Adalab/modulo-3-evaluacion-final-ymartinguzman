import React from 'react';

const Header = () => {
  const handleStart = () => {
    window.scrollTo(0, 850);
  };
  return (
    <header className="header">
      <button className="btn-header" onClick={handleStart}>
        START
      </button>
    </header>
  );
};

export default Header;
