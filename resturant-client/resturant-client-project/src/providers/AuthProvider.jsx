/* eslint-disable react/prop-types */

import {
    GoogleAuthProvider,
    
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../component/firebase/firebase.config";
import { getAuth} from "firebase/auth";
import axios from 'axios'

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
const updateUserProfile = (name, image, email) => {
      
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
        email: email
      })
      .then(() => {
        // Profile updated!
        // ...
        setUser({displayName : name, photoURL : image, email: email})
      // eslint-disable-next-line no-unused-vars
      }).catch((error) => {
        
        // An error occurred
        // ...
      });
      
}

// sign in user
const signInUser = (email, password) => {
    
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    
    return signInWithPopup(auth, googleProvider);
     
  };

  



  //logout
  const logout = () => {
    setLoading(true);

    
     
    // const { data } = await axios(`https://resturant-server-liart.vercel.app/logout`, {
    //     withCredentials: true,
    //   })
    //  console.log(data)
      return signOut(auth)
    
  };

   // observer
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
     //   console.log('current user', currentUser);
        setLoading(false);
        // if user exists then issue a token
        if (currentUser) {
            axios.post('https://resturant-server-liart.vercel.app/jwt', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log('token response', res.data);
                })
        } else {
            axios.post('https://resturant-server-liart.vercel.app/logout', loggedUser, {
                withCredentials: true
            })
                .then(res => {
                    console.log(res.data);
                })
        }
        
    })
    return () => {
        return unsubscribe()
    }
},[user?.email])

    const info = {
       createUser,
    signInUser,
    googleLogin,
    
    
    logout,
    user,
    
      updateUserProfile,
      loading,
      setLoading,
    }
    return (
        <>
        <AuthContext.Provider value={info}>
            {children}
           
        </AuthContext.Provider>
        
        </>
    );
};

export default AuthProvider;