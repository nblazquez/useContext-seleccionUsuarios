import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/User/UserContext';

const UserList = () => {

    const { users,  getUsers, getProfile } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="list-group h-100">
            {
                users.map( user => (
                    <a className='list-group-item list-group-item-action d-flex flex-row justify-content-start' 
                        href='#!' 
                        key={user.id}
                        onClick={() => getProfile(user.id)}
                    >
                        <img src={user.avatar} alt="" className='img-fluid me-4 rounded' width='70' />
                        <p>{`${user.first_name} ${user.last_name}`}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList
