import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="header">
      <Link to="/main" className="btn-header" title="Go to search characters">
        START
      </Link>
    </div>
  );
};

export default Landing;
