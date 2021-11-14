
import { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

const LoginScreen = () => {

    const[signIn,setSignIn]=useState(false);

    return (
        <div className='LoginScreen'>
            <div className='loginScreen-bg'>
                <img  className='logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo'/>
                <button className='button' onClick={()=>setSignIn(true)}>Sign In</button>
                <div className='loginScreen-gradient'/>
            </div>    
            <div className='loginScreen_body'>
                {signIn ?(<SignUpScreen/>):(
                    <>
                              <h1>Films, programmes TV et plus encore illimités.</h1>
                              <h2>Regarder n'importe où, Annuler à tout moment</h2>
                              <h3>Prêt à regarder ? Entrez votre email pour commencer votre abonnement !!</h3>
                              <div className='loginScreen_input'>
                                  <form>
                                   <input type='email' placeholder=' Votre Adresse Courriel'/>
                                   <button className='start-btn' onClick={()=>setSignIn(true)}>Commencer</button>
                                  </form>    
                             </div>    
                   </>
                    )}
                
            </div>    
        </div>
    )
}

export default LoginScreen
