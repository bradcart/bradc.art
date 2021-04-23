import React, { useState } from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
import ReactoryPlaceholder from "../images/reactory-canvas2.jpg"
import LapaluxPlaceholder from "../images/lapalux-canvas2.jpg"
import HivePlaceholder from "../images/hive-canvas2.jpg"
import CryptoPlaceholder from "../images/crypto-canvas2.jpg"
import { Html } from "@react-three/drei"
import ReactoryInfo from "../images/Reactory_Info.png"
import LapaluxInfo from "../images/Lapalux_Info_2.png"
import CryptoInfo from "../images/Crypto_Info.png"
import HiveInfo from "../images/Hive_Info.png"
import { isMobile } from "react-device-detect"

const Panel = ({ panel }) => {
  const [imgLoaded, toggleImgLoaded] = useState(false)
  const Reactory = useTexture(ReactoryPlaceholder)
  const Lapalux = useTexture(LapaluxPlaceholder)
  const Crypto = useTexture(CryptoPlaceholder)
  const Hive = useTexture(HivePlaceholder)
  const rScale = useAspect("cover", 1280, 720)
  const cScale = useAspect("cover", 1852, 1042)
  const hScale = useAspect("cover", 1917, 965)
  const hoverLink = () => {
    if (!isMobile) {
      const cursor = document.getElementById("cursor")
      cursor.classList.add("cursor--link")
    }
  }

  const unhoverLink = () => {
    if (!isMobile) {
      const cursor = document.getElementById("cursor")
      cursor.classList.remove("cursor--link")
    }
  }

  return (
    <mesh
      raycast={meshBounds}
      scale={panel <= 2 ? rScale : panel === 3 ? cScale : hScale}
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
          <img
            src={panel === 1 ? LapaluxInfo : panel === 2 ? ReactoryInfo : panel === 3 ? CryptoInfo : HiveInfo}
            alt="Lapalux project link"
            className={panel === 4 ? "canvas-title-4" : "canvas-title-1"}
            onMouseEnter={() => hoverLink()}
            onMouseLeave={() => unhoverLink()}
            onLoad={() => toggleImgLoaded(true)}
          />
        </a>
      </Html>
      <planeBufferGeometry attach="geometry" />
      {imgLoaded ? (
        <meshBasicMaterial
          attach="material"
          map={
            panel === 1
              ? Lapalux
              : panel === 2
                ? Reactory
                : panel === 3
                  ? Crypto
                  : panel === 4
                    ? Hive
                    : null
          }
        />
      ) : null}
    </mesh>
  )
}

export default Panel
