import React, { useContext } from 'react';
import { AuthContext } from '../componants/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const { currentUser, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(currentUser){
        return children;  
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoutes;