import axios from 'axios'


const api = axios.create({
    baseURL:process.env.SERVER_URL
})



export const sendDirection = (direction) => {
    api.post('/direction', {
        message:direction
    })
}
