import axios from 'axios';

const ApiUrl = 'https://rayentutorialtestapp.azurewebsites.net/'

export const Post = (path, payload) => {
    return axios.post(`${ApiUrl}${path}`, payload)
        .then(response => {
            return response.data;
        })
}

export const Get = (path) => {
    return axios.get(`${ApiUrl}${path}`)
        .then(response => {
            return response.data;
        })
}

export const Delete = (path) => {
    return axios.delete(`${ApiUrl}${path}`)
    .then(response => {
        return response.data;
    })
}

export const Put = (path, payload) => {
    return axios.put(`${ApiUrl}${path}`, payload)
    .then(response => {
        return response.data;
    }
        )
}