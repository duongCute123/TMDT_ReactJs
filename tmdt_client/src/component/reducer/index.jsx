import {combineReducers} from "redux"
import ShopingCart from "./shopingcartReducer"
const allReducer=combineReducers({
    shoping:ShopingCart
})
export default allReducer