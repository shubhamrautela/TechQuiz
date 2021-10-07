
const signup = async (username, email, password) => {
  try {
    
    const data = { username, email, password};

fetch('http://techquiz.us-east-1.elasticbeanstalk.com/create', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  return(data)
})
.catch((error) => {
  console.error('Error:', error);
})


}
finally{

}

}




export default signup