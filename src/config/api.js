import axios from "axios";

export default axios.create({baseURL: 'http://localhost:4000'})

export const SYSTEM_PAGE_LOGGED = 'http://localhost:3000/logar-usuario'
