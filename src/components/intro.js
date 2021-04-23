import React, { useState } from "react"
import { useConditionalTimeout, useTimeout } from "beautiful-react-hooks"
import { useCountUp } from "react-countup"
import { isSafari } from "react-device-detect"

const Intro = () => {
  const [timer, toggleTimer] = useState(true)
  const { countUp } = useCountUp({
    end: 100,
    duration: 4.4,
    suffix: "%",
    onEnd: () => toggleTimer(false),
  })

  const [title, changeTitle] = useState("LOADING.")
  useTimeout(() => {
    changeTitle("DONE.")
  }, 3500)

  //after Timer runs out (becomes false), set Mounted to false.
  const [mounted, toggleMounted] = useState(true)
  useConditionalTimeout(
    () => {
      toggleMounted(false)
    },
    2800,
    !isSafari && !timer
  )

  // const handleMouseEnter = () => {
  //   const cursor = document.getElementById("cursor")
  //   cursor.className = "cursor--spinner"
  // }

  // const handleMouseLeave = () => {
  //   const cursor = document.getElementById("cursor")
  //   cursor.className = "cursor"
  // }

  return (
    <>
      {mounted ? (
        <div className={isSafari ? "intro-container-safari" : "intro-container"}>
          <div className="intro-text-wrapper">
            {isSafari ? (
              <div className="intro-safari-wrapper">
                <h3 className="intro-safari-text">
                  THIS SITE IS CURRENTLY NOT SUPPORTED IN SAFARI{" "}
                  <span id="wave-emoji" role="img" aria-label="Pensive emoji">
                    😔
                  </span>
                </h3>
                <br />
                <h3 className="intro-safari-text">
                  PLEASE USE CHROME/EDGE/FIREFOX FOR THE INTENDED EXPERIENCE.
                </h3>
              </div>
            ) : (
              [...Array(9)].map((value, index) => (
                <h3 key={index} className={"intro-text text-" + (index + 1)}>
                  {title}
                </h3>
              ))
            )}
          </div>
          {timer && !isSafari ? <div className="intro-counter">{countUp}</div> : null}
        </div>
      ) : null}
    </>
  )
}

export default Intro
