import { useState } from "react";
// import API from '../services/api';
import { API_GMAIL } from "../services/api";
// import { sendEmailTORecpt } from "../services/api";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const call = async (payload, type = "") => {
    setResponse(null);
    setIsLoading(true);
    setError("");
    

    try {
      //   let res = await sendEmailTORecpt(urlObject, payload, type);
      let res = await API_GMAIL(urlObject, payload, type);
      console.log(res);
      setResponse(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { call, response, error, isLoading };
};

export default useApi;
