import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import Input from "../components/form/Input"
import { required } from "../config/validation"
import { logar } from "../store/actions/network-actions"
import { SYSTEM_PAGE_LOGGED } from "../config/api"

let Login = ({ handleSubmit, invalid, token, logar }) => {

  const submit = values => {
    logar(values)
  }

  useEffect(() => {
    if (token !== "") window.location.replace(SYSTEM_PAGE_LOGGED + "/" + token)
  }, [token])

  return (
    <div className={"page-login"}>
      <div className={"header"}>
        <div className={"title"} onClick={() => navigate("/")}>Rh Inteligente</div>
      </div>
      <div className={"content"}>
        <div className={"formulario"}>
          <div className={"title"}>Entrar</div>
          <form onSubmit={handleSubmit(submit)}>
            <Field component={Input} label={"E-MAIL"} name={"usuario"} validate={[required]}/>
            <Field component={Input} type={'password'} label={"SENHA"} name={"senha"} validate={[required]}/>
            <div className={"esqueceu-senha"}>Esqueceu sua senha?</div>
            <button className={"button " + (invalid ? "button-disabled" : "button-active")} type={"submit"}>ENTRAR
            </button>
          </form>
        </div>
        <div className={"boas-vindas"}>
          <h2 className={"title"}>Ola, amigo(a)</h2>
          <span className={"conteudo"}>Informe seu e-mail e senha para entrar na plataforma</span>
        </div>
      </div>
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

Login = reduxForm({
  form: "login",
})(Login)

const mapStateToProps = state => ({
  token: state.network.token,
})

const mapDispatchToProps = dispatch => ({
  logar: value => dispatch(logar(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
