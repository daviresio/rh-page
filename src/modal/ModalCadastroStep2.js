import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm, reset } from "redux-form"
import Input from "../components/form/Input"
import RoundCheckbox from "../components/form/RoundCheckbox"
import { changeModalVisibility } from "../store/actions/modal-actions"
import { required, checked } from "../config/validation"

let ModalCadastroStep2 = ({ visible, handleSubmit, changeModalVisibility, dispatch, invalid, previous, submit }) => {

  return (
    <div className={visible ? "modal-container" : null}>
      <div className={"modal " + (visible ? "" : "modal-escondido")}>
        <div className={"header"}>
          <div className={"close"} onClick={previous}>
            <i className="fas fa-angle-left"/>
          </div>
          <h1 className={"testar"}>Sobre a sua empresa</h1>
          <div className={"close"} onClick={() => {
            changeModalVisibility("cadastro", false)
            dispatch(reset('cadastro'))
            previous()
          }}>
            <i className="fas fa-times"/>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)} style={{marginTop: '3rem'}}>
          <Field component={Input} label={"NOME DA EMPRESA"} name={"empresa.nome"} validate={[required]}/>
          <Field component={Input} label={"TELEFONE DA EMPRESA"} name={"empresa.telefone"} validate={[required]}/>
          <Field component={Input} label={"SITE DA EMPRESA"} name={"empresa.site"} validate={[required]}/>
          <Field component={Input} label={"SEU CARGO NA EMPRESA"} name={"cargo"} validate={[required]}/>
          <Field component={Input} label={"NUMERO DE FUNCIONARIOS"} name={"qtdFuncionarios"} validate={[required]}/>
          <div className={'options'}>
          <Field component={RoundCheckbox} label={'Automatizacao de departamento pessoal'} name={"necessidade.automatizacaoDepartamentoPessoal"} />
          <Field component={RoundCheckbox} label={'Gestao de jornada'} name={"necessidade.gestaoDeJornada"} />
          <Field component={RoundCheckbox} label={'Recrutamento e selecao'} name={"necessidade.recrutamentoESelecao"} />
          <Field component={RoundCheckbox} label={'Avaliacao de desempenho'} name={"necessidade.avaliacaoDesempenho"} />
          <Field component={RoundCheckbox} label={'Outros'} name={"necessidade.outros"} />
          </div>
          <div className={"footer"}>
            <button className={"button " + (invalid ? "button-disabled" : "button-active")} type={'submit'}>COMECAR A TESTAR</button>
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


ModalCadastroStep2 = reduxForm({
  form: "cadastro",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  keepDirtyOnReinitialize: true,
  shouldValidate: ()=>true,
})(ModalCadastroStep2)

const mapStateToProps = state => ({
  visible: state.modal.cadastro,
})

const mapDispatchToProps = dispatch => ({
  changeModalVisibility: (target, value) => dispatch(changeModalVisibility(target, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCadastroStep2)
