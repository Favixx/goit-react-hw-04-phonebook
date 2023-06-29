import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "number") {
            setNumber(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: uuidv4(),
            name,
            number,
        };

        addContact(newContact);

        setName("");
        setNumber("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Name
                    <input
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default ContactForm;
