import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{name} </span>
      <span className={styles.span}>{number} </span>
      <button
        className={styles.button}
        type="button"
        id={id}
        onClick={deleteContact}
      >
        X
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })
};

export default ContactListItem;
