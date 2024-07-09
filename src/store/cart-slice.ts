import {StateCreator} from "zustand";
import {CardProduct, CartSlice} from "@/types.ts";

export  type CartState = {
    products: CardProduct[];
    total: number;
};
const initialState: CartState = {
    products: [],
    total: 0,
};

export const createCartSlice: StateCreator<CartSlice, [[`zustand/immer`, never]], [], CartSlice> = (set, get) => ({
    ...initialState,
    addProduct: (product) => set((state) => {
        const productIndex = state.products.findIndex((p) => p.id === product.id);
        if (productIndex === -1) {
            state.products.push({...product, qty: 1});
        } else {
            state.products[productIndex].qty++;
        }
    }),
    removeProduct: (productID) => set((state) => {
        state.products = state.products.filter((p) => p.id !== productID);
    }),
    incQty: (productID) => set((state) => {
        const product = state.products.find((p) => p.id === productID);
        if (product) {
            product.qty++;
        }
    }),
    decQty: (productID) => set((state) => {
        const product = state.products.find((p) => p.id === productID);
        if (product) {
            product.qty--;
            if (product.qty === 0) {
                state.products = state.products.filter((p) => p.id !== productID);
            }
        }
    }),
    getProductById: (productID) =>
        get().products.find((p) => p.id === productID),
    setTotal: (total) => set((state) => {
        state.total = total;
    }),
    reset: () => set(() => initialState),
})