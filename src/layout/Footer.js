import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className={"menu"}>
        <div className={"redes-sociais"}>
          <div className={"logo"}>RH Inteligente</div>
          <div className={"icones"}>
            <i className={`fab fa-facebook-f`}/>
            <i className={`fab fa-instagram`}/>
            <i className={`fab fa-linkedin-in`}/>
            <i className={`fab fa-twitter`}/>
            <i className={`fab fa-youtube`}/>
          </div>
        </div>
        <div className={"contato"}>
          <div className={"title"}>Contato</div>
          <div className={"group"}>
            <i className={`fas fa-phone-alt`}/>
            <span className={"item"}>(62) 3609-6372</span>
          </div>
          <div className={"group"}>
            <i className={`fas fa-envelope`}/>
            <span className={"item"}>daviresio@gmail.com</span>
          </div>
        </div>
        <div className={"produtos"}>
          <div className={"title"}>Produtos</div>
          <span className={"item"}>Sistema RH</span>
          <span className={"item"}>Clube de vantagens</span>
          <span className={"item"}>Beneficios</span>
          <span className={"item"}>Folha de pagamento</span>
        </div>
        <div className={"community"}>
          <div className={"title"}>Comunidade</div>
          <span className={"item"}>Blog</span>
          <span className={"item"}>Materiais</span>
          <span className={"item"}>Vagas</span>
          <span className={"item"}>Academia</span>
        </div>
      </div>
      <div className={"bottom"}>
        <div className={"endereco"}>
          Rua 6 Qd5 Lt5 Apto 1 Vila Xavier Goiania - GO
        </div>
        <div className={"termos"}>
          <div className={"text"}>{"RH Inteligente " + new Date().getFullYear() + "   "}</div>
          <div className={"item"}>TERMOS</div>
          <div className={"text"}>{" | "}</div>
          <div className={"item"}>POLITICA DE PRIVACIDADE</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
