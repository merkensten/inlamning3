import React, { useContext } from 'react'
import './NavigationBar.css'
import Logo from '../../shared/images/Logo.png'
import { useHistory} from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { Profile } from '../../components/profile/Profile'


export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
       return (authenticatedUser) 
       ? <div className="profile"> <Profile /> </div> 
       : <span onClick={() => history.push('signin')} className="signIn">Sign In</span> 
    }

    return (
        <div className="navBarContainer">
            
            
            <img onClick={() => history.push('/')} className="logo" src={Logo} alt="Logo"/>
            
            
            {displayUserIfAuthenticated()}
            
        </div>
    )
}
