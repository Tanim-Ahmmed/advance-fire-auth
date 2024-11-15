import { createContext, useEffect, useState } from "react";
import {auth} from  '../../firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [currentUser, setCurrrentUser]= useState(null);
    const [loading, setLoading]= useState(true);


    const createUser = (email,password) =>{
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =() =>{
        setLoading(true);
        return  signOut(auth);
    }

    const signInWithGoogle =() =>{
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
      const unSub =  onAuthStateChanged(auth, currUser =>{
           
            console.log(currUser);
            setCurrrentUser(currUser);
            setLoading(false);
        })

        return ()=>{
           unSub();
        }

    },[])
    const authInfo ={
        name: "alu",
        loading,
        currentUser,
       createUser,
       signInUser,
       signOutUser,
       signInWithGoogle

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;