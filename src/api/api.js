import Axios from "axios";

const axiosInstance = Axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '10d6cd39-b1b4-43cf-88a9-4891cfed3dfa' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const getUsersFromServer = (currentPage = 1, pageSize = 10) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const followToUser = (userId) => {
    return axiosInstance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}

export const unfollowFromUser = (userId) => {
    return axiosInstance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}