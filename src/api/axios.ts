import * as axiosLib from 'axios';
import { API_BASE_URL, API_KEY} from '../utils/config';



/**
 * Instantiate Axios instance
 */

 
const axios = axiosLib.default.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  params:{
  
    "apiKey": API_KEY,
},

});




const setAxiosCommonHeader = (key: string, value: string) => {
  axios.defaults.headers.common[key] = value;
};

const deleteAxiosCommonHeader = (key: string) => {
  delete axios.defaults.headers.common[key];
};

// Exports
export { deleteAxiosCommonHeader, setAxiosCommonHeader, axios };
export default axios;
