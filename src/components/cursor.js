const Cursor = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 })
  // const [hidden, setHidden] = useState(false)
  // const [clicked, setClicked] = useState(false)
  // const [linkHovered, setLinkHovered] = useState(false)
  // const [gradientHovered, setGradientHovered] = useState(false)

  // const isMobile = () => {
  //   const ua = navigator.userAgent
  //   return /Android|Mobi/i.test(ua)
  // }

  // if (typeof navigator !== "undefined" && isMobile()) return null;

  useEffect(() => {
    addEventListeners()
    // handleLinkHoverEvents()
    //   handleGradientHoverEvents()
    return () => removeEventListeners()
  }, [])

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    console.log("events added")
    // document.addEventListener("mousedown", onMouseDown)
    // document.addEventListener("mouseup", onMouseUp)
  }

  // const handleLinkHoverEvents = () => {
  //   document.querySelectorAll(".mmo-text").forEach(el => {
  //     el.addEventListener("mouseover", () => setLinkHovered(true))
  //     el.addEventListener("mouseout", () => setLinkHovered(false))
  //   })
  // }

  // const handleGradientHoverEvents = () => {
  //   document.querySelectorAll(".main-menu-right-text").forEach(el => {
  //     el.addEventListener("mouseover", () => setGradientHovered(true))
  //     el.addEventListener("mouseout", () => setGradientHovered(false))
  //   })
  // }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    console.log("events removed")
    // document.removeEventListener("mousedown", onMouseDown)
    // document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = e => {
    // setPosition({ x: e.clientX, y: e.clientY })
    const cursor = document.querySelector(".cursor")
    cursor.style.left = `${e.pageX}px`
    cursor.style.top = `${e.pageY}px`
  }

  const onMouseLeave = () => {
    // setHidden(true)
    const cursor = document.querySelector(".cursor")
    cursor.style.display = "none"
  }

  const onMouseEnter = () => {
    // setHidden(false)
    const cursor = document.querySelector(".cursor")
    cursor.style.display = ""
  }

  // const onMouseDown = () => {
  //   // setClicked(true)
  //   // const cursor = document.querySelector(".cursor")
  //   // cursor.style.transform = "translate(-50%, -50%) scale(1.4)"
  //   // cursor.style.backgroundColor = "#F0F5F3"
  // }

  // const onMouseUp = () => {
  //   // setClicked(false)
  //   // const cursor = document.querySelector(".cursor")
  //   // cursor.style.transform = "scale (0.6)"
  //   // cursor.style.backgroundColor = "transparent"
  // }

  // const cursorClasses = classNames("cursor", {
  //   // "cursor--clicked": clicked,
  //   // "cursor--hidden": hidden,
  //   // "cursor--link-hovered": linkHovered,
  //   // "cursor--gradient-hovered": gradientHovered,
  // })

  return (
    <div
      className="cursor"
      // style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {console.log("new cursor")}
    </div>
  )
}

export default Cursor