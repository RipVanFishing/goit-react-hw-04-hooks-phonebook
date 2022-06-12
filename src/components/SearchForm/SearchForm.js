import React from "react";
import css from './SearchForm.module.css';

const SearchForm = ({ value, onChange }) => (
<div className={css.form_box}>
<label className={css.form_label}>Find contacts by name
 <input value={value} onChange={onChange} name='find-name' type='text' className={css.filter_form} />
        </label>
        </div>
)
   
    

export default SearchForm