import React from "react"
import Layout from "../layout/layout"
import SEO from "../layout/SEO"

const Projects = () => {
  return (
    <Layout>
      <SEO pageTitle={"Projects"}/>
      <h1>Projects</h1>
      <hr/>
      <p>
        some of my projects, see more on my <a href="google.com">Github</a>
      </p>
      <ul>
        <li>
          <a href="">Gatsby course</a>
          <a href="">Kassel lab</a>
          <a href="">Tic-tac-porg</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Projects
