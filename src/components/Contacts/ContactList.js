import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Contacts.module.css";
import { ReactComponent as CloseIcon } from "../../icons/delete.svg";
import { contactsSelector, contactsOperations } from "../../redux/contacts";

const ContactList = ({ contactList, onDeleteContact }) => (
  <>
    <ul className={styles.contactsBlock}>
      {contactList.map(({ name, number, id }) => (
        <li className={styles.contactItem} key={id}>
          {name}: {number}
          <button
            onClick={() => onDeleteContact(id)}
            className={styles.buttonDelete}
            aria-label='Видалити контакт'
          >
            <CloseIcon width='20' height='20' fill='#fff' />
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contactList: contactsSelector.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
