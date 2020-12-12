import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleStart = () => {
    window.scrollTo(0, 700);
  };
  return (
    <div className="header">
      <button className="btn-header" onClick={handleStart}>
        START
      </button>
      {/* <Link to="/" className="btn-header" title="Go to search characters">
        START
      </Link> */}
    </div>
  );
};

export default Header;
