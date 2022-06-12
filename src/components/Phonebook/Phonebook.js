
import React, {Component} from "react";
import css from './Phonebook.module.css';
import { nanoid } from "nanoid";

const INITIAL_STATE = {
    name: '',
    number:''
}

class Phonebook extends Component {
    
    
    state = {
       ...INITIAL_STATE
     }
    
    handleSubmit = e => {
    e.preventDefault();
        this.props.onSubmit({ ...this.state });
        
        this.reset();
        }

  handleChange = e => {
    const { name, value } = e.currentTarget;
     this.setState({ [name] : value });
  }
    reset = () => {
    this.setState({...INITIAL_STATE})
}
  render() {
     const randomId = nanoid();
      return (
            <>
                <h1 className={css.title_phonebook}>Phonebook</h1>
                <form className={css.phonebook_form} onSubmit={this.handleSubmit}>
                    <label className={css.form_label}> Name
                        <input className={css.form_input}
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                  </label>
                  <label className={css.form_label}> Number
    <input 
  className={css.form_input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                          required
                          onChange={this.handleChange}
                          value={this.state.number}
/></label>
                    <button type="submit" className={css.button_submit} >Add contact</button>
              </form>
              
          
        </>
        
    );
    }
}

export default Phonebook;