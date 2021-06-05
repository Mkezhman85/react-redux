import axios from 'axios'

//https://jsonplaceholder.typicode.com/todos/1

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
    }    
})