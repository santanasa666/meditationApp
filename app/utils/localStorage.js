import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error(`Error saving data for key "${key}":`, error);
        throw error;
    }
};


export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error(`Error retrieving data for key "${key}":`, error);
        throw error;
    }
};


export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing data for key "${key}":`, error);
        throw error;
    }
};


export const saveUserDetails = async (userDetails) => {
    return await storeData("userDetails", userDetails);
};


export const getUserDetails = async () => {
    return await getData("userDetails");
};


export const clearUserDetails = async () => {
    return await removeData("userDetails");
};