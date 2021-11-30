import { Component } from "react";
import ContactListItem from "./ContactListItem";


class ContactList extends Component {
  render() {
    const { list, onDeleteContact } = this.props;
    return (
      <ul>
        {list.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
