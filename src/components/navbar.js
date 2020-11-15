import React from "react"
import { motion } from "framer-motion"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import ChevronDuoLeft from "../assets/chevron_duo_left.svg"
import LinkedInIcon from "../images/linkedin_icon.svg"
// import ProjectsScreen from "../images/Projects-Screen-Invert.jpg"

const Navbar = ({ page }) => {
  // const [highlighted, changeHighlighted] = useState("web")
  // const exitDirection = () => {
  //   if (page === "about") {
  //     return -window.innerWidth
  //   } else {
  //     return -500
  //   }
  // }
  return (
    <>
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
                      entry={
                        page === "contact"
                          ? {
                              delay: 0.4,
                              length: 0.4,
                              state: { y: window.innerHeight },
                            }
                          : page === "about"
                          ? {
                              delay: 0.4,
                              length: 0.4,
                              state: { x: window.innerWidth },
                            }
                          : {
                              delay: 0.4,
                              length: 0.4,
                              state: { x: -window.innerWidth },
                            }
                      }
                      exit={{ length: 0.4 }}
                    >
                      <div className="navbar-chevron">
                        <ChevronDuoLeft />
                      </div>
                    </TransitionLink>
                  )}
                  <div id="navbar-title">brad carter.</div>
                </motion.div>
                <motion.div
                  className="navbar-right"
                  initial={{ x: 500 }}
                  animate={
                    transitionStatus === "exiting" ? { x: 500 } : { x: 0 }
                  }
                  transition={{ duration: 1 }}
                >
                  <a
                    href="https://www.linkedin.com/in/brad-t-carter/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <img src={LinkedInIcon} alt="LinkedIn" id="linked-in" />
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
                  animate={
                    transitionStatus === "exiting" ? { x: 500 } : { x: 0 }
                  }
                  transition={{ duration: 1 }}
                >
                  <a
                    href="https://www.linkedin.com/in/brad-t-carter/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <img src={LinkedInIcon} alt="LinkedIn" id="linked-in" />
                  </a>
                </motion.div>
              </div>
            )
          }
        }}
      </TransitionState>
    </>
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
