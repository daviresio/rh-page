import React from "react"
import { randomId } from "../../config/util"

const RoundCheckbox = ({type = 'checkbox', id = randomId(), label, labelAction, input, style}) => {
  return (
    <div>
      <div className={'checkbox-container'} style={style}>
        <input type={type} id={id} {...input}/>
        <label htmlFor={id} className={'checkbox'} />
        <label htmlFor={id} className={'label'}>{label}</label>
        <label className={'label'}>{labelAction}</label>
      </div>
    </div>
  )
}

export default RoundCheckbox
