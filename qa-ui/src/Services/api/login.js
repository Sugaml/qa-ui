import axios from 'axios';

export const postRequest =  async (requestLoginData, url) => {
  const result= await axios.post(`${process.env.REACT_APP_API}/${url}`, requestLoginData);
  console.log("RESULT :: ",result)
    return  result
  };
