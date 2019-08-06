import React from "react"
import { randomId } from "../../config/util"

const Input = ({type = 'text', id = randomId(), label, input, meta: { touched, error, warning }}) => {

  let labelClasses = input.value ? 'active' : null
  if(touched && error) labelClasses = labelClasses + ' label-erro'

  return (
    <div className={'input-container'}>
      <input className={'input ' + (touched && error ? 'input-erro' : 'input-no-error')} type={type} id={id} {...input} autoComplete={'off'}/>
      <label htmlFor={id} className={labelClasses}>{label}</label>
    </div>
  )
}

export default Input
