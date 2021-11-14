import "./ProfileScreen.css";
import Nav from "../Nav";
import {selectUser} from "../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
const ProfileScreen = () => {

    const user=useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profile-body'>
                <h1>Edit Profile</h1>
                <div className='profile-info'>
                    <img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='logo'/>
                
                <div className='profile-details'>
                    <h2>{user.email}</h2>
                    <div className='profile-plans'>
                        <h3>Plans (Current Plan:premium)</h3>
                        <button onClick={()=> auth.signOut}className='signOut'>Sign Out</button>
                    </div>    
                </div> 
                </div>   
            </div>    
        </div>
    )
}

export default ProfileScreen
