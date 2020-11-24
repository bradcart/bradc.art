import React, { useEffect } from "react"
import { TransitionState } from "gatsby-plugin-transition-link"

const Cursor = () => {
  useEffect(() => {
    addEventListeners()

    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = e => {
    const cursor = document.getElementById("cursor")
    cursor.style.left = `${e.pageX - 20 / 2}px`
    cursor.style.top = `${e.pageY - 20 / 2}px`
  }

  const onMouseLeave = () => {
    const cursor = document.getElementById("cursor")
    cursor.style.display = "none"
  }

  const onMouseEnter = () => {
    const cursor = document.getElementById("cursor")
    cursor.style.display = ""
  }

  const onMouseDown = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.add("cursor--click")
  }

  const onMouseUp = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.remove("cursor--click")
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <div
          className="cursor"
          id="cursor"
          style={
            transitionStatus === "exiting"
              ? { display: "none" }
              : { display: "initial" }
          }
        ></div>
      )}
    </TransitionState>
  )
}

export default Cursor
