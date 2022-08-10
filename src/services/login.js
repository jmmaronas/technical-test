import axios from 'axios'
const baseUrl = 'http://51.38.51.187:5050/api/v1/auth'


export const login = async (credentials) => {
    const { data } = await axios.post(baseUrl + '/log-in', credentials)
    return data
}

export const signUp = async (newUser) => {
    const {data} = await axios.post(baseUrl + '/sign-up', newUser)
    return data
}