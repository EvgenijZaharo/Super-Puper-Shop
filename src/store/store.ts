import {create} from "zustand";
import {Store} from "../types.ts"
import {createUserSlice} from "@/store/productSlice.ts";
import {immer} from "zustand/middleware/immer";
import {createCartSlice} from "@/store/cart-slice.ts";
import {devtools, persist, subscribeWithSelector} from "zustand/middleware";

const useStore = create<Store>()(devtools(persist(subscribeWithSelector(immer((...a) => ({
                ...createUserSlice(...a),
                ...createCartSlice(...a),
            }))),
            {name: `local-storage`})
    )
);
export default useStore;