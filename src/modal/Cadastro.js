import React, { useState } from "react"
import ModalCadastroStep1 from "./ModalCadastroStep1"
import ModalCadastroStep2 from "./ModalCadastroStep2"

const Cadastro = () => {

  const [step, setStep] = useState(1)

  const submit = values => console.log(values)

  return (
    <>
      {step === 1 && <ModalCadastroStep1 onSubmit={()=> setStep(2)}/>}
      {step === 2 && <ModalCadastroStep2 onSubmit={submit} previous={()=> setStep(1)}/>}
    </>
  )
}

export default Cadastro
