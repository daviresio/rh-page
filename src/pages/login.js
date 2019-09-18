import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { logar } from "../store/actions/network-actions"
import { SYSTEM_PAGE_LOGGED } from "../config/api"
import LoginForm from "./login/LoginForm"
import RecoverPasswordForm from "./login/RecoverPasswordForm"

const Login = ({ token, showLogin }) => {


  useEffect(() => {
    if (token !== "") window.location.replace(SYSTEM_PAGE_LOGGED + "/" + token)
  }, [token])

  return (
    <div className={"page-login"}>
      <div className={"header"}>
        <div className={"title"} onClick={() => navigate("/")}>Rh Inteligente</div>
      </div>
      {showLogin ? <LoginForm/> : <RecoverPasswordForm/>}
      <div className={"footer"}>
        <div className={"links"}>
          <span>HOME</span><span>SUPORTE</span><span>SEGURANCA</span><span>PRIVACIDADE</span><span>TERMOS</span>
        </div>
        <div className={"descricao"}>
          © {new Date().getFullYear()} RH Inteligente - RH INTELIGENTE ATIVIDADES DE INTERNET LTDA.
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  token: state.network.token,
  showLogin: state.page.showLogin,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
