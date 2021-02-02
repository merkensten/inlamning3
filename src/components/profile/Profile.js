import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import user from '../../shared/images/user.svg'
import './Profile.css'

export const Profile = () => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div className="profileContainer">
            <img className="userImg" src={user} alt="User icon"/>
            <span className="userDisplay">{authenticatedUser}</span>
        </div>
    )
}
