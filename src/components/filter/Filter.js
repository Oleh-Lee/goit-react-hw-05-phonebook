import React from "react";
import PropTypes from "prop-types";
import styles from "../contactForm/ContactForm.module.css";

const Filter = ({ getName }) => (
  <div className={styles.contactFormWraper}>
    <p className={styles.span}>Find contact by name</p>
    <input className={styles.input} type="text" onChange={getName} />
  </div>
);

Filter.propTypes = {
  getName: PropTypes.func.isRequired
};

export default Filter;
