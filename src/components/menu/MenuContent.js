import React from "react"
import DelayMenuTranstition from "./DelayMenuTranstition"

const MenuContent = ({ title, subtitle, content, img, hide, show, onClick }) => {

  let cssClasses = "menu-content"
  if (hide) cssClasses = cssClasses + " menu-content-hide"
  if (show) cssClasses = cssClasses + " menu-content-show"


  return (
    <div className={cssClasses}>
      <div className={"container"}>
        <div className={"corpo"}>
          <h1 className={"title"}>{title}</h1>
          <h3 className={"subtitle"}>{subtitle}</h3>
          <div className={"content"}>{content}</div>
          <button className={"button button-active"} onClick={onClick}>Teste gratis</button>
        </div>
      </div>
        {img}
    </div>
  )
}

export default DelayMenuTranstition(MenuContent)
