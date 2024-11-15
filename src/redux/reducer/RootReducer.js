import {combineReducers} from "redux"
import ProductReducer from "./ProductReducer"
import AdsReducer from "./AdsReducer"

export default combineReducers({
    productsState: ProductReducer,
    adsState: AdsReducer
})