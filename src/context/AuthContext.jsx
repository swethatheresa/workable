import React, { useState, useEffect, createContext,useContext } from "react";
import { auth,provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});



    const createUser = (email, password) => {
        return new Promise ((resolve,reject) => {
       createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        resolve(true)
        // ...
        })
        .catch((error) => {
            reject(error)
        });
        });
    }

    const loginUser = (email, password) => {
        return new Promise ((resolve,reject) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        //console.log(user);
        resolve(true)
        // ...
        })
        .catch((error) => {
            reject(error)
        });
        });
    }

    const loginGoogle = () => {
            return new Promise ((resolve,reject)=>{
            signInWithPopup(auth, provider)
            .then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUser(user);
           // console.log(user);
            resolve(true)
            // ...
            }).catch((error) => {
            // Handle errors here
           reject(error);
            });
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
     }, [user])

    return (
        <UserContext.Provider value={{ createUser ,loginUser,logoutUser,loginGoogle,user}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = ()=>{
    return useContext(UserContext);
}
