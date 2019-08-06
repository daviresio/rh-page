import { CHANGE_MODAL_VISIBILITY } from "./action-types"

export const changeModalVisibility = (target, value) => ({type:CHANGE_MODAL_VISIBILITY, payload: {target, value}})
