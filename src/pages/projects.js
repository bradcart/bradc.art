import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoCanvas from "../components/video-canvas"
import Panel from "../components/panel"
import ChevronBigLeft from "../assets/chevron_big_left.svg"
import ChevronBigRight from "../assets/chevron_big_right.svg"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"
import Cursor from "../components/cursor"

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
  function nextPanel() {
    if (panel < 4) {
      changePanel(panel + 1)
    }
  }
  function prevPanel() {
    if (panel > 1) {
      changePanel(panel - 1)
    }
  }

  // const ProjectInfo = () => {
  //   return (
  //     <div className="project-info">
  //       <span className="project-info-subtitle">
  //         {panel === 1
  //           ? "drag-and-drop website builder"
  //           : panel === 2
  //           ? "portfolio tracker"
  //           : "online chatrooms"}
  //       </span>
  //     </div>
  //   )
  // }

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
  const handleMouseEnter = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.add("cursor--chevron-hover")
  }
  const handleMouseLeave = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.remove("cursor--chevron-hover")
  }

  return (
    <Layout page="projects">
      {/* <div className={`overlay-4`} /> */}
      <SEO title="projects" />
      {typeof window !== `undefined` && (
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
            onHoverStart={panel > 1 ? () => handleMouseEnter() : null}
            onHoverEnd={() => handleMouseLeave()}
          >
            <ChevronBigLeft />
          </motion.div>
          <div className="canvas-wrapper">
            <VideoCanvas>
              <Panel panel={panel} />
            </VideoCanvas>
          </div>
          <motion.div
            className={panel < 4 ? "chevron-right" : "chevron-right-disabled"}
            onClick={() => nextPanel()}
            whileTap={panel < 4 ? { scale: 0.9 } : { scale: 1 }}
            whileHover={panel < 4 ? { scale: 1.2 } : { scale: 1 }}
            onHoverStart={panel < 4 ? () => handleMouseEnter() : null}
            onHoverEnd={() => handleMouseLeave()}
          >
            <ChevronBigRight />
          </motion.div>
        </motion.div>
      )}
      {!isMobile ? <Cursor /> : null}
    </Layout>
  )
}

export default ProjectsPage
