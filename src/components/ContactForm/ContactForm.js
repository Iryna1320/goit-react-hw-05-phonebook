import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  onAddContact = event => {
    const { items } = this.props;

    event.preventDefault();

    if (
      items.find(
        item => item.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      alert('Такой контакт существует!');
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { onAddContact, inputChange, nameInputId, numberInputId } = this;

    return (
      <form className={styles.formContact} onSubmit={onAddContact}>
        <label htmlFor={nameInputId} className={styles.formLabel}>
          Name
          <input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            type="text"
            placeholder="введите имя"
            name="name"
            value={name}
            className={styles.formInput}
            onChange={inputChange}
            id={nameInputId}
          />
        </label>

        <label htmlFor={numberInputId} className={styles.formLabel}>
          Number
          <input
            type="telephone"
            placeholder="введите номер"
            name="number"
            className={styles.formInput}
            value={number}
            onChange={inputChange}
            id={numberInputId}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
