import * as types from "../ActionType";

const initState = {
    ads: [],
    loadingAds: true
}

const AdsReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_ADS:
            return { ...state, ads: action.payload, loadingAds: false }
        default:
            return state;
    }
};

export default AdsReducer;
