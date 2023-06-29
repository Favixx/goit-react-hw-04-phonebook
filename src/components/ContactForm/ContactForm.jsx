import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
    state = {
        name: "",
        number: ""
    };

    static propTypes = {
        addContact: PropTypes.func.isRequired
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;
        const { addContact } = this.props;

        const newContact = {
            id: uuidv4(),
            name,
            number
        };

        addContact(newContact);

        this.setState({ name: "", number: "" });
    };

    render() {
        const { name, number } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label>
                        Name
                        <input
                            onChange={this.handleInputChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                        />
                    </label>
                    <label>
                        Number
                        <input
                            onChange={this.handleInputChange}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                        />
                    </label>
                    <button type="submit">Add contact</button>
                </form>
            </div>
        );
    }
}
