import { AddToCart, RemoveFromCart } from "./cartTypes"

export const AddProduct=(product)=>{
    return{
        type:AddToCart,
        payload:product
    }
}
export const RemoveProduct=(product)=>{
    return{
        type:RemoveFromCart,
        payload:product
    }
}