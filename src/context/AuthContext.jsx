import React, { useState, useEffect, createContext,useContext } from "react";
import { auth,provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});


    const createUser = (email, password) => {
       createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        });
  
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        });
    }

    const loginGoogle = () => {
            signInWithPopup(auth, provider)
            .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // ...
            }).catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            console.log('error',errorCode);
            });

    }

    const logoutUser = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened
                
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
         console.log(user);
         setUser(user);
         });
         return () => {
             unsubscribe();
         }
     }, [])

    return (
        <UserContext.Provider value={{ createUser ,loginUser,logoutUser,loginGoogle,user}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = ()=>{
    return useContext(UserContext);
}
