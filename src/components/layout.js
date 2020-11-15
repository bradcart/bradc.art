/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import { TransitionPortal } from "gatsby-plugin-transition-link"
// import Header from "./header"
// import { Helmet } from "react-helmet"
import "../styles/main.scss"
import "gatsby-plugin-purgecss"
import Navbar from "./navbar"

const Layout = ({ page, children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="background">
        {/* {page !== "projects" ? <div className="film-grain" /> : null} */}
        <Navbar page={page} />
        {/* <Cursor /> */}
        {/* <Header siteTitle="Brad Carter" /> */}
        {/* <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/bbp3rrs.css" />
        </Helmet> */}
        {children}
        {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
