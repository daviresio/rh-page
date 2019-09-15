import React, { useEffect } from "react"

import Layout from "../layout/layout"
import SEO from "../layout/SEO"
import Menu from "../components/menu/Menu"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import network from "../store/reducers/network-reducer"
import Carrousel from "../components/carrousel/Carrousel"
import CarrouselItem from "../components/carrousel/CarrouselItem"

const IndexPage = () => {


  const imgLastCarrosel = [
    <img src={require("../assets/images/menu-images/depoimento-1.jpg")} />,
    <img src={require("../assets/images/menu-images/depoimento-2.jpg")} />,
  ]
  return (
    <Layout>
      <SEO pageTitle="Software para Gestao de RH - Teste Gratis!"
           description={"Front-end, developing apps and web pages"}
           keywords={"React, Node, gatsby, Front-end, developer, api"}/>
      <section className={"section-header"}>
        <div className={"sub-section"}>
          <div className={"content"}>
            <h1>Folha de pagamento, benefícios e RH em um único lugar.</h1>
            <div className={"separador-header"}/>
            <h2>Organize seu RH, movimente beneficiários com facilidade e encante seus colaboradores.</h2>
          </div>
          <div className={"container-preco"}>
            <h2 className={"apartir"}>Planos a partir de</h2>
            <div className={"precos"}>
              <h2 className={"cifra"}>R$</h2>
              <h1 className={"valor"}>49,90</h1>
              <h2 className={"mensal"}>por mes*</h2>
            </div>
            <h2 className={"saiba-mais"}>Saiba mais</h2>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: "#FFF" }}>
        <section className={"section-menu"}>
          <h1 className={"title"}>Soluções em RH integradas</h1>
          <Menu/>
        </section>
      </div>

      <section className={"section-conteudo"}>
        <div className={"content"}>
          <h1>Acesse nossos Materiais Educativos, evolua sua gestão</h1>
          <h2>Estimulamos o empreendedorismo com materiais educativos</h2>
        </div>
        <div className={"cards"}>
          <SmallCard img={require("../assets/images/documentos.svg")}
                     title={"Materiais Educativos"} subtitle={"Guias, Infograficos e Planilhas"}/>
          <SmallCard img={require("../assets/images/treinamentos.svg")}
                     title={"Webinars"} subtitle={"Cursos Online Gratuitos"}/>
        </div>
      </section>

      <div style={{ backgroundColor: "#FFF" }}>
        <section className={"section-clientes"}>
          <h1 className={"title"}>Oque os nossos clientes dizem?</h1>

          <Carrousel>
            <CarrouselItem title={'A gente utiliza o Conta Azul para tomada de decisões e auxiliar nossa empresa no processo de gestão'}
                           description={'Nome Usuario - Nome Empresa'} img={imgLastCarrosel[0]} />

            <CarrouselItem title={'Uma ferramenta chave na tomada de decisão é o fluxo de caixa, que mostra facilmente a saúde da empresa'}
                           description={'Nome Usuario - Nome Empresa'} img={imgLastCarrosel[1]} />
          </Carrousel>

        </section>
      </div>

    </Layout>
  )
}

export default IndexPage

const SmallCard = ({ img, title, subtitle }) =>
  <div className={"small-card"}>
    <img src={img}/>
    <div className={'text-container'}>
      <h1 className={"title"}>{title}</h1>
      <h2 className={"subtitle"}>{subtitle}</h2>
    </div>
  </div>
