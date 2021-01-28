import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from "yup";


export default function Form(props) {

//Props from App.JS-------------------------------------------------
const { values, errors, change, submit, disabled} = props;


//On Change Function-----------------------------------------------
const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }
// Submit (prevents it from reloading and then executes the function) ---------------------------------------------------------
const onSubmit = event => {
    event.preventDefault()
    submit()
}


    return (
        <div className="form-container">
        <form onSubmit={onSubmit}>
            <label>
                name
                <input
                    placeholder='...'
                     type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                     />
                 </label>
                 <label>
                     email
                 <input
                    placeholder='...'
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                     />
                 </label>
                 <label>
                     password
                 <input
                    placeholder='...'
                    type='text'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                     />
                 </label>
                 <label className='checkbox'>
                     I agree to terms:
                 <input
                    type='checkbox'
                    name='service'
                    value={values.service}
                    onChange={onChange}
                     />
                 </label>
                 <br />
                 <button disabled={disabled}>Submit</button>





        </form>
        
        
        </div>
        
    )
}