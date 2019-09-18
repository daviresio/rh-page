import React from "react"
import { Field, reduxForm } from "redux-form"
import Input from "../../components/form/Input"
import { required } from "../../config/validation"
import { logar, recoverPassword } from "../../store/actions/network-actions"
import { connect } from "react-redux"

let RecoverPasswordForm = ({ handleSubmit, invalid, recoverPassword }) => {

  const submit = values => {
    recoverPassword(values)
  }

  return (
    <div className={"content"}>
      <div className={"formulario"}>
        <div className={"title"}>Esqueci a senha</div>
        <div className={'esqueceu-senha-title'}>Digite seu e-mail e enviaremos um e-mail para voce informando como recupera-la</div>
        <form onSubmit={handleSubmit(submit)}>
          <Field component={Input} label={"E-MAIL"} name={"usuario"} validate={[required]}/>
          <div className={"esqueceu-senha"}>Lembrou sua senha?</div>
          <button className={"button " + (invalid ? "button-disabled" : "button-active")} type={"submit"}>ENTRAR
          </button>
        </form>
      </div>
      <div className={"boas-vindas"}>
        <h2 className={"title"}>Tranquilo,</h2>
        <span className={"conteudo"}>Vamos te ajudar. Informe os dados necessarios para recuperar a sua senha</span>
      </div>
    </div>
  )
}

RecoverPasswordForm = reduxForm({
  form: "login",
})(RecoverPasswordForm)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  logar: value => dispatch(recoverPassword(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPasswordForm)
