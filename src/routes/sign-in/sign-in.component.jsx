import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth
 } from '../../utils/firebase/firebase.utils';
 import { ReactComponent as GoogleLogo } from '../../assets/googlelogo.svg'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';



const SignIn = ()=>{

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  } 

  
  return(
    <div>
      <h1>SiGn In</h1>
      <div>
        <button className='google-logo' onClick={logGoogleUser}> Sign in with {<GoogleLogo />}</button>
        <SignUpForm />
      </div>
    
    </div>
  )
};

export default SignIn;  