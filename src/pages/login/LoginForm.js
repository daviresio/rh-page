import React from "react"
import { Field, reduxForm } from "redux-form"
import { logar } from "../../store/actions/network-actions"
import { connect } from "react-redux"
import Input from "../../components/form/Input"
import { required } from "../../config/validation"

let LoginForm = ({ handleSubmit, invalid, logar }) => {


  const submit = values => {
    logar(values)
  }

  return (
    <div className={"content"}>
      <div className={"formulario"}>
        <div className={"title"}>Entrar</div>
        <form onSubmit={handleSubmit(submit)}>
          <Field component={Input} label={"E-MAIL"} name={"usuario"} validate={[required]}/>
          <Field component={Input} type={"password"} label={"SENHA"} name={"senha"} validate={[required]}/>
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
  )
}

LoginForm = reduxForm({
  form: "login",
})(LoginForm)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  logar: value => dispatch(logar(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
