import Form from './componants/Form';
import Friends from './componants/Friends'
import schema from './validation/FormSchema'
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'



// INITIAL STATE ------------------

const initialFormValues = {
    name: '',
    email:'',
    password: '',
    //checkbox
    service: false,
}
const initialErrorValues = {
  name: '',
  email: '',
  password: '',
  service: '',
}

const initialDisabled = true;



function App() {

//State Here ------------------------------------------------------------ 
const [formValues, setFormValues] = useState(initialFormValues);
const [errorValues, setErrorValues] = useState(initialErrorValues);
const [users, setUsers] = useState([]);
const [disabled, setDisabled] = useState(initialDisabled);

//Input Changes ---------------------------------------------------------
const handleChange = ( name, value ) => {
  setFormValues({...formValues, [name]: value})
}

//Form Submission -------------------------------------------------------
const formSubmit = () => {
  const newUser = {
    name: formValues.name,
    email: formValues.email,
    password: formValues.password,
    service: formValues.service,
  }
  postData(newUser)
}

//Post New User to Database ---------------------------------------------
const postData = (newUser) => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([...users, res.data]);
    setFormValues(initialFormValues)
  })
  .catch(error => {
    console.log(error)
  })
}

//Validate Data----------------------------------------------------------
useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid);
  })
},[formValues])

  return (
    <div className="App">
      
      <div className="container">
        <div className='colorbox'></div>
        <Form
        values={formValues}
        errors={errorValues}
        change={handleChange}
        submit={formSubmit}
        disabled={disabled}
        />
        {
           users.map(user => {
             return <Friends key={user.id} details={{user}} />
           })
         }
      </div>
      
      </div>
    
  );
}

export default App;
