import axios from 'axios'

const apiUrl = axios.create({
    baseURL : 'http://172.105.62.58/'
})

export default apiUrl;