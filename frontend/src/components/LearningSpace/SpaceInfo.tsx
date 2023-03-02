import "./SpaceInfo.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Planet } from "../../models";

const planets = [
  [
    "mercury",
    "Mercury is the smallest planet in our solar system",
    "https://solarsystem.nasa.gov/planets/mercury/overview/",
  ],
  [
    "venus",
    "Venus is the hottest planet in our solar system",
    "https://solarsystem.nasa.gov/planets/venus/overview/",
  ],
  [
    "earth",
    "Earth is still the only planet known to host life",
    "https://solarsystem.nasa.gov/planets/earth/overview/",
  ],
  [
    "mars",
    "Mars is also known as the Red Planet",
    "https://solarsystem.nasa.gov/planets/mars/overview/",
  ],
  [
    "jupiter",
    "Jupiter is the biggest planet in our Solar System",
    "https://solarsystem.nasa.gov/planets/jupiter/overview/",
  ],
  [
    "saturn",
    "Saturn is adorned with a dazzling, complex system of icy rings",
    "https://solarsystem.nasa.gov/planets/saturn/overview/",
  ],
  [
    "uranus",
    "Uranus was the first planet found with the aid of a telescope in 1781",
    "https://solarsystem.nasa.gov/planets/uranus/overview/",
  ],
  [
    "neptune",
    "Neptune was the first planet located through mathematical calculations",
    "https://solarsystem.nasa.gov/planets/neptune/overview/",
  ],
];

const PlanetCard = (props: { index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [planet, setPlanet] = useState<Planet>({
    planetIndex: props.index,
    planetName: "",
    planetFact: "",
    planetLink: "",
    planetImage: "",
    planetGravity: null,
    planetDensity: null,
    planetMass: null,
    planetRadius: null,
    planetTemp: null,
    planetMoons: null,
  });

  const [error, setError] = useState("");

  const queryURL = (planetName: string) => {
    let query = `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`;
    return query;
  };

  const getPlanetData = (index: number) => {
    let planetName = planets[index][0];
    fetch(queryURL(planetName))
      .then((response) => response.json())
      .then((data) => {
        console.log("Planet name:", planetName);
        planet.planetName = planetName;
        planet.planetFact = planets[index][1];
        planet.planetLink = planets[index][2];

        planet.planetImage = `./LearningSpaceImages/${planet.planetName}.jpeg`;
        console.log("Planet image: ", planet.planetImage);

        planet.planetGravity = data.gravity;
        planet.planetDensity = data.density;
        planet.planetMass = data.mass.massValue.toFixed(2);
        planet.planetRadius = data.meanRadius.toFixed(2);
        planet.planetTemp = data.avgTemp;
        if (data.moons !== null) {
          planet.planetMoons = data.moons.length;
        } else {
          planet.planetMoons = 0;
        }
        setPlanet(planet);
        console.log("Planet info", planet);
      });
  };

  useEffect(() => {
    getPlanetData(planet.planetIndex);
  }, [planet]);

  const handleClick = (index: number) => {
    setIsFlipped(!isFlipped);
    getPlanetData(index);
  };

  if (!planet) {
    return <div>Loading ...</div>;
  } else {
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          <Card style={{ width: "18rem" }}>
            <Button
              onClick={() => {
                handleClick(planet.planetIndex);
              }}
              id="planetButton"
            >
              <img
                src={require(`${planet.planetImage}`)}
                id="front-image"
              />
            </Button>
            <Card.Body>
              <Card.Title>{planet.planetName.toUpperCase()}</Card.Title>
              <Card.Text>{planet.planetFact}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title id="back-title">
                {planet.planetName.toUpperCase()}
              </Card.Title>
              <Button
                onClick={() => handleClick(planet.planetIndex)}
                id="thumb-planetButton"
              >
                <img src={require(`${planet.planetImage}`)} id="thumb-planet" />
              </Button>
              <Card.Text className="back-card-text">
                <p>Gravity: {planet.planetGravity}</p>
                <p>Density: {planet.planetDensity}</p>
                <p>Mass: {planet.planetMass}</p>
                <p>Radius: {planet.planetRadius}</p>
                <p>Tempreture: {planet.planetTemp}</p>
                <p>Moons: {planet.planetMoons}</p>
                <Button
                  variant="primary"
                  href={planet.planetLink}
                  id="planet-link"
                >
                  Learn more about {planet.planetName.toUpperCase()}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </ReactCardFlip>
    );
  }
};

export function SpaceInfo() {
  return (
    <div className="space-info-body stars twinkling">
      <h1 id="facts-title">Interesting facts about Space</h1>
      <div className="planets-container" id="planets">
        <div className="planets-row">
          {planets.map((planet, i) => (
            <PlanetCard index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

//logo
// button planet at the corner of back card
// add text about space and a link to a good resourse
// asteroids, universe, milky way, black hole
