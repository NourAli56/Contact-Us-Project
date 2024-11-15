import * as types from "../ActionType";
import apiService from "../../api/ApiService";

const get = (arr, type) => {
    return ({
        type: type,
        payload: arr
    })
}
export const loadProducts = () => {
    return async (dispatch) => {
        try {
            const response = await apiService.get("/products");
            dispatch({
                type: types.GET_PRODUCTS,
                payload: response.data.data,
            });
        } catch (error) {
            console.error("Failed to load products:", error);
        }
    };
};