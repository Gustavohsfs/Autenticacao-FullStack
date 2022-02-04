import React from 'react';
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const createSession = async (usuario, senha) => {
    return api.post('/usuario/login', { usuario, senha })
}

export const getUsers = async () => {
    return api.get("/users")
}