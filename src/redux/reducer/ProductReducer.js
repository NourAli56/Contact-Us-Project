import * as types from "../ActionType";

const initState = {
    products: [],
    loadingProducts: true,
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loadingProducts: false
            };
        default:
            return state;
    }
};

export default ProductReducer;

