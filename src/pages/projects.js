import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoCanvas from "../components/video-canvas"
import Panel from "../components/panel"
// import {
//   useCycle,
//   useViewportScroll,
// } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"
import ChevronBigLeft from "../assets/chevron_big_left.svg"
// import ChevronLeft from "../assets/chevron_left.svg"
import ChevronBigRight from "../assets/chevron_big_right.svg"
// import ChevronRight from "../assets/chevron_right.svg"
// import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink"


const ProjectsPage = ({ transitionStatus, entry }) => {
  // const [selectedPage, changeSelectedPage] = useState("web")
  // const [selectedCard, changeSelectedCard] = useState(1)
  // const scrollWindow = document.querySelector(".project-menu")
  // const handlePageChange = value => {
  //   changeSelectedPage(value)
  // }
  // function usePrevious(value) {
  //   const ref = useRef()
  //   useEffect(() => {
  //     ref.current = value
  //   })
  //   return ref.current
  // }
  // useEffect(() => {
  //   console.log(selectedCard)
  // }, [])
  // const prevCard = usePrevious(selectedCard)
  const [panel, changePanel] = useState(1)
  const [forwardDirection, toggleForwardDirection] = useState(true)
  function nextPanel() {
    if (panel < 3) {
      changePanel(panel + 1)
      toggleForwardDirection(true)
    }
  }
  function prevPanel() {
    if (panel > 1) {
      changePanel(panel - 1)
      toggleForwardDirection(false)
    }
  }

  // const controls = useAnimation()
  // const variants = {
  //   enter: {
  //     x: forwardDirection ? 1000 : -1000,
  //   },
  //   center: {
  //     x: 0,
  //   },
  //   exit: {
  //     x: forwardDirection ? -1000 : 1000,
  //   },
  // }

  return (
    <Layout page="projects">
      {/* <div className={`overlay-4`} /> */}
      <SEO title="projects" />
      <motion.div
        className="project-menu"
        initial={entry.state}
        animate={
          transitionStatus === "exiting" ? { x: window.innerWidth } : { x: 0 }
        }
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className={panel > 1 ? "chevron-left" : "chevron-left-disabled"}
          onClick={() => prevPanel()}
          whileTap={panel > 1 ? { scale: 0.9 } : { scale: 1 }}
          whileHover={panel > 1 ? { scale: 1.2 } : { scale: 1 }}
        >
          <ChevronBigLeft />
        </motion.div>
        <a
          href={
            panel === 1
              ? "https://youtu.be/VmIQeYBJmB4"
              : panel === 2
              ? "https://youtu.be/IyU55GfZfGo"
              : "https://www.linkedin.com/in/brad-t-carter/"
          }
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="canvas-wrapper">
            <div className="canvas-subtitle">
              <h2 className="subtitle-text">
                {panel === 1
                  ? "WEBSITE BUILDER"
                  : panel === 2
                  ? "PORTFOLIO TRACKER"
                  : "GROUP CHAT"}
              </h2>
            </div>
            <VideoCanvas>
              <Panel panel={panel} />
            </VideoCanvas>
          </div>
        </a>
        <motion.div
          className={panel < 3 ? "chevron-right" : "chevron-right-disabled"}
          onClick={() => nextPanel()}
          whileTap={panel < 3 ? { scale: 0.9 } : { scale: 1 }}
          whileHover={panel < 3 ? { scale: 1.2 } : { scale: 1 }}
        >
          <ChevronBigRight />
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default ProjectsPage
