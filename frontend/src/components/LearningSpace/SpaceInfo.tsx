import "./SpaceInfo.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PlanetCard = (props: {
  planetName: string;
  planetFact: string;
  planetLink: string;
  planetImage: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [planetGravity, setPlanetGravity] = useState("");
  const [planetDensity, setPlanetDensity] = useState("");
  const [planetMass, setPlanetMass] = useState("");
  const [planetMassExponent, setPlanetMassExponent] = useState("");
  const [planetRadius, setPlanetRadius] = useState("");
  const [planetTemp, setPlanetTemp] = useState("");
  const [planetMoons, setPlanetMoons] = useState(0);
  const [error, setError] = useState("");

  const queryUrl = `https://api.le-systeme-solaire.net/rest/bodies/${props.planetName}`;

  const getPlanetData = () => {
    fetch(queryUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPlanetGravity(data.gravity);
          setPlanetDensity(data.density);
          let mass = data.mass.massValue.toFixed(2);
          setPlanetMass(mass);
          let massExp = data.mass.massExponent;
          setPlanetMassExponent(massExp);
          setPlanetRadius(data.meanRadius.toFixed(2));
          let avg = (data.avgTemp - 273.15).toFixed(0);
          setPlanetTemp(avg);
          if (data.moons !== null) {
            setPlanetMoons(data.moons.length);
          } else {
            setPlanetMoons(0);
          }
        } else {
          setError("Invalid response");
          console.log(error);
        }
      });
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    getPlanetData();
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <Card style={{ width: "18rem" }} className="planet-card">
          <Button onClick={handleClick} id="planetButton">
            <img
              src={require("./LearningSpaceImages/" +
                props.planetName +
                ".jpeg")}
              id="front-image"
            />
          </Button>
          <Card.Body>
            <Card.Title>{props.planetName.toUpperCase()}</Card.Title>
            <Card.Text>{props.planetFact}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }} className="planet-card">
          <Card.Body>
            <Card.Title id="back-title">
              {props.planetName.toUpperCase()}
            </Card.Title>
            <Button onClick={() => handleClick()} id="thumb-planetButton">
              <img
                src={require("./LearningSpaceImages/" +
                  props.planetName +
                  ".jpeg")}
                id="thumb-planet"
              />
            </Button>
            <Card.Text className="back-card-text">
              <div>Gravity: {planetGravity} m/s&sup2;</div>
              <div>Density: {planetDensity} g/cm&sup3;</div>
              <div>
                Mass: {planetMass} x 10 <sup>{planetMassExponent}</sup> kg
              </div>
              <div>Radius: {planetRadius} km</div>
              <div>
                Tempreture: {planetTemp}
                <sup className="degree">o</sup>C
              </div>
              <div>Moons: {planetMoons}</div>
              <Button
                variant="primary"
                href={props.planetLink}
                id="planet-link"
              >
                Learn more about {props.planetName.toUpperCase()}
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

export function SpaceInfo() {
  const planets = [
    {
      name: "mercury",
      description: "Mercury is the smallest planet in our solar system",
      link: "https://solarsystem.nasa.gov/planets/mercury/overview/",
      planetImage: "./LearningSpaceImages/mercury.jpeg",
    },
    {
      name: "venus",
      description: "Venus is the hottest planet in our solar system",
      link: "https://solarsystem.nasa.gov/planets/venus/overview/",
      planetImage: "./LearningSpaceImages/venus.jpeg",
    },
    {
      name: "earth",
      description: "Earth is still the only planet known to host life",
      link: "https://solarsystem.nasa.gov/planets/earth/overview/",
      planetImage: "./LearningSpaceImages/earth.jpeg",
    },
    {
      name: "mars",
      description: "Mars is also known as the Red Planet",
      link: "https://solarsystem.nasa.gov/planets/mars/overview/",
      planetImage: "./LearningSpaceImages/mars.jpeg",
    },
    {
      name: "jupiter",
      description: "Jupiter is the biggest planet in our Solar System",
      link: "https://solarsystem.nasa.gov/planets/jupiter/overview/",
      planetImage: "./LearningSpaceImages/jupiter.jpeg",
    },
    {
      name: "saturn",
      description:
        "Saturn is adorned with a dazzling, complex system of icy rings",
      link: "https://solarsystem.nasa.gov/planets/saturn/overview/",
      planetImage: "./LearningSpaceImages/saturn.jpeg",
    },
    {
      name: "uranus",
      description:
        "Uranus was the first planet found with the aid of a telescope in 1781",
      link: "https://solarsystem.nasa.gov/planets/uranus/overview/",
      planetImage: "./LearningSpaceImages/uranus.jpeg",
    },
    {
      name: "neptune",
      description:
        "Neptune was the first planet located through mathematical calculations",
      link: "https://solarsystem.nasa.gov/planets/neptune/overview/",
      planetImage: "./LearningSpaceImages/neptune.jpeg",
    },
  ];

  return (
    <div className="space-container stars twinkling">
      <header>
        <h1 id="space-title">Explore Space</h1>

        <section className="space-text">
          <p>
            The planetary system we call home is located in an outer spiral arm
            of the Milky Way galaxy.
          </p>

          <p>
            Our solar system consists of our star, the Sun, and everything bound
            to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
            Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
            moons; and millions of asteroids, comets, and meteoroids.
          </p>

          <p className="hide">
            Beyond our own solar system, there are more planets than stars in
            the night sky. So far, we have discovered thousands of planetary
            systems orbiting other stars in the Milky Way, with more planets
            being found. Most of the hundreds of billions of stars in our galaxy
            are thought to have planets of their own, and the Milky Way is but
            one of perhaps 100 billion galaxies in the universe.
          </p>

          <p className="hide-second">
            While our planet is in some ways a mere speck in the vast cosmos, we
            have a lot of company out there. It seems that we live in a universe
            packed with planets – a web of countless stars accompanied by
            families of objects, perhaps some with life of their own.
          </p>

          <p>
            <a href="https://solarsystem.nasa.gov/solar-system/our-solar-system/in-depth/">
              <span className="nowrap">Read more about</span> <span className="nowrap">our Solar System</span>
            </a>
          </p>
        </section>
      </header>

      <div className="planets-container" id="planets">
        <div className="planets-row">
          {planets.map((planet, i) => (
            <PlanetCard
              key={planet.name}
              planetImage={planet.planetImage}
              planetLink={planet.link}
              planetFact={planet.description}
              planetName={planet.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

//logo
// asteroids, universe, milky way, black hole
