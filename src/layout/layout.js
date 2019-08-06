/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import store from '../store'

import Header from "./header"
import "../styles/index.scss"
import Modais from "../layout/Modais"
import { connect, Provider } from "react-redux"
import PageContent from "./PageContent"

const Layout = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <Provider store={store}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Modais/>
          <PageContent>
            {children}
          </PageContent>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>

        </Provider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
