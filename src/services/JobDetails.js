import { db } from "../firebase";
import { collection, addDoc,serverTimestamp } from "firebase/firestore";

export const addJobDetails = async (data,userid) => {
    const collectionRef = collection(db, "joblistings");
    await addDoc(collectionRef, {
        JobTitle: data.JobTitle,
        JobLocation: data.JobLocation,
        SalaryRange: data.SalaryRange,
        JobType: data.JobType,
        disabilityCategory: data.disabilityCategory,
        ApplicationDeadline: data.ApplicationDeadline,
        NumberofOpenings: data.NumberofOpenings,
        jobDescription: data.jobDescription,
        experience: data.experience,
        qualification: data.qualification,
        posted_date: serverTimestamp(), 
        numberofapplicants: 0,  
        userid: userid        
    }).then(()=>{
        console.log("Document added");
    }
    ).catch((error)=>{
        console.error("Error adding document: ", error);
    });

    }