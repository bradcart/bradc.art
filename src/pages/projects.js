import React, { useState, useEffect, useRef } from "react"
import { InView } from "react-intersection-observer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactoryCard from "../components/card1"
import HiveCard from "../components/card2"
import CryptoCard from "../components/card3"
// import {
//   motion,
//   AnimatePresence,
//   useCycle,
//   useViewportScroll,
// } from "framer-motion"
// import { Transition } from "react-transition-group"

const ProjectsPage = () => {
  const [selectedCard, changeSelectedCard] = useState(1)
  const scrollWindow = document.querySelector(".project-menu")
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
  // const variants = {
  //   enter: {
  //     y: selectedCard > 1 ? -1000 : 0,
  //   },
  //   center: {
  //     y: 0,
  //   },
  //   exit: {
  //     y: selectedCard > 1 ? 1000 : -1000,
  //   },
  // }
  return (
    <Layout page="projects">
      {/* <div className={`overlay-4`} /> */}
      <SEO title="projects" />
      <div className="project-menu">
        <div className="project-menu-sidebar">
          <div className="nav-list">
            <div
              className={`nav-list${
                selectedCard === 1 ? "-active" : "-inactive"
              }`}
              onClick={() => {
                changeSelectedCard(1)
                scrollWindow.scrollTo(0, 0)
              }}
            >
              Reactory
            </div>
            <div
              className={`nav-list${
                selectedCard === 2 ? "-active" : "-inactive"
              }`}
              onClick={() => {
                changeSelectedCard(2)
                scrollWindow.scrollTo(0, 650)
              }}
            >
              Hive
            </div>
            <div
              className={`nav-list${
                selectedCard === 3 ? "-active" : "-inactive"
              }`}
              onClick={() => {
                changeSelectedCard(3)
                scrollWindow.scrollTo(0, 1310)
              }}
            >
              Crypto Butler
            </div>
          </div>
        </div>
        <div className="project-menu-right">
          <InView
            as="div"
            onChange={() => changeSelectedCard(1)}
            threshold={0.7}
          >
            <ReactoryCard />
          </InView>
          <InView
            as="div"
            onChange={() => changeSelectedCard(2)}
            threshold={0.9}
          >
            <HiveCard />
          </InView>
          <InView
            as="div"
            onChange={() => changeSelectedCard(3)}
            threshold={0.9}
          >
            <CryptoCard />
          </InView>
        </div>
        {/* <AnimatePresence exitBeforeEnter>
          {selectedCard === 1 ? (
            <motion.div
              className="project-menu-card"
              key="card1"
              // variants={variants}
              initial={{ x: prevCard > 1 ? 2000 : 0 }}
              animate={{ x: 0 }}
              exit={{ x: 2000 }}
              transition={{ duration: 0.55, bounce: 0 }}
            >
              <ReactoryCard />
            </motion.div>
          ) : selectedCard === 2 ? (
            <motion.div
              className="project-menu-card"
              key="card2"
              // variants={variants}
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              exit={{ x: 2000 }}
              transition={{ duration: 0.55, bounce: 0 }}
            >
              <HiveCard />
            </motion.div>
          ) : selectedCard === 3 ? (
            <motion.div
              className="project-menu-card"
              key="card3"
              // variants={variants}
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              exit={{ x: 2000 }}
              transition={{ duration: 0.55, bounce: 0 }}
            >
              <CryptoCard />
            </motion.div>
          ) : null}
        </AnimatePresence> */}
        {/* <Transition in={entered} timeout={500} unmountOnExit>
          <div className="info-card-wrapper">
            <InfoCard />
          </div>
        </Transition> */}
        {/* {arrowPosition === 2 ? (
          <div className="video-wrapper" id={entered ? "blurred" : null}>
            <ProjectVideo project="Reactory" />
          </div>
        ) : null} */}
      </div>
    </Layout>
  )
}

export default ProjectsPage
