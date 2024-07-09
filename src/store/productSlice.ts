import {StateCreator} from "zustand";
import { UserSlice} from "@/types.ts";

export const createUserSlice: StateCreator<UserSlice, [[`zustand/immer`, never]], [], UserSlice > = (set) => ({
    address: ``,
    age: 0,
    fullName: ``,
    userName: ``,
    setAddress: (address) => set((state)=> {
        state.address = address;
    }),
    setName: (name) => set((state)=> {
        state.fullName = name;
    }),
    setUserName: (email) => set((state)=> {
        state.userName = email;
    }),
    fetchUser: async () => {
        set(  {
            address: ``,
            fullName: `Evgen Zaharo`,
            userName: `evgen@gmail.com`,
            age:18
        });
    }
})