import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className={styles.contactFormWraper}>
        <form onSubmit={this.handleSubmit}>
          <h2 className={styles.span}>Name</h2>
          <input
            className={styles.input}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h2 className={styles.span}>Number</h2>
          <input
            className={styles.input}
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          />

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.protoType = {
  name: PropTypes.string,
  number: PropTypes.string
};

export default ContactForm;
