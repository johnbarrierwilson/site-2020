import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/layout'

const IndexPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="cell cell--s well well--l tac">
        <Image
          alt="portrait of John Barrier Wilson"
          className="avatar"
          fixed={data.avatar.childImageSharp.fixed}
        />
        <h1>Product Designer at&nbsp;<a href="https://www.elastic.co">Elastic</a></h1>
        <p>Focused on code, users, interactions and visuals. Creating and sharing content for other senior designers who love what they do.</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 82, height: 82) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
