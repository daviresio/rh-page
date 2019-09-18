import api from "../../config/api"
import { CRIAR_CONTA_SUCCESS, SHOW_LOGIN_FORM, SHOW_RECOVER_PASSWORD_FORM } from "./action-types"


export const showLoginForm = () => ({type: SHOW_LOGIN_FORM})

export const showRecoverPasswordForm = () => ({type: SHOW_RECOVER_PASSWORD_FORM})
