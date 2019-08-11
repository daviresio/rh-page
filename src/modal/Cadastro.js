import React, { useEffect, useState } from "react"
import ModalCadastroStep1 from "./ModalCadastroStep1"
import ModalCadastroStep2 from "./ModalCadastroStep2"
import { connect } from "react-redux"
import { criarConta } from "../store/actions/network-actions"
import { SYSTEM_PAGE_LOGGED } from "../config/api"

const Cadastro = ({criarConta, token}) => {

  const [step, setStep] = useState(1)


  useEffect(() => {
    if(token !== '') window.location.replace( SYSTEM_PAGE_LOGGED + '/' + token)
  }, [token])

  const submit = v => {
    const values = Object.assign({}, v)
    const {senha2, concordo, cargo, qtdFuncionarios, ...data} = values
    criarConta(data)
  }

  return (
    <>
      {step === 1 && <ModalCadastroStep1 onSubmit={()=> setStep(2)}/>}
      {step === 2 && <ModalCadastroStep2 onSubmit={submit} previous={()=> setStep(1)}/>}
    </>
  )
}

const mapStateToProps = state => ({
  token: state.network.token
})

const mapDispatchToProps = dispatch => ({
  criarConta: value => dispatch(criarConta(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)
