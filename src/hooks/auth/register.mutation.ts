import auth from "../../api/endpoints/auth";
import { Roles } from "../../shared/types/enums/role.enum";
import type { User } from "../../shared/types/user.type";
import { useUsers } from "../../store/users.store";

import { useMutation } from "@tanstack/react-query";



export const useUserCreateMutation = () => {
        const {setAuth, setUser} = useUsers((state) => state)
     const mutation = useMutation({
        mutationFn: async(user: User) => {
           const res = await auth.register({...user, role: Roles.USER})
           if(res.data.accessToken || res.data.refreshToken){
            localStorage.setItem('token', res.data.accessToken)
            setAuth(true)
            setUser(res.data.user)
           }
           return res
        }
    })
    

    return mutation
}