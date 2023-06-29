import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};

export default Filter;