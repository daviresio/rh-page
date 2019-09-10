import React from "react"
import { Field, reduxForm, reset } from "redux-form"
import Input from "../components/form/Input"
import { checked, required } from "../config/validation"
import RoundCheckbox from "../components/form/RoundCheckbox"
import { changeModalVisibility } from "../store/actions/modal-actions"
import { connect } from "react-redux"

let Demonstracao = ({visible, handleSubmit, changeModalVisibility, dispatch, invalid}) => {

  const submit = value => {
    console.log(value)
  }

  return (
    <div className={visible ? "modal-container" : null}>
      <div className={"modal " + (visible ? "" : "modal-escondido")}>
        <div className={"header"}>
          <h1 className={"testar"}>Agendar demonstracao</h1>
          <div className={"close"} onClick={() => {
            changeModalVisibility("demonstracao", false)
            dispatch(reset("demonstracao"))
          }}>
            <i className="fas fa-times"/>
          </div>
        </div>
        <h2 className={"subtitle"} style={{marginLeft: '0', marginRight: '0', marginTop: '3rem', marginBottom: '3rem'}}>Junte-se a centenas de empresas e descubra como gerenciar pessoas no Brasil pode ser simples.</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Field component={Input} label={"NOME COMPLETO"} name={"nome"} validate={[required]}/>
          <Field component={Input} label={"E-MAIL CORPORATIVO"} name={"email"} validate={[required]}/>
          <Field component={Input} label={"DIA DA SEMANA PARA CONTATO"} name={"dia"} validate={[required]} />
          <Field component={Input} label={"PERIODO DO SIA PARA CONTATO"} name={"periodo"} validate={[required]} />
          <div className={"footer"} style={{marginTop: '3rem'}}>
            <button className={"button " + (invalid ? "button-disabled" : "button-active")} type={"submit"}>CONTINUAR
            </button>
            <div className={"usuario-modal-option"}>
              <span className={"usuario"}>Ja e usuario?</span>
              <span className={"entrar"}>Entrar</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Demonstracao = reduxForm({
  form: "demonstracao",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  keepDirtyOnReinitialize: true,
  shouldValidate: ()=>true,
})(Demonstracao)

const mapStateToProps = state => ({
  visible: state.modal.demonstracao,
})

const mapDispatchToProps = dispatch => ({
  changeModalVisibility: (target, value) => dispatch(changeModalVisibility(target, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Demonstracao)
