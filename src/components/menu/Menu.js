import React, { useState } from "react"
import ItemMenu from "./ItemMenu"
import SeparadorMenu from "./SeparadorMenu"
import MenuContent from "./MenuContent"
import DelayMenuTranstition from "./DelayMenuTranstition"

const Menu = ({ children }) => {

  const [itemActive, setItemActive] = useState(1)
  const [animate, setAnimate] = useState({ number: 0, direction: "next" })

  const selectItem = i => {
    if (i > itemActive && i - itemActive === 1) setAnimate({ number: i - 1, direction: "next" })
    if (i < itemActive && itemActive - i === 1) setAnimate({ number: i, direction: "back" })
    setItemActive(i)
  }

  const change = i => {
    selectItem(i === 5 ? 1 : i + 1)
  }

  return (
    <>
      <div className={"menu"}>
        <ItemMenu checked={itemActive === 1} onClick={() => selectItem(1)} title={"Departamento pessoal"} icon={"users"}
                  change={() => change(1)}/>
        <SeparadorMenu direction={animate.number === 1 ? animate.direction : null}/>
        <ItemMenu checked={itemActive === 2} onClick={() => selectItem(2)} title={"Folha de pagamento"} icon={"file"}
                  change={() => change(2)}/>
        <SeparadorMenu direction={animate.number === 2 ? animate.direction : null}/>
        <ItemMenu checked={itemActive === 3} onClick={() => selectItem(3)} title={"Beneficios corporativos"}
                  icon={"handshake"} change={() => change(3)}/>
        <SeparadorMenu direction={animate.number === 3 ? animate.direction : null}/>
        <ItemMenu checked={itemActive === 4} onClick={() => selectItem(4)} title={"Automatizacao"} icon={"magic"}
                  change={() => change(4)}/>
        <SeparadorMenu direction={animate.number === 4 ? animate.direction : null}/>
        <ItemMenu checked={itemActive === 5} onClick={() => selectItem(5)} title={"Comunicacao"} icon={"comment"}
                  change={() => change(5)}/>
      </div>
      <MenuContent isMounted={itemActive === 1} img={require("../../assets/images/menu-images/img1.jpg")} title={"Departamento pessoal"}
                         subtitle={"Aumente a produtividade do seu DP"}
                         content={"Software de RH online e na nuvem, automatiza funcoes operacionais e burocraticas, promove ganhos de produtividade e eficiencia"} />
      <MenuContent isMounted={itemActive === 2} img={require("../../assets/images/menu-images/img2.jpg")} title={"Folha de pagamento"}
                         subtitle={"Equipe especializada online"} content={"Tenha suporte online sempre que precisar para reduzir ao maximo os erros"} />
      <MenuContent isMounted={itemActive === 3} img={require("../../assets/images/menu-images/img3.jpg")} title={"Beneficios corporativos"}
                         subtitle={"Automatize os beneficios da sua empresa"} content={"Torne mais facil a compra e movimentacao de funcionarios em todo o seu pacote de beneficios"} />
      <MenuContent isMounted={itemActive === 4} img={require("../../assets/images/menu-images/img4.jpg")} title={"Automatizacao"}
                         subtitle={"Diga adeus a terafas repetitivas"}
                         content={"Todos os eventos teram lembretes para auxiliar na sua rotina, e emails sao disparados automaticamente te poupando de tarefas repetitivas"} />
      <MenuContent isMounted={itemActive === 5} img={require("../../assets/images/menu-images/img5.jpg")} title={"Comunicacao"} subtitle={"Sua empresa unida"}
                         content={"Envie recados para toda a equipe de forma pratica e facil, e tenha um chat para facilitar a comunicacao da equipe do RH"} />
      {
        /*
              {itemActive === 1 &&
      <MenuContent img={require("../../assets/images/menu-images/img1.jpg")} title={"Departamento pessoal"}
                   subtitle={"Aumente a produtividade do seu DP"}
                   content={"Software de RH online e na nuvem, automatiza funcoes operacionais e burocraticas, promove ganhos de produtividade e eficiencia"}/>}
      {itemActive === 2 &&
      <MenuContent img={require("../../assets/images/menu-images/img2.jpg")} title={"Folha de pagamento"}
                   subtitle={"Equipe especializada online"}
                   content={"Tenha suporte online sempre que precisar para reduzir ao maximo os erros"}/>}
      {itemActive === 3 &&
      <MenuContent img={require("../../assets/images/menu-images/img3.jpg")} title={"Beneficios corporativos"}
                   subtitle={"Automatize os beneficios da sua empresa"}
                   content={"Torne mais facil a compra e movimentacao de funcionarios em todo o seu pacote de beneficios"}/>}
      {itemActive === 4 &&
      <MenuContent img={require("../../assets/images/menu-images/img4.jpg")} title={"Automatizacao"}
                   subtitle={"Diga adeus a terafas repetitivas"}
                   content={"Todos os eventos teram lembretes para auxiliar na sua rotina, e emails sao disparados automaticamente te poupando de tarefas repetitivas"}/>}
      {itemActive === 5 && <MenuContent img={require("../../assets/images/menu-images/img5.jpg")} title={"Comunicacao"}
                                        subtitle={"Sua empresa unida"}
                                        content={"Envie recados para toda a equipe de forma pratica e facil, e tenha um chat para facilitar a comunicacao da equipe do RH"}/>}
        */
      }
    </>
  )
}

export default Menu
