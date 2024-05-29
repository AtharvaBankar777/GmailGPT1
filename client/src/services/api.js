import axios from "axios";
import { API_URLS } from "./api.urls";

const API_URL = "http://localhost:8001";

const API_GMAIL = async (urlObject, payLoad, type) => {
 
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}`,
    data: payLoad,
  });
};


export { API_GMAIL };
