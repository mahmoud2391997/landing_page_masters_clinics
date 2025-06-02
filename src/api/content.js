import axios from 'axios';

export const fetchContent = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:3000/landingpage/${endpoint}`);
        
        console.log('API call successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
export const makeAppointment = async ( data) => {
    try {
        const response = await axios.post(`http://localhost:3000/appointments`, data);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
export const getBranches = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/branches`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}