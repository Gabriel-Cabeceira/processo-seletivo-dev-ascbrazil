import axios from 'axios';

export const getContatos = axios.create({
    baseURL: 'http://18.234.226.136:8080/getContatos',
})