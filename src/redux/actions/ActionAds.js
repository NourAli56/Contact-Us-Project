import axios from "axios";
import * as types from "../ActionType";
import apiService from "../../api/ApiService";

const get = (arr, type) => {
    return ({
        type: type,
        payload: arr
    })
}

export const loadAds = () => {
    return async (dispatch) => {
        try {
            const response = await apiService.get("/ads");
            dispatch({
                type: types.GET_ADS,
                payload: response.data.data,
            });
        } catch (error) {
            console.error("Failed to load products:", error);
        }
    };
};