import React from 'react';

const Filter = (props) => {
  const handleSearch = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  };
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
