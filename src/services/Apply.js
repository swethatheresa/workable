import { db } from "../firebase";
import { doc, collection, addDoc, serverTimestamp, updateDoc, query, where, getDocs, getDoc} from "firebase/firestore";
import { increment } from "firebase/firestore";

export const apply = async (data) => {
  const applicantsCollectionRef = collection(db, "applicants");
  await addDoc(applicantsCollectionRef, {
    userid: data.userid,
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
    coverLetter: data.coverLetter,
    applied_date: serverTimestamp(), 
    status: "Applied",
  })
    .then((docRef) => {
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

export const getApplied = async (userid) => {
  try {
    const applicantsQuery = query(collection(db, "applicants"), where("userid", "==", userid));
    const applicantSnapshot = await getDocs(applicantsQuery);

    const joblistingIds = [];

    applicantSnapshot.forEach((doc) => {
      const { joblistingId } = doc.data();
      joblistingIds.push(joblistingId);
    });

    const jobDetails = [];

    for (const joblistingId of joblistingIds) {
      const joblistingDoc = await getDoc(doc(db, "joblistings", joblistingId));
      if (joblistingDoc.exists()) {
        const jobData = joblistingDoc.data();
        jobDetails.push(jobData);
      }
    }

    console.log("Job details for applied listings:", jobDetails);
    return jobDetails;
  } catch (error) {
    console.error("Error fetching applied job details:", error);
    return [];
  }
};

