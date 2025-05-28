import axios from 'axios';

export const fetchContent = async (endpoint) => {
    try {
        const response = await axios.get(`https://www.ss.mastersclinics.com/landingpage/${endpoint}`);
        console.log('API call successful:', response.data);
        
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
export const makeAppointment = async ( data) => {
    try {
        const response = await axios.post(`https://www.ss.mastersclinics.com/appointments`, data);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
export const getBranches = async () => {
    try {
        const response = await axios.get(`https://www.ss.mastersclinics.com/branches`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}