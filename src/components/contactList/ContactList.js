import React from "react";
import ContactListItem from "../contactForm/contactListItem/ContactListItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../transitions/slide.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <TransitionGroup component="ul">
    {contacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={250}
        classNames={slideTransition}
        unmountOnExit
      >
        <ContactListItem
          contact={contact}
          // key={contact.id}
          deleteContact={deleteContact}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

export default ContactList;
