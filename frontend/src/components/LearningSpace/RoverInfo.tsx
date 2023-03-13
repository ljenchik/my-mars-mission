import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./RoverInfo.scss";
import { Link } from "react-router-dom";
export const RoverInfo = () => {
  return (
    <div className="rovers-container stars twinkling">
      <header>
        <h1 id="rovers-title">Mars Rovers</h1>
        <p>
          Over the years, NASA has sent rovers to Mars. The most recent and
          succesful rovers are Spirit, Opportunity, Curiosity and Perseverance.
          Mars rover, Perseverance, landed on the Red Planet in February 2021!
          Explore the rovers to discover more about Mars!
        </p>
      </header>
      <main>
        <div id="click">Click on rover to see images taken on Mars</div>
        <div className="link-container">
          {/* Spirit and Opportunity */}
          <Card style={{ width: "22rem" }} className="rover-card">
            <Link to='/images/spirit-opportunity'> <Card.Img
              variant="top"
              src={require(`./LearningSpaceImages/spirit&opportunity.png`)}
              id="rover-image"
              
            />
            </Link>
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

          {/* Curiosity */}
          <Card style={{ width: "22rem" }}  className="rover-card">
            <Link to='/images/curiosity'><Card.Img
              variant="top"
              src={require(`./LearningSpaceImages/curiosity.png`)}
              id="rover-image"
            />
            </Link>
            <Card.Body>
              <Card.Title>Curiosity</Card.Title>
              <Card.Text>
                <div>
                  Curiosity is a car-sized Mars rover designed to explore the
                  Gale crater on Mars
                </div>
                <div>Landed: August, 2012 </div>
                <div>
                  Mission: To find out if Mars once had what all life needs,
                  lasting water and the right chemicals
                </div>
              </Card.Text>
              <Button
                variant="primary"
                href="https://spaceplace.nasa.gov/mars-curiosity/en/"
                id="planet-link"
              >
                Learn more about Curiosity
              </Button>
            </Card.Body>
          </Card>

          {/*  Perseverance*/}
          <Card style={{ width: "22rem" }}  className="rover-card">
            <Link to="/images/perseverance"><Card.Img
              variant="top"
              src={require(`./LearningSpaceImages/perseverance.png`)}
              id="rover-image"
            />
            </Link>
            <Card.Body>
              <Card.Title>Perseverance</Card.Title>
              <Card.Text>
                <div>
                  Perseverance is similar to Curiosity, carries a small robotic
                  helicopter
                </div>
                <div>Landed: February, 2021</div>
                <div>
                  Mission: To seek out evidence of former life, collect rock and
                  soil samples, and test oxygen production from the Martian
                  atmosphere
                </div>
              </Card.Text>
              <Button
                variant="primary"
                href="https://spaceplace.nasa.gov/mars-2020/en/"
                id="planet-link"
              >
                Learn more about Perseverance
              </Button>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
};
