import { db } from "../firebase";
import { collection, updateDoc,doc,setDoc } from "firebase/firestore";

export const addCompanyDetails = async (data,userid) => {
    const docRef = doc(db, "users", userid);
    await setDoc(docRef, {
        userid: userid,
        companyName: data.companyName,
        companyAddress: data.address,
        numberOfEmployees: data.numberOfEmployees,
        websiteUrl: data.websiteUrl,
        
    }).then(()=>{
        console.log("Document written with ID: ", docRef.id);
    }
    ).catch((error)=>{
        console.error("Error adding document: ", error);
    });

    }
