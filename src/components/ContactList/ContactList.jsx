import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <ul className={styles.contact_list}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button
                        onClick={() => deleteContact(contact.id)}
                        className={styles.button}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
