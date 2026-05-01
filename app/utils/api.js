import { getData } from "./localStorage";


const BASE_URL = "https://api.yourmeditationapp.com/v1";


const request = async (endpoint, options = {}) => {
    try {
        // Automatically fetch the token if it exists in local storage
        const userDetails = await getData("userDetails");
        const token = userDetails?.token;

        const headers = {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        };

        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Something went wrong");
        }

        return result;
    } catch (error) {
        console.error("API Request Error:", error.message);
        throw error;
    }
};


export const api = {
    // Auth endpoints
    login: (credentials) => 
        request("/auth/login", { method: "POST", body: JSON.stringify(credentials) }),
    
    signup: (userData) => 
        request("/auth/signup", { method: "POST", body: JSON.stringify(userData) }),

    // Meditation endpoints
    getMeditations: () => 
        request("/meditations", { method: "GET" }),
    
    getPopularMeditations: () => 
        request("/meditations/popular", { method: "GET" }),

    // User Profile
    updateProfile: (profileData) => 
        request("/user/profile", { method: "PUT", body: JSON.stringify(profileData) }),
};