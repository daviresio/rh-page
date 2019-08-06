import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm, reset } from "redux-form"
import Input from "../components/form/Input"
import RoundCheckbox from "../components/form/RoundCheckbox"
import { changeModalVisibility } from "../store/actions/modal-actions"
import { required, checked } from "../config/validation"

let ModalCadastroStep1 = ({ visible, handleSubmit, changeModalVisibility, dispatch, invalid, }) => {

  return (
    <div className={visible ? "modal-container" : null}>
      <div className={"modal " + (visible ? "" : "modal-escondido")}>
        <div className={"header"}>
          <h1 className={"testar"}>Testar o RH Inteligente</h1>
          <div className={"close"} onClick={() => {
            changeModalVisibility("cadastro", false)
            dispatch(reset("cadastro"))
          }}>
            <i className="fas fa-times"/>
          </div>
        </div>
        <h2 className={"subtitle"}>Experimente as funcionalidades do RH Inteligente por 7 dias</h2>
        <form onSubmit={handleSubmit}>
          <Field component={Input} label={"NOME COMPLETO"} name={"usuario.nome"} validate={[required]}/>
          <Field component={Input} label={"E-MAIL CORPORATIVO"} name={"usuario.email"} validate={[required]}/>
          <Field component={Input} label={"SENHA"} name={"usuario.senha"} validate={[required]} type={'password'} />
          <Field component={Input} label={"CONFIRME A SENHA"} name={"senha2"} validate={[required]} type={'password'} />
          <Field component={RoundCheckbox} name={"concordo"} type={'checkbox'} validate={[checked]} label={<span>Eu li e concordo com os&nbsp;</span>}
                 labelAction={<span className={"label-action"}>termos de uso</span>}
                 style={{ marginTop: "1rem", marginBottom: "2rem" }}/>
          <div className={"footer"}>
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


ModalCadastroStep1 = reduxForm({
  form: "cadastro",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  keepDirtyOnReinitialize: true,
  shouldValidate: ()=>true,
})(ModalCadastroStep1)

const mapStateToProps = state => ({
  visible: state.modal.cadastro,
})

const mapDispatchToProps = dispatch => ({
  changeModalVisibility: (target, value) => dispatch(changeModalVisibility(target, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCadastroStep1)
