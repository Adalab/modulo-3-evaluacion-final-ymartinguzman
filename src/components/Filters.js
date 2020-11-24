import React from 'react';

const Filter = (props) => {
  const handleCheck = (ev) => {
    props.handleCheck(ev.currentTarget.checked);
  };

  const handleSearch = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  };
  return (
    <div className="input-container">
      <form>
        <label htmlFor="name"></label>
        <input
          className="input"
          type="text"
          placeholder="Search by character"
          onChange={handleSearch}
          value={props.search}
        ></input>
        <label htmlFor="check"></label>
        <input type="checkbox" onChange={handleCheck}></input>
      </form>
    </div>
  );
};

export default Filter;
