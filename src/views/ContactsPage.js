import React, { Component } from "react";
import ContactForm from "../components/Contacts/ContactForm";
import Filter from "../components/Contacts/Filter";
import ContactList from "../components/Contacts/ContactList";
import styles from "../components/Contacts/Contacts.module.css";
import { connect } from "react-redux";
import { contactsOperations } from "../redux/contacts";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
