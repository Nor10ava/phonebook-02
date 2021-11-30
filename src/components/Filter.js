import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={uuidv4()}>Find contacts by name</label>
        <input type="text" value={value} id={uuidv4()} onChange={onChange} />
      </div>
    );
  }
}

export default Filter;
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
