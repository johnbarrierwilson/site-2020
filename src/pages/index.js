import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/layout'

const IndexPage = (props) => {
  const { data } = props
  console.log(data);
  return (
    <Layout location={props.location}>
      <div className="cell cell--s well well--l pr tac">
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
          <Image
            alt="illustrated icon for writing"
            className="mb1"
            fixed={data.writing.childImageSharp.fixed}
          />
          <h2>Writing</h2>
          <p className="mb0 tcd">A list of common pieces and nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.</p>
        </Link>
        <Link to="/resources" className="card">
          <Image
            alt="illustrated icon for resources"
            className="mb1"
            fixed={data.resources.childImageSharp.fixed}
          />
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
    avatar: file(relativePath: { eq: "images/profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 82, height: 82) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    resources: file(relativePath: { eq: "images/icon-resources.png" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    writing: file(relativePath: { eq: "images/icon-writing.png" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
