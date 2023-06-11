import React, { useState, useEffect } from 'react';
import { Grid,CircularProgress,Button } from '@mui/material';
import Card from './Card';
import { fetchInitialPage, fetchNextPage } from '../services/JobPostings'
import { UserAuth } from "../context/AuthContext";


const Postings = () => {
  const [results, setResults] = useState([]);
  const [lastDocument, setLastDocument] = useState(null);
  const [loading, setLoading] = useState(false);
  const {user} = UserAuth();

  const fetchInitialData = async () => {
    setLoading(true);
    if(user)
    {
      const { initialResults, lastDocument } = await fetchInitialPage(user.uid);
      setResults(initialResults);
      setLastDocument(lastDocument);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [user]);
 
  useEffect(() => {
    if(results)
    {    
      setLoading(false);
    }
  }, [results, lastDocument]);


  const loadNextPage = async () => {
    setLoading(true);
    const { nextPageResults, newLastDocument } = await fetchNextPage(user.uid,lastDocument);
    setResults((prevResults) => [...prevResults, ...nextPageResults]);
    setLastDocument(newLastDocument);
  };

  return (
    <Grid container sx={{ mt: 9, padding: 2, alignItems: 'center', justifyContent: 'center' }}>
      {results && results.map((result, index) => (
        <Card
          key={index}
          JobTitle={result.JobTitle}
          JobLocation={result.JobLocation}
          posted_date={result.posted_date.toDate().toDateString()}
          experience={result.experience}
          numberofapplicants={result.numberofapplicants}
          ApplicationDeadline={result.ApplicationDeadline.toDate().toDateString()}
          workmode={result.workmode}
        />
      ))}
      {loading ? (
        <Grid container alignItems={'center'} justifyContent={'center'}>
          <CircularProgress size={40}/>
        </Grid>
      ) : (
        <Grid container alignItems={'center'} justifyContent={'center'}>
          {lastDocument &&<Button onClick={loadNextPage}>Load More</Button>}
        </Grid>
      )}
    </Grid>
  );
};

export default Postings;
