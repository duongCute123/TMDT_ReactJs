const add_shoping_cart = (product) => {
    return {
        type: "ADD_SHOPING_CARD",
        payload: product
    }
}
const xoa_cart = (productId) => {
    return {
        type: "DELETE_CART",
        payload: productId
    }
}
export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}
    export { add_shoping_cart, xoa_cart }