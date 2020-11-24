import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import {
  EffectComposer,
  Glitch,
  Noise,
  Scanline,
} from "@react-three/postprocessing"
// import { Loader } from "@react-three/drei/Loader"
// import { GlitchMode } from "postprocessing"
// import ProjectLinks from "./project-links"

const VideoCanvas = ({ children }) => {
  // const ref = useCallback(node => {
  //   if (node !== null) {
  //     //fetch(...)   load data
  //     ref.update()
  //   }
  // }, [])
  // const [isHovered, setIsHovered] = useState(false)

  // const [density, setDensity] = useState(1.25)
  // function lessDensity(e) {
  //   e.stopPropagation()
  //   setDensity(3.75)
  // }
  // function moreDensity(e) {
  //   e.stopPropagation()
  //   setDensity(1.25)
  // }

  // const ref = useRef(null)

  return (
    <>
      <Canvas
        // colorManagement
        camera={{ position: [0, 0, 0.5], far: 8, near: 0.1 }}
        gl={{ antialias: false, alpha: false }}
        // onPointerOver={() => (ref.current.mode = GlitchMode.CONSTANT_MILD)}
        // onPointerOut={() => (ref.current.mode = GlitchMode.DISABLED)}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <EffectComposer>
          <Noise />
          <Scanline />
          <Glitch
            active
            // ref={ref}
            // mode={GlitchMode.DISABLED}
            ratio={0.6}
            delay={[2, 5]}
            duration={[0.1, 0.3]}
            strength={[0.01, 0.02]}
          />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default VideoCanvas
