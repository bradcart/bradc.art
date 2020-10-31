import React from "react"

export default function ProjectVideo({ project }) {
  return (
    <video loop autoPlay muted id="project-video">
      <source
        src={require(`../images/${project}_demo.mp4`)}
        type="video/mp4"
      />
    </video>
  )
}
