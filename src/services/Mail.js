import axios from 'axios';

const sendEmail = (tomail,role,company) => {
  const emailData = {
    to: tomail,
    from: 'jobs.workable@gmail.com',
    company: company,
    role: role,
  };
  console.log(emailData);

  axios
    .post('http://localhost:3000/send-email', emailData)
    .then((response) => {
      console.log(response.data); // Success response from the server
    })
    .catch((error) => {
      console.error(error); // Error response or failed request
    });
};

const sendEmailReject = (tomail,role,company) => {
  const emailData = {
    to: tomail,
    from: 'jobs.workable@gmail.com',
    company: company,
    role: role,
  };
  console.log(emailData);

  axios
    .post('http://localhost:3000/reject-email', emailData)
    .then((response) => {
      console.log(response.data); // Success response from the server
    })
    .catch((error) => {
      console.error(error); // Error response or failed request
    });
};



export {sendEmail,sendEmailReject};