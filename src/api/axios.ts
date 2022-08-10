import * as axiosLib from 'axios';



let API_BASE_URL =  'https://api.spoonacular.com/'
/**
 * Instantiate Axios instance
 */
 const token = 'b001fff46a8e4dafadc90afde144c8c4'

 
const axios = axiosLib.default.create({
  baseURL: API_BASE_URL,
  timeout: 30000,

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
