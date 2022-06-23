import axios from 'axios'


// const api = axios.create({
//     baseURL:process.env.SERVER_URL
// })



export const sendDirection = (direction) => {
    axios.post('http://localhost:3000/direction', {
        message:direction
    })
}
