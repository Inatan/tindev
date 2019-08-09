import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' // android studio 10.0.2.2 // genimition  10.0.3.2  - local na máquin ip do wifi 192.168.0.10
    // adb reverse tcp:3333 tcp:3333
});

export default api;