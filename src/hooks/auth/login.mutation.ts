import { useMutation } from "@tanstack/react-query";
import { useUsers } from "../../store/users.store";
import auth from "../../api/endpoints/auth";
import type { login } from "../../shared/types/interfaces/login.interface";



export const useUserLoginMutation = () => {
      const {setAuth, setUser} = useUsers((state) => state)
     const mutation = useMutation({
        mutationFn: async(user: login) => {
           const res = await auth.login(user)
           if(res.data.accessToken || res.data.refreshToken){
            localStorage.setItem('token', res.data.accessToken)
            setAuth(true)
            setUser(res?.data.user)   
           }
           return res
        }
    })
    

    return mutation
}