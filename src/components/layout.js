/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import useDeviceDetect from "../utils/useDeviceDetect"
import "../styles/main.scss"
import "gatsby-plugin-purgecss"

const Layout = ({ page, children }) => {
  const { isMobile } = useDeviceDetect()

  return (
    <div className="background">
      {!isMobile && page !== "projects" ? <div className="film-grain" /> : null}
      <Navbar page={page} />
      {children}
      {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
