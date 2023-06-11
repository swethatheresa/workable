import { collection, query, orderBy, startAfter, limit, getDocs,where} from 'firebase/firestore';
import { db } from "../firebase";
const ref = collection(db, 'joblistings'); 

const field = 'posted_date';
const pageSize = 1;


const fetchInitialPage = async (userid) => {
  if(userid)
  {
    const initialQuery = query(ref, orderBy(field,"desc"), limit(pageSize),where("userid", "==", userid));
    const snapshot = await getDocs(initialQuery);
    const initialResults = snapshot.docs.map((doc) => doc.data());
    const lastDocument = snapshot.docs[snapshot.docs.length - 1];
    return { initialResults, lastDocument };
  }
};

const fetchNextPage = async (userid,lastDocument) => {
  const nextPageQuery = query(ref, orderBy(field,"desc"), startAfter(lastDocument), limit(pageSize),where("userid", "==", userid));
  const snapshot = await getDocs(nextPageQuery);
  const nextPageResults = snapshot.docs.map((doc) => doc.data());
  const newLastDocument = snapshot.docs[snapshot.docs.length - 1];
  return { nextPageResults, newLastDocument };
};

export { fetchInitialPage, fetchNextPage };