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
      <form className="formulaire">
        <label htmlFor="name"></label>Which character are you looking for?
        <input
          className="input"
          type="text"
          placeholder="E.g. Rick Sanchez"
          onChange={handleSearch}
          value={props.search}
        ></input>
        <label htmlFor="check"> Sort by name</label>
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleCheck}
        ></input>
      </form>
    </div>
  );
};

export default Filter;
