import axios from "axios";
    
const instance = axios.create({
  baseURL: "https://blog-64c02-default-rtdb.firebaseio.com/"
});
export default instance;

