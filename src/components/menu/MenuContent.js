import React from "react"

const MenuContent = ({ title, subtitle, content, img }) => {
  return (
    <div className={"menu-content"}>
      <div className={"container"}>
        <div className={"corpo"}>
          <h1 className={"title"}>{title}</h1>
          <h3 className={"subtitle"}>{subtitle}</h3>
          <div className={"content"}>{content}</div>
          <button className={"button button-active"}>Teste gratis</button>
        </div>
      </div>

      <img src={img}/>
    </div>
  )
}

export default MenuContent
