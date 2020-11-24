import React from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
import ReactoryPlaceholder from "../images/Reactory-canvas.jpg"
import HivePlaceholder from "../images/Hive_Canvas.jpg"
import CryptoPlaceholder from "../images/Crypto_Canvas.jpg"
import { Html } from "@react-three/drei"
import ReactoryInfo from "../images/Reactory_Info.png"
import CryptoInfo from "../images/Crypto_Info.png"
import HiveInfo from "../images/Hive_Info.png"

const Panel = ({ panel }) => {
  const Reactory = useTexture(ReactoryPlaceholder)
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
  return (
    <mesh
      raycast={meshBounds}
      scale={panel === 1 ? rScale : panel === 2 ? cScale : hScale}
    >
      <Html center>
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
          {panel === 1 ? (
            <img
              src={ReactoryInfo}
              alt="Reactory title"
              className="canvas-title-1"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          ) : panel === 2 ? (
            <img
              src={CryptoInfo}
              alt="Crypto Butler title"
              className="canvas-title-2"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          ) : (
            <img
              src={HiveInfo}
              alt="Hive title"
              className="canvas-title-3"
              onMouseEnter={() => hoverLink()}
              onMouseLeave={() => unhoverLink()}
            />
          )}
        </a>
      </Html>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        map={panel === 1 ? Reactory : panel === 2 ? Crypto : Hive}
      />
    </mesh>
  )
}

export default Panel
