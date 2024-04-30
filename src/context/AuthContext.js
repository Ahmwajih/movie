import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from 'firebase/auth'

import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { auth } from "../auth/firebase";
 export const AuthContext = createContext();


export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState(false);
    let navigate = useNavigate()

    useEffect(() => {
        userObserver()
      }, [])

      const createUser = async (email, password, displayName) => {
          try {
              await createUserWithEmailAndPassword(auth, email, password);
              await updateProfile(auth.currentUser, { displayName: displayName });
              return
              navigate('/')

          } catch (error) {
              console.log(error);
          }
      }

      const signIn = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          return 
          navigate('/')

        } catch (error) {
          console.log(error);
        }
      }
      const logOut = async () => {
        signOut(auth)
      }

      const userObserver = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { email, displayName, photoURL } = user
            // setUserLoggedIn(true);
            setCurrentUser({email, displayName, photoURL})
          } else {
            // setUserLoggedIn(false);
            setCurrentUser(false)
            console.log('logged out')
          }
        })
      }


      const signUpProvider = async () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
        })
      }

      const forgotPassword = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email)
        } catch (error) {
          console.log(error)
        }
      }

      const values = {
        createUser,
        signIn,
        logOut,
        currentUser,
        signUpProvider,
        forgotPassword,
      }



    return (
        <AuthContext.Provider value={values}>
            { children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext);
  };
