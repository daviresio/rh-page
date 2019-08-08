import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/SEO"
import ItemMenu from "../components/menu/ItemMenu"
import Menu from "../components/menu/Menu"


const IndexPage = () => (
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
            <h2 className={"mensal"}>por mes *</h2>
          </div>
          <h2 className={"saiba-mais"}>Saiba mais</h2>
        </div>
      </div>
    </section>

    <section className={"section-menu"}>
      <h1 className={"title"}>Soluções em RH integradas para suas necessidades</h1>
      <Menu>

      </Menu>
    </section>

  </Layout>
)

export default IndexPage
