import React from "react"

const SeparadorMenu = ({direction}) => {

  const classe = direction === 'next' ? 'separador-menu separador-menu-transition-next' :
    direction === 'back' ? 'separador-menu separador-menu-transition-back' : 'separador-menu'

  return (
    <div className={classe} />
    )
}

export default SeparadorMenu
