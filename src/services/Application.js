import { db } from "../firebase";
import { doc, addDoc,serverTimestamp, updateDoc } from "firebase/firestore";
import { increment } from "firebase/firestore";

export const application = async (data, userid) => {
  const docRef = doc(db, "applicants", userid);
  await addDoc(docRef, {
    userid: userid,
    joblistingId: data.joblistingId,
    name: data.name,
    dob: data.dob,
    gender: data.gender,
    resumeLink: data.resumeLink,
    contactNumber: data.contactNumber,
    disabilityCategory: data.disabilityCategory,
    email: data.email,
    address: data.address,
    experience: data.experience,
    qualification: data.qualification,
    coverLettter: data.coverLettter,
    applied_date: serverTimestamp(), 
    status: "Applied",
  })
    .then(() => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  const joblistingRef = doc(db, "joblistings", data.joblistingId);
  await updateDoc(joblistingRef, {
    numberofapplicants: increment(1),
  })
    .then(() => {
      console.log("Number of applicants updated in joblistings collection");
    })
    .catch((error) => {
      console.error("Error updating number of applicants: ", error);
    });
};