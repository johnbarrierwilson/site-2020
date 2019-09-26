import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/layout'

const IndexPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location}>
      <div className="cell cell--s well well--l tac">
        <Image
          alt="portrait of John Barrier Wilson"
          className="avatar"
          fixed={data.avatar.childImageSharp.fixed}
        />
        <h1>Product Designer at&nbsp;<a href="https://www.elastic.co">Elastic</a></h1>
        <p>Focused on code, users, interactions and visuals. Creating and sharing content for other senior designers who love what they do.</p>
      </div>
      <div className="grid well mt0">
        <Link to="/writing" className="card">
          <h2>Writing</h2>
          <p className="mb0 tcd">A list of common pieces and nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.</p>
        </Link>
        <Link to="/resources" className="card">
          <h2>Resources</h2>
          <p className="mb0 tcd">A list of common pieces and nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.</p>
        </Link>
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
