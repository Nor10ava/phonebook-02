import { Component } from "react";
import PropTypes from "prop-types";

class ContactListItem extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <li>
        <span>{name}:</span>
        <span>{number}</span>
        <button type="button" id={id} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
