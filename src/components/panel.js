import React, { useEffect, useState } from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
import ReactoryPlaceholder from "../images/Reactory-canvas.jpg"
import LapaluxPlaceholder from "../images/Lapalux-canvas-5.jpg"
import HivePlaceholder from "../images/Hive_Canvas.jpg"
import CryptoPlaceholder from "../images/Crypto_Canvas.jpg"
import { Html } from "@react-three/drei"
import ReactoryInfo from "../images/Reactory_Info.png"
import LapaluxInfo from "../images/Lapalux_Info_2.png"
import CryptoInfo from "../images/Crypto_Info.png"
import HiveInfo from "../images/Hive_Info.png"

const Panel = ({ panel }) => {
  const [loaded, toggleLoaded] = useState(false)
  const Reactory = useTexture(ReactoryPlaceholder)
  const Lapalux = useTexture(LapaluxPlaceholder)
  const Crypto = useTexture(CryptoPlaceholder)
  const Hive = useTexture(HivePlaceholder)
  const rScale = useAspect("cover", 1280, 720)
  const cScale = useAspect("cover", 1852, 1042)
  const hScale = useAspect("cover", 1917, 965)
  const hoverLink = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.add("cursor--link")
  }

  const unhoverLink = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.remove("cursor--link")
  }

  useEffect(() => {
    toggleLoaded(true)
  }, [])

  return (
    <mesh
      raycast={meshBounds}
      scale={panel === 1 ? rScale : panel === 2 ? rScale : panel === 3 ? cScale : hScale}
    >
      <Html center>
        <a
          href={
            panel === 1
              ? "https://lapalux.netlify.app/"
              : panel === 2
                ? "https://youtu.be/VmIQeYBJmB4"
                : panel === 3
                  ? "https://youtu.be/IyU55GfZfGo"
                  : "https://github.com/bradcart/Hive"
          }
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          {panel === 1 ? (
            <img
              src={LapaluxInfo}
              alt="Lapalux title screen"
              className="canvas-title-2"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          ) : panel === 2 ? (
            <img
              src={ReactoryInfo}
              alt="Reactory title screen"
              className="canvas-title-1"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          ) : panel === 3 ? (
            <img
              src={CryptoInfo}
              alt="Crypto Butler title screen"
              className="canvas-title-3"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          ) : (
            <img
              src={HiveInfo}
              alt="Hive title screen"
              className="canvas-title-4"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          )}
        </a>
      </Html>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        map={
          loaded && panel === 1
            ? Lapalux
            : loaded && panel === 2
              ? Reactory
              : loaded && panel === 3
                ? Crypto
                : loaded && panel === 4
                  ? Hive
                  : null
        }
      />
    </mesh>
  )
}

export default Panel
