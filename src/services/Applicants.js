import { 
  collection, 
  orderBy, 
  getDocs, 
  query, 
  where, 
  getDoc , 
  doc, 
  getCountFromServer,
  updateDoc
} from 'firebase/firestore';
import { db } from "../firebase";
const ref = collection(db, 'applicants'); 

export const fetchApplicants = async (jobid) => {
    const querySnapshot = await getDocs(query(ref,orderBy("appliedDate","desc"),where("joblistingId", "==", jobid)))
    const applicants = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return applicants;
}
export const fetchApplicantsByStatus = async (jobid,status) => {
    const querySnapshot = await getDocs(query(ref,orderBy("appliedDate","desc"),where("joblistingId", "==", jobid),where("status", "==", status)))
    const applicants = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return applicants;
}
export const fetchApplicant = async (id) => {
    const docRef = await getDoc(doc(db, 'applicants', id));
    if (docRef.exists()) {
      const applicant = {
        id: docRef.id,
        ...docRef.data()
      };
      return applicant;
    }
    return null; 
  };

export const getCountOfApplicants = async (jobid) => {
    const q = query(ref,where("joblistingId", "==", jobid));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;    
}

export const changeStatus = async (id,status) => {
    const docRef = doc(db, 'applicants', id);
    await updateDoc(docRef, {
        status: status
    });
}
  