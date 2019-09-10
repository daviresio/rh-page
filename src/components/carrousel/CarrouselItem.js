import React from "react"
import contentTransition from "../menu/DelayMenuTranstition"

const CarrouselItem = ({title, img, description, hide, show}) => {

  let cssClasses = "carrosel-item"
  if (hide) cssClasses = cssClasses + " carrosel-content-hide"
  if (show) cssClasses = cssClasses + " carrosel-content-show"

  return (
    <div className={cssClasses}>
      <div className={'title'}>{title}</div>
      <img src={img} alt=""/>
      <div className={'description'}>{description}</div>
    </div>
  )
}

export default contentTransition(CarrouselItem)
