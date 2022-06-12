
import React from "react";
import { RiDeleteBin5Line } from 'react-icons/ri';
import {AiFillPhone} from 'react-icons/ai'
import css from './Contacts.module.css';


const Contacts = ({contacts,onDelete}) => {
    return (
        <div>
            <h2 className={css.title_contacts}>Contacts:</h2>  
            <ul className={css.list}>
                
                {contacts.map((el) => (<li key={el.id} className={css.item_name}>
                    <AiFillPhone/>
                <p className={css.text_name}>{el.name}: {el.number}</p>
                <button type="button" onClick={()=> onDelete(el.id)} className={css.delete_button}><RiDeleteBin5Line size={24}/></button>
               </li>))}
                 </ul>   
        </div>
    )

}

export default Contacts;