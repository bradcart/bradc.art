import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ChevronDuoLeft from "../images/chevron_duo_left.svg"
import LinkedInIcon from "../images/linkedin_icon.svg"

const Navbar = ({ page }) => {
  return (
    <div>
      {page !== "index" ? (
        <div className="navbar">
          <div className="navbar-left">
            <AniLink cover to="/" direction="right" bg="#080808">
              <img
                src={ChevronDuoLeft}
                alt="Main menu icon"
                className="navbar-chevron"
              />
            </AniLink>
            <div id="navbar-title">brad carter.</div>
          </div>
          <a
            href="https://www.linkedin.com/in/brad-t-carter/"
            target="_blank"
            className="linkedin"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      ) : (
        <div className="navbar">
          {/* <img
            src={ChevronDuoLeft}
            alt="Main menu icon"
            className="navbar-chevron"
          /> */}
          <a
            href="https://www.linkedin.com/in/brad-t-carter/"
            target="_blank"
            className="linkedin"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
