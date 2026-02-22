import { Route, Routes } from "react-router"
import { adminRoutes, authRoutes, publicRoutes } from "../shared/consts/routes"
import { useUsers } from "../store/users.store"


export const AppRouter = () => {

    const {isAuth, isAdmin} = useUsers((state) => state)


    return (
        <>
        <Routes>
            {
                publicRoutes.map(el => {
                    return(
                        <Route path={el.path} element={<el.element/>}/>
                    )
                })
            }
            {
                isAuth ? 
                authRoutes.map(el => {
                    return(
                        <Route path={el.path} element={<el.element/>}/>
                    )
                }

                ) : ''
            }
            {
                isAdmin ? 
                adminRoutes.map(el => {
                    return(
                        <Route path={el.path} element={<el.element/>}/>
                    )
                }

                ) : ''
            }
        </Routes>
        </>
    )
}