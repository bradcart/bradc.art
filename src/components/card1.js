import React from "react"
import Button from "./button"
import ProjectVideo from "./video"

const ReactoryCard = ({ project }) => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-title inactive-link">
          <h3>REACTORY</h3>
        </div>
        <div className="card-sidebar">
          <div id="concept-header">CONCEPT</div>
          <div className="concept-main">
            <div className="concept-text">
              A single page website builder with a drag-n-drop interface.
            </div>
          </div>
          <div id="tech-header">TECHNOLOGIES</div>
          <ul className="tech-list">
            <li>
              <span>react</span>
            </li>
            <li>
              <span>react-router</span>
            </li>
            <li>
              <span>json web tokens</span>
            </li>
            <li>
              <span>material ui + css</span>
            </li>
            <li>
              <span>ruby on rails</span>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          Completed for my Flatiron School final project.
        </div>
        <div className="card-background">
          <div id="background-header">BACKGROUND</div>
          <div className="background-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
          <div className="background-footer">
            <Button link="https://youtu.be/VmIQeYBJmB4" label="VIDEO DEMO" />
            <Button label="CASE STUDY" />
          </div>
        </div>
      </div>
      <div className="card-right">
        <ProjectVideo project="Reactory" />
      </div>
    </div>
  )
}

export default ReactoryCard
