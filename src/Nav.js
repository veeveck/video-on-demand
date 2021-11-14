import './Nav.css'
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Nav = () => {
    const [show,handleShow]=useState(false);
    const history=useNavigate();
    const transitionNavBar=()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar);
    }, []);
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div className='nav-contents'>
                <img  onClick={()=>history('/')}className='nav-logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='logo'/>
                <img onClick={()=>history('/profile')} className='nav-avatar' src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='avatar'/>
            </div>
        </div>
    )
}

export default Nav
