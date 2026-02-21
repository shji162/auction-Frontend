import { create } from "zustand"
import type { userStoreType } from "../shared/types/storeTypes/users-store.type"



export const useUsers = create<userStoreType>((set) => ({
    user: null,
    isAuth: false,
    isAdmin: false,
    setUser: (user) => set({user: user}),
    setAuth: (isAuth) => set({isAuth: isAuth}),
    setAdmin: (isAdmin) => set({isAdmin: isAdmin}),

}))
