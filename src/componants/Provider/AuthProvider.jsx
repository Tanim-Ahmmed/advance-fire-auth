import { createContext } from "react";
import {auth} from  '../../firebase.init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo ={
        name: "alu",
       createUser,
       signInUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;