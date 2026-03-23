import { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
    cart: []
}

function reducer(state, action) {

    if (action.type === "ADD_TO_CART") {

        const exist = state.cart.find(
            item => item.id === action.payload.id
        )

        if (exist) {

            const updated = state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)

            return {
                ...state,
                cart: updated
            }

        } else {

            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        }
    }

    if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }
    }

    if (action.type === "INCREASE_QTY") {

        const updated = state.cart.map(item =>
            item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )

        return {
            ...state,
            cart: updated
        }
    }

    if (action.type === "DECREASE_QTY") {

        const updated = state.cart.map(item =>
            item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0)

        return {
            ...state,
            cart: updated
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        };
    }

    return state;
}

function CartProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;