import React, { useState } from "react"
import { useTimeout } from "beautiful-react-hooks"
import { useCountUp } from "react-countup"

const Intro = () => {
  const [title, changeTitle] = useState("LOADING.")
  useTimeout(() => {
    changeTitle("DONE.")
  }, 3500)

  const [timer, toggleTimer] = useState(true)
  const { countUp } = useCountUp({
    end: 100,
    duration: 4.4,
    suffix: "%",
    onEnd: () => toggleTimer(false),
  })

  return (
    <div className="intro-container">
      <div className="intro-text-wrapper">
        {[...Array(9)].map((value, index) => (
          <h3 key={index} className={"intro-text text-" + (index + 1)}>
            {title}
          </h3>
        ))}
      </div>
      {timer ? <div className="intro-counter">{countUp}</div> : null}
    </div>
  )
}

export default Intro
