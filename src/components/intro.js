import React, { useState } from "react"
import { useTimeout } from "beautiful-react-hooks"
import { useCountUp } from "react-countup"
import BackgroundImage from "./background-image"

const Intro = () => {
  const [title, changeTitle] = useState("LOADING.")
  // useTimeout(() => {
  //   changeTitle("frontend developer.")
  // }, 2000)

  const [timer, toggleTimer] = useState(true)

  const { countUp } = useCountUp({
    end: 100,
    duration: 4.4,
    suffix: "%",
    onEnd: () => toggleTimer(false),
  })

  useTimeout(() => {
    changeTitle("DONE.")
  }, 3500)

  return (
    <>
      <div className="intro-container">
        <div className="intro-text-wrapper">
          {[...Array(9)].map((value, index) => (
            <h3 key={index} className={"intro-text text-" + (index + 1)}>
              {title}
            </h3>
          ))}
        </div>
        {timer ? <div className="intro-counter">{countUp}</div> : null}
        {/* <div className="left-wipe" /> */}
      </div>
      {/* <div className="right-wipe" /> */}
    </>
  )
}

export default Intro
