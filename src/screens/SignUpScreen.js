import { useRef } from 'react';
import {auth} from '../firebase'
import './SignUpScreen.css'

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value,
            pwdRef.current.value).then((authUser)=>{
                console.log(authUser);
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            pwdRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>alert(error.message));
    }
    return (
        <div className='signUpScreen'>
            <form>
                <h1> Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input  ref={pwdRef}type="Password" placeholder='Password'/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className='grey'>New to Netflix ?</span>
                 <span className='signUp_link' onClick={register}> Sign up Now!!!</span></h4>
            </form>    
            
        </div>
    )
}

export default SignUpScreen
