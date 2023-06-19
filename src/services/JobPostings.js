import { collection, query, orderBy, startAfter, limit, getDocs,where, QuerySnapshot,doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase";
const ref = collection(db, 'joblistings'); 

const field = 'posted_date';
const pageSize = 9;


const fetchInitialPage = async (userid) => {
  if(userid)
  {
    const initialQuery = query(ref, orderBy(field,"desc"), limit(pageSize),where("userid", "==", userid));
    const snapshot = await getDocs(initialQuery);
    const initialResults = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));    
    const lastDocument = snapshot.docs[snapshot.docs.length - 1];
    return { initialResults, lastDocument };
  }
};

const fetchNextPage = async (userid,lastDocument) => {
  const nextPageQuery = query(ref, orderBy(field,"desc"), startAfter(lastDocument), limit(pageSize),where("userid", "==", userid));
  const snapshot = await getDocs(nextPageQuery);
  const nextPageResults = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));    
  const newLastDocument = snapshot.docs[snapshot.docs.length - 1];
  return { nextPageResults, newLastDocument };
};

const searchDocuments = async (userid, searchValue) => {

    const querySnapshot = await getDocs(
      query(
        ref, 
        orderBy("JobTitle", "desc"), 
        limit(pageSize), 
        where("userid", "==", userid), 
        where('JobTitle', '>=', searchValue),
        where('JobTitle', '<', searchValue + '\uf8ff')
      ));
    const matchingDocuments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));    
    const lastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];
    console.log(matchingDocuments);
    console.log(lastDocument);
    return { matchingDocuments, lastDocument };
}

const searchNextDocuments = async (userid, searchValue, lastDocument) =>{
    const querySnapshot = await getDocs(
      query(
        ref, 
        orderBy("JobTitle", "desc"), 
        limit(pageSize), 
        where("userid", "==", userid), 
        where('JobTitle', '>=', searchValue),
        where('JobTitle', '<', searchValue + '\uf8ff')
      ));
    const matchingDocuments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));    
    const newLastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { matchingDocuments, newLastDocument };
}
const fetchDocument = async (id) => {
  const docRef = doc(db, 'joblistings', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
  }
};

const updateDocument = async (id, data) => {
  const docRef = doc(db, 'joblistings', id);
  const docSnap = await updateDoc(docRef, data);
};


export { fetchInitialPage, fetchNextPage, searchDocuments, searchNextDocuments,fetchDocument,updateDocument };
