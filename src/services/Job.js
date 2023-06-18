import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchJobDetails = async (jobId) => {
    const docRef = doc(db, "joblistings", jobId);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return data;
      } else {
        console.log("No job found with the provided jobId");
        return null;
      }
    } catch (error) {
      console.error("Error fetching job seeker: ", error);
      return null;
    }
  };
