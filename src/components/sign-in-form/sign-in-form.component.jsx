// import { AuthErrorCodes } from 'firebase/auth';
// import { connectFirestoreEmulator } from 'firebase/firestore';
// import { Await, Form } from 'react-router-dom';

import {useState } from 'react';
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { 
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss'



const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password, } = formFields;

  const resetFormFields = ()=>{
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      ); 
      console.log(response);
      resetFormFields();
    } catch(error){
      switch(error.code){
        case 'auth/wrong-password':
          alert('incorrect email or password')
          break;
        case 'auth/user-not-found':
          alert('i dont have this email registered');
          break;
        default:
          console.log(error);
        }
    }
  };


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
    console.log(event)
  };

  return(
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Email'
          required
          onChange={handleChange} 
          type='email'
          name='email' 
          value={email}
        />

        <FormInput
          label='Password'
          required
          onChange={handleChange} 
          type='password'
          name='password' 
          value={password}
        />
        <div className='buttons-container' >
        <Button type='submit'> Sign In </Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google Sign In 
        </Button>

        </div>

      </form>
    </div>
  )
}

export default SignInForm;