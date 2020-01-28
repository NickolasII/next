import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3003/api/', withCredentials:true
    baseURL: 'http://10.18.0.164:3000'
});

