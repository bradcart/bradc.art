import React from "react"
import Button from "./button"
import ProjectVideo from "./video"

const CryptoCard = ({ project }) => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-title inactive-link">
          <h3>CRYPTO BUTLER</h3>
        </div>
        <div className="card-sidebar">
          <div id="concept-header">CONCEPT</div>
          <div className="concept-main">
            <div className="concept-text">
              A web app for managing cryptocurrency portfolios.
            </div>
          </div>
          <div id="tech-header">TECHNOLOGIES</div>
          <ul className="tech-list">
            <li>
              <span>react</span>
            </li>
            <li>
              <span>chart.js</span>
            </li>
            <li>
              <span>css</span>
            </li>
            <li>
              <span>ruby on rails</span>
            </li>
          </ul>
        </div>
        <div className="footer-info">
        Flatiron School project in collaboration with Julio Chazari.
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

export default CryptoCard
