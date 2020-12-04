import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-14b2b.cloudfunctions.net/api'  //API (cloud function) URL
});

export default instance;


//Localhost
//http://localhost:5001/clone-14b2b/us-central1/api

//https://clone-14b2b.web.app deployment for frontend