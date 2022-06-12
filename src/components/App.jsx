
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';
import Contacts from "./Contacts";
import SearchForm from "components/SearchForm";
import Phonebook from "./Phonebook/Phonebook";



export class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    
    filter: ''
    
  }
  componentDidMount() {
    const parseContacts = localStorage.getItem('contacts');
    if(parseContacts) { this.setState({contacts:JSON.parse(parseContacts)})}
   
  }
  componentDidUpdate(prevProps, prevState) {
   
    if (prevState.contacts !== this.state.contacts) {
      const stringifyContacts = JSON.stringify(this.state.contacts)
    localStorage.setItem('contacts', stringifyContacts)
   }
   

  }

   handleFilter = (event) => {
         const { value } = event.currentTarget;
        this.setState({
           filter: value
        })
        
    }

  formSubmitHandler = data => {
    const arrName = this.state.contacts.map( el => el.name.toLowerCase())
    const newContact = { id: nanoid(), ...data }
    console.log(newContact)
    arrName.includes(data.name.toLowerCase()) ? Notiflix.Notify.failure(`${data.name} is already in your contacts`,{timeout:5000}) : 
      this.setState(() => ({ contacts: [newContact, ...this.state.contacts] })
      
    )
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    })
  )}
    
 
  render() {
    const { filter,contacts } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase()
    const filteredNames = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    return (
      <>
        <Phonebook onSubmit={this.formSubmitHandler} contacts={contacts.name} />
        <SearchForm value={filter} onChange={this.handleFilter }/>
        <Contacts contacts={filteredNames} onDelete={this.deleteContact }/>
        
    </>
    )
  }
}
