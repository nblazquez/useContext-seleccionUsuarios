import React, { useContext } from 'react'
import { UserContext } from '../context/User/UserContext';

const Profile = () => {
    const { selectedUser } = useContext(UserContext);
    console.log(selectedUser);

    return (
        <>
            {selectedUser.id 
                ?   (<div className='card card-body text-center'>
                        <img 
                            className='card-img-top rounded-circle m-auto img-fluid' 
                            src={selectedUser.avatar} 
                            alt={`Foto de ${selectedUser.first_name}`}
                            style={{width: 180}} />
                        <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                        <h3>{selectedUser.email}</h3>
                    </div>) 
                : (<div><h1>No hay usuario seleccionado</h1></div>)}
        </>
    )
}

export default Profile
