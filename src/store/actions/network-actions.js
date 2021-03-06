import api from "../../config/api"
import { CRIAR_CONTA_SUCCESS, RECOVER_PASSWORD_SUCCESS } from "./action-types"


export const criarConta = value => async dispatch => {
  try {
    const result = await api.post("/companhias", value)
    dispatch({ type: CRIAR_CONTA_SUCCESS, payload: result.data.token })
  } catch (e) {
    console.log(e)
  }
}

export const logar = value => async dispatch => {
  try {
    const result = await api.post("/login", value)
    dispatch({ type: CRIAR_CONTA_SUCCESS, payload: result.data.token })
  } catch (e) {
    console.log(e)
  }
}

export const recoverPassword = value => async dispatch => {
  try {
    const result = await api.get("/login/" + value, )
    dispatch({ type: RECOVER_PASSWORD_SUCCESS, payload: result.data.token })
  } catch (e) {
    console.log(e)
  }
}
