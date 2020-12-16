import Vue from 'vue';
import axios from 'axios';

const instace = axios.create({
    baseURL: process.env.VUE_APP_API_URI,
    headers: {
        // 'Content-Type': 'application/json':
        'Content-Type': 'application/json',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    }
})

Vue.axios = instace;

export default instace;