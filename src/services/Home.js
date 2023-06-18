import { db } from "../firebase";
import {
  collection,
  orderBy,
  getDocs,
  query,
  where,
  limit,
  startAfter,
} from "firebase/firestore";

const ref = collection(db, "joblistings");
const pageLimit = 4;

export const fetchJobListings = async (queryobjfromfilters) => {
  const mapqueryobjtoquery = queryobjfromfilters.map((queryobj) =>
    where(queryobj.field, queryobj.operator, queryobj.value)
  );
  const querytoperform = query(
    ref,
    ...mapqueryobjtoquery,
    orderBy("posted_date", "desc"),
    limit(pageLimit)
  );
  const querySnapshot = await getDocs(querytoperform);
  const joblistings = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(joblistings);

  return {
    joblistings,
    lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1],
  };
};

export const fetchInitialPage = async () => {
  const querySnapshot = await getDocs(
    query(ref, orderBy("posted_date", "desc"), limit(pageLimit))
  );
  const joblistings = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(joblistings);

  return {
    joblistings,
    lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1],
  };
};

export const fetchNextPage = async (lastDocument) => {
  const querySnapshot = await getDocs(
    query(
      ref,
      orderBy("posted_date", "desc"),
      startAfter(lastDocument),
      limit(pageLimit)
    )
  );
  const jobListings = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(jobListings);

  return {
    jobListings,
    lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1],
  };
};

export const fetchSortedJobListings = async (sortby) => {
  const querySnapshot = await getDocs(
    query(ref, orderBy(sortby, "desc"), limit(pageLimit))
  );
  const jobListings = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(jobListings);

  return {
    jobListings,
    lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1],
  };
};
