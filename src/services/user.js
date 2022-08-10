import axios from "axios"
const baseUrl = 'http://51.38.51.187:5050/api/v1/users'

export const getAll = async (token) => {
    return await axios.get(baseUrl, token)
}

export const getMe = async (token) => {
    return await axios.get(baseUrl, token)
}

export const create = async (credentials) => {
    return await axios.post(baseUrl, credentials)
}

export const update = async (id, token) => {
    return await axios.put(`${baseUrl}/${id}`, token)
}

export const del =async (id, token) => {
    return await axios.delete(`${baseUrl}/${id}`, token)
}