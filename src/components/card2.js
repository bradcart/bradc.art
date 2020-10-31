import React from "react"
import Button from "./button"
import ProjectVideo from "./video"

const HiveCard = ({ project }) => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-title inactive-link">
          <h3>HIVE</h3>
        </div>
        <div className="card-sidebar">
          <div id="concept-header">CONCEPT</div>
          <div className="concept-main">
            <div className="concept-text">
              A messenger web app where users can chat with one another in
              real-time.
            </div>
          </div>
          <div id="tech-header">TECHNOLOGIES</div>
          <ul className="tech-list">
            <li>
              <span>javascript</span>
            </li>
            <li>
              <span>websockets</span>
            </li>
            <li>
              <span>bootstrap</span>
            </li>
            <li>
              <span>ruby on rails</span>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          Flatiron School project in collaboration with Michael Sotir.
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

export default HiveCard
