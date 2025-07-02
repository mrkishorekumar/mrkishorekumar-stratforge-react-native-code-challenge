import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../interface/Api';


interface ProductState {
    wishlist: Product[];
    cart: Product[];
}

const initialState: ProductState = {
    wishlist: [],
    cart: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<Product>) => {
            if (!state.wishlist.find(p => p.id === action.payload.id)) {
                state.wishlist.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            state.wishlist = state.wishlist.filter(p => p.id !== action.payload);
        },

        addToCart: (state, action: PayloadAction<Product>) => {
            if (!state.cart.find(p => p.id === action.payload.id)) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(p => p.id !== action.payload);
        }
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;
