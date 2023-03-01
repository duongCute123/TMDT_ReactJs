const initStance = {
    numberCart: 0,
    Cart: [
        {id:1,quantity:1,tenSp:"Iphon 15",anh:"Chiu",giaSP:10000}
    ]
}
const ShopingCart = (state = initStance, action) => {
    switch (action.type) {
        case "ADD_SHOPING_CARD":
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    tenSp: action.payload.tenSp,
                    anh: action.payload.anh,
                    giaSP: action.payload.giaSP
                }
                state.Cart.push(cart)
            }
            else {
                let check = false;
                state.Cart.map((item, key) => {
                    if (item.id = action.payload.id) {
                        state.Cart[key].quantity++
                        check = true
                    }
                })
                if (!check) {
                    let cart = {
                        id: action.payload.id,
                        quantity: 1,
                        tenSp: action.payload.tenSp,
                        anh: action.payload.anh,
                        giaSP: action.payload.giaSP
                    }
                    state.Cart.push(cart)
                }
            }
            console.log(state.Cart);
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
            break;
        case "INCREASE_QUANTITY":
            state.numberCart++
            state.Cart[action.payload].quantity++
            return {
                ...state
            }
        case "DECREASE_QUANTITY":
            let quantity = state.Cart[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Cart[action.payload].quantity--;
            }

            return {
                ...state
            }

        case "DELETE_CART":
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Cart.filter(item => {
                    return item.id != state.Cart[action.payload].id
                })

            }
            break
        default:
            return state
            break;
    }
}
export default ShopingCart