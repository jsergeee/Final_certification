import React from "react";

const SortFilter = ({ onSort }) => {
  return (
    <div className= "SortFilter">
      <label>Sort by Size: </label>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="all">All</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>
  );
};

export default SortFilter;
