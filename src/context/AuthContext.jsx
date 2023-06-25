import React, { useState, useEffect, createContext,useContext } from "react";
import { auth,provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { checkRole } from "../services/Auth";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [role , setRole] = useState("");



    const createUser = (email, password) => {
        return new Promise ((resolve,reject) => {
       createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
         setRole("employer");
         console.log("role",role)
        setUser(user);
        console.log(user);
        //set user and role in user state
        
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
        .then(async(userCredential) => {
        // Signed in
        const user = userCredential.user;
        const role = await checkRole(user.uid);// Retrieve the role
        if(role==="jobseekers")
        return new Promise((resolveLogout, rejectLogout) => {
            logoutUser()
              .then(() => {
                rejectLogout("Please login using Job Seeker portal");
              })
              .catch((error) => {
                rejectLogout("Please login using Job Seeker portal");
              });
          });
        setRole( role); // Retrieve the role
       
        // useEffect(() => {
        // setUser(userWithRole);
        // }, [userWithRole]);
        console.log(user);
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
            .then(async(result) => {
            // The signed-in user info.
            //check if user has already signed up

            const user = result.user;
            const uid = user.uid;
            if(uid){
            const role = await checkRole(uid);
            if(role==="none"){
                setRole("employer");
                resolve("new");
            }
            else  if(role==="jobseekers")
            return new Promise((resolveLogout, rejectLogout) => {
                logoutUser()
                  .then(() => {
                    rejectLogout("Please login using Job Seeker portal");
                  })
                  .catch((error) => {
                    rejectLogout("Please login using Job Seeker portal");
                  });
              });
            
            setRole(role);
           // console.log(user);
            resolve("old")
            // ...
            }}).catch((error) => {
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

     async function rolefetching(){
        if(user.uid){
        const role = await checkRole(user.uid);
        }
        setRole(role);
     }
        useEffect(() => {   
            if(user!==null)
                rolefetching();
            
            
        }, [user])

        // useEffect(() => {
        //     if(role==="jobseekers")
        //         logoutUser();
        // }, [role])

    return (
        <UserContext.Provider value={{ createUser ,loginUser,logoutUser,loginGoogle,user,role}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = ()=>{
    return useContext(UserContext);
}
