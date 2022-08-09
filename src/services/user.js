import axios from "axios"
const baseUrl='http://51.38.51.187:5050/api/v1/users'

export const getAll=async (token)=>{
    return await axios.get(baseUrl, token)    
}