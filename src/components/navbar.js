import React from "react"
import { motion } from "framer-motion"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import ChevronDuoLeft from "../assets/chevron_duo_left.svg"
import LinkedInIcon from "../images/linkedin_icon.svg"
import GitHubIcon from "../images/github_icon.svg"

const Navbar = ({ page }) => {
  const handleMouseEnter = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.add("cursor--chevron-hover")
  }
  const handleMouseLeave = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.remove("cursor--chevron-hover")
  }
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        if (page !== "index") {
          return (
            <div className="navbar">
              <motion.div
                className="navbar-left"
                initial={{ x: -500 }}
                animate={
                  transitionStatus === "exiting" ? { x: -500 } : { x: 0 }
                }
                transition={{ duration: 0.8 }}
              >
                {typeof window !== `undefined` && (
                  <TransitionLink
                    to="/"
                    state={{ loadIntro: false }}
                    entry={
                      page === "contact"
                        ? {
                          delay: 0.4,
                          length: 0.4,
                          state: { y: window.innerHeight, fromPage: true },
                        }
                        : page === "about"
                          ? {
                            delay: 0.4,
                            length: 0.4,
                            state: { x: window.innerWidth, fromPage: true },
                          }
                          : {
                            delay: 0.4,
                            length: 0.4,
                            state: { x: -window.innerWidth, fromPage: true },
                          }
                    }
                    exit={{ length: 0.4 }}
                  >
                    <div
                      className="navbar-chevron"
                      onMouseEnter={() => handleMouseEnter()}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <ChevronDuoLeft />
                    </div>
                  </TransitionLink>
                )}
                <div id="navbar-title">brad carter.</div>
              </motion.div>
              <motion.div
                className="navbar-right"
                initial={{ x: 500 }}
                animate={transitionStatus === "exiting" ? { x: 500 } : { x: 0 }}
                transition={{ duration: 1 }}
              >
                <a
                  href="https://www.linkedin.com/in/brad-t-carter/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <img src={LinkedInIcon} alt="LinkedIn" id="linked-in" />
                </a>
                <a
                  href="https://github.com/bradcart"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <img src={GitHubIcon} alt="GitHub" id="github" />
                </a>
              </motion.div>
            </div>
          )
        } else {
          return (
            <div className="navbar-index">
              <motion.div
                className="navbar-right"
                initial={{ x: 500 }}
                animate={transitionStatus === "exiting" ? { x: 500 } : { x: 0 }}
                transition={{ duration: 1 }}
              >
                <a
                  href="https://www.linkedin.com/in/brad-t-carter/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <img src={LinkedInIcon} alt="LinkedIn" id="linked-in" />
                </a>
                <div style={{ border: "1px solid transparent", borderRadius: "5px", overflow: "hidden" }} className="github-wrapper">
                  <a
                    href="https://github.com/bradcart"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <img src={GitHubIcon} alt="GitHub" id="github" />
                  </a>
                </div>
              </motion.div>
            </div>
          )
        }
      }}
    </TransitionState>
  )
}

export default Navbar

// {
/* <div className="navbar-center noselect">
            <span className="nav-header">projects</span>
          </div> */
// }
// {
/* <div className="navbar-center noselect">
            <span
              className="nav-header"
              id={highlighted === "web" ? "nav-active" : "nav-inactive"}
              onClick={e => {
                handlePageChange(e.target.innerText)
                changeHighlighted(e.target.innerText)
              }}
            >
              web
            </span>{" "}
            //{" "}
            <span
              className="nav-header"
              id={highlighted === "video" ? "nav-active" : "nav-inactive"}
              onClick={e => {
                handlePageChange(e.target.innerText)
                changeHighlighted(e.target.innerText)
              }}
            >
              video
            </span>{" "}
            //{" "}
            <span
              className="nav-header"
              id={highlighted === "music" ? "nav-active" : "nav-inactive"}
              onClick={e => {
                handlePageChange(e.target.innerText)
                changeHighlighted(e.target.innerText)
              }}
            >
              music
            </span>
          </div> */
// }
