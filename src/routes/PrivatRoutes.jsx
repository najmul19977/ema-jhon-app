import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivatRoutes = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    if(loading){
        return <div>loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>


    return (
        <div>
            
        </div>
    );
};

export default PrivatRoutes;