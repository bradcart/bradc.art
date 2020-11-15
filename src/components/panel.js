import React from "react"
import { useTexture, useAspect, meshBounds } from "@react-three/drei"
import ReactoryPlaceholder from "../images/Reactory-Placeholder-3.jpg"
import HivePlaceholder from "../images/Hive-Placeholder-3.jpg"
import CryptoPlaceholder from "../images/Crypto-Placeholder-3.jpg"

const Panel = ({ panel }) => {
  const Reactory = useTexture(ReactoryPlaceholder)
  const Crypto = useTexture(CryptoPlaceholder)
  const Hive = useTexture(HivePlaceholder)
  const rScale = useAspect("cover", 1280, 720)
  const cScale = useAspect("cover", 1880, 1042)
  const hScale = useAspect("cover", 1917, 965)
  return (
    <mesh raycast={meshBounds} scale={panel === 1 ? rScale : panel === 2 ? cScale : hScale}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        map={panel === 1 ? Reactory : panel === 2 ? Crypto : Hive}
      />
    </mesh>
  )
}

export default Panel
