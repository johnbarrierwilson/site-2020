import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header, navigation

    if (location.pathname === rootPath) {
      header = (
        <Link to="/" className="logo">
          John Barrier Wilson
        </Link>
      )
      navigation = (
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="#">Writing</Link>
          <Link to="#">Resources</Link>
          <Link to="#">Contact</Link>
        </nav>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
      navigation = (
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="#">Writing</Link>
          <Link to="#">Resources</Link>
          <Link to="#">Contact</Link>
        </nav>
      )
    }

    return (
      <div className="row">
        <div className="cell well">
          <header className="header">
            <div>{header}</div>
            <div>{navigation}</div>
          </header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
