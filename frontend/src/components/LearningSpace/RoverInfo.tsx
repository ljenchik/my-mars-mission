import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

import "./RoverInfo.scss";
import { Link } from "react-router-dom";
export const RoverInfo = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="learning-space-container stars twinkling">
      <header>
        <h1 id="rovers-title">Mars Rovers</h1>
        <p>
          Over the years, NASA has sent rovers to Mars. The most recent and
          succesful rovers are Spirit, Opportunity, Curiosity and Perseverance.
          Mars rover, Perseverance, landed on the Red Planet in February 2021!
          Explore the rovers to discover more about Mars!
        </p>
      </header>

      <div id="click">Click on rover to see images taken on Mars</div>
      
      <main className="link-container">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={require(`./LearningSpaceImages/spirit&opportunity.png`)}
            id="rover-image"
          />
          <Card.Body>
            <Card.Title>Spirit and Opportunity</Card.Title>
            <Card.Text>
              <div>
                Twin robotic rovers lived well beyond their planned 90-day
                missions
              </div>
              <div>Landed: January, 2004</div>
              <div>Mission: To find evidence of water on Mars</div>
            </Card.Text>
            <Button
              variant="primary"
              href="https://spaceplace.nasa.gov/mars-spirit-opportunity/en/"
              id="planet-link"
            >
              Learn more about Spirit and Opportunity
            </Button>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
};
