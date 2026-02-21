import hosts  from "../index";
import backendRoutes from "../../shared/consts/backendRoutes";
import type { login } from "../../shared/types/interfaces/login.interface";
import type { refresh } from "../../shared/types/interfaces/refresh.interface";
import type { User } from "../../shared/types/user.type";

export default new class authMethods {
    async register(user: User){
        return await hosts.$authHost.post(backendRoutes.registerRoute, user)
    }

    async login(data: login){
        return await hosts.$authHost.post(backendRoutes.loginRoute, data)
    }

    async refresh(data: refresh){
        return await hosts.$authHost.post(backendRoutes.refreshRoute, data)
    }

    async confirm(token: string) {
        return await hosts.$authHost.post(backendRoutes.emailConfirmationRoute, token)
    }

    async resetPassword(email: string) {
        return await hosts.$authHost.post(backendRoutes.passwordRecoveryRoute, email)
    }

    async newPassword(pasword: string) {
        return await hosts.$authHost.post(backendRoutes.newPasswordRoute, pasword)
    }

    async logout(data: any) {
        return data
    }
}