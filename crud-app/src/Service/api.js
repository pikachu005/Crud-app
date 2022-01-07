import axios from 'axios';

const url = "http://localhost:3003/users";

export const getUsers =  async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);  //"http://localhost:3003/users/"
}


export const addUsers = async (user) => {
    return await axios.post(url, user);
}

export const editUsers = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}

export const deleteUser = async(id) => {
    return await axios.delete(`${url}/${id}`);
}