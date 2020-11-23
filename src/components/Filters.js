import React, { useState } from 'react';

const Filter = (props) => {
  return (
    <>
      <form>
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="Search by character"
          onChange={handleSearch}
        ></input>
      </form>
    </>
  );
};

export default Filter;
