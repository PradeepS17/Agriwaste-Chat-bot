// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust this to your backend URL

const api = axios.create({
    baseURL: API_URL,
});

export const registerUser = async(userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const loginUser = async(userData) => {
    try {
        const response = await api.post('/login', userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

export const resetPassword = async(email) => {
    try {
        const response = await api.post('/forgot-password', { email });
        return response.data;
    } catch (error) {
        console.error('Error resetting password:', error);
        throw error;
    }
};