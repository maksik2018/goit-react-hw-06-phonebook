import React from 'react';
import { connect } from "react-redux";
import { filterContact } from "../redux/phonebook-actions";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
    <label>
        Find contacts by name <input type="text" value={value} onChange={onChange} />
    </label>
);

const mapStateToProps = (state) => ({
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

// export default Filter;