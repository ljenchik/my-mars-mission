import "./SpaceInfo.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";



export function SpaceInfo() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const planets = [
    ["mercury","Mercury is the smallest planet in our solar system", "https://solarsystem.nasa.gov/planets/mercury/overview/"],
    ["venus", "Venus is the hottest planet in our solar system", "https://solarsystem.nasa.gov/planets/venus/overview/"],
    ["earth", "Earth is still the only planet known to host life", "https://solarsystem.nasa.gov/planets/earth/overview/"],
    ["mars", "Mars is also known as the Red Planet", "https://solarsystem.nasa.gov/planets/mars/overview/"],
    ["jupiter", "Jupiter is the biggest planet in our Solar System", "https://solarsystem.nasa.gov/planets/jupiter/overview/"],
    ["saturn", "Saturn is adorned with a dazzling, complex system of icy rings", "https://solarsystem.nasa.gov/planets/saturn/overview/"],
    ["uranus", "Uranus was the first planet found with the aid of a telescope in 1781", "https://solarsystem.nasa.gov/planets/uranus/overview/"],
    ["neptune", "Neptune was the first planet located through mathematical calculations", "https://solarsystem.nasa.gov/planets/neptune/overview/"]
  ];
  return (
    <div className="space-info-body stars twinkling">
      <h1 id="facts-title">Interesting facts about Space</h1>

      <div className="planets-container" id="planets">
        <div className="planets-row">

        {planets.map((planet) => (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
              <div>
                <Card style={{ width: "18rem" }}>
                  <Button onClick={handleClick} id="planetButton">
                    <Card.Img
                      variant="top"
                      src={require(`./LearningSpaceImages/${planet[0]}.jpeg`)}
                    />
                  </Button>
                  <Card.Body>
                    <Card.Title>{planet[0].toUpperCase()}</Card.Title>
                    <Card.Text>{planet[1]}</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Button onClick={handleClick} id="planetButton">
                    <Card.Img
                      variant="top"
                      src={require(`./LearningSpaceImages/${planet[0]}.jpeg`)}
                    />
                  </Button>
                  <Card.Body>
                    <Card.Title>{planet[0].toUpperCase()}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary" href={planet[2]} id="planet-link">
                      Learn more about {planet[0].toUpperCase()}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </ReactCardFlip>
        ))}
          
        </div>
      </div>
    </div>
  );
}
