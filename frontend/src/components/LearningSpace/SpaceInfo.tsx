import "./SpaceInfo.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

let planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

let facts = [
  "Mercury is the smallest planet in our solar system",
  "Venus is the hottest planet in our solar system",
  "Earth is still the only planet known to host life",
  "Mars is also known as the Red Planet",
  "Jupiter is the biggest planet in our Solar System",
  "Saturn is adorned with a dazzling, complex system of icy rings",
  "Uranus was the first planet found with the aid of a telescope in 1781",
  "Neptune was the first planet located through mathematical calculations",
];

let links = [
  "https://solarsystem.nasa.gov/planets/mercury/overview/",
  "https://solarsystem.nasa.gov/planets/venus/overview/",
  "https://solarsystem.nasa.gov/planets/earth/overview/",
  "https://solarsystem.nasa.gov/planets/mars/overview/",
  "https://solarsystem.nasa.gov/planets/jupiter/overview/",
  "https://solarsystem.nasa.gov/planets/saturn/overview/",
  "https://solarsystem.nasa.gov/planets/uranus/overview/",
  "https://solarsystem.nasa.gov/planets/neptune/overview/",
];

// return (
//   <Card style={{ width: "18rem" }}>
//     <Button onClick={flip} id="planetButton"><Card.Img variant="top" src={props.image} /></Button>
//     <Card.Body>
//       <Card.Title>{props.name.toUpperCase()}</Card.Title>
//       <Card.Text>{props.fact}</Card.Text>
//       <Button variant="primary" href={props.link} id="planet-link">
//         Learn more about {props.name.toUpperCase()}
//       </Button>
//     </Card.Body>
//   </Card>
// );

export function SpaceInfo() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="space-info-body stars twinkling">
      <h1 id="facts-title">Interesting facts about Space</h1>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          <Card style={{ width: "18rem" }}>
            <Button onClick={handleClick} id="planetButton">
              <Card.Img variant="top" src={require(`./LearningSpaceImages/${planets[3]}.jpeg`)} />
            </Button>
            <Card.Body>
              <Card.Title>{planets[0].toUpperCase()}</Card.Title>
              <Card.Text>{facts[0]}</Card.Text>
              <Button variant="primary" href={links[0]} id="planet-link">
                Learn more about {planets[0].toUpperCase()}
              </Button>
            </Card.Body>
          </Card>

          {/* <button onClick={handleClick}><img src="./LearningSpaceImages/mercury.jpeg" /></button>
          <Card.Body>This is the front of the card.</Card.Body>
          </Card> */}
        </div>

        <div>
          <Card style={{ width: "18rem", color: "white" }}>
            <Card.Body>This is the back of the card.</Card.Body>
          </Card>
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </div>
  );
}

{
  /* // {/* //<div className="planets-container" id="planets">
// //         <div className="planets-row">
// //           <div id="mercury">
// //             <PlanetCard
// //               name={planets[0]}
// //               fact={facts[0]}
// //               link={links[0]}
// //               image={require(`./LearningSpaceImages/${planets[0]}.jpeg`) }
// //             />
// //           </div>

// //           <div id="venus">
// //             <PlanetCard
// //               name={planets[1]}
// //               fact={facts[1]}
// //               link={links[1]}
// //               image={require(`./LearningSpaceImages/${planets[1]}.jpeg`)}
// //             />
// //           </div>

// //           <div id="earth">
// //             <PlanetCard
// //               name={planets[2]}
// //               fact={facts[2]}
// //               link={links[2]}
// //               image={require(`./LearningSpaceImages/${planets[2]}.jpeg`)}
// //             />
// //           </div>

// //           <div id="mars">
// //             <PlanetCard
// //               name={planets[3]}
// //               fact={facts[3]}
// //               link={links[3]}
// //               image={require(`./LearningSpaceImages/${planets[3]}.jpeg`)}
// //             />
// //           </div>

// //           <div id="mercury">
// //             <PlanetCard
// //               name={planets[4]}
// //               fact={facts[4]}
// //               link={links[4]}
// //               image={require(`./LearningSpaceImages/${planets[4]}.jpeg`)}
// //             />
// //           </div>

// //           <div id="mercury">
// //             <PlanetCard
// //               name={planets[5]}
// //               fact={facts[5]}
// //               link={links[5]}
// //               image={require(`./LearningSpaceImages/${planets[5]}.jpeg`)}
// //             />
// //           </div>

// //           <div id="mercury">
// //             <PlanetCard
// //               name={planets[6]}
// //               fact={facts[6]}
// //               link={links[6]}
// //               image={require(`./LearningSpaceImages/${planets[6]}.jpeg`)}
// //             />
// //           </div>

// //           <div id="mercury">
// //             <PlanetCard
// //               name={planets[7]}
// //               fact={facts[7]}
// //               link={links[7]}
// //               image={require(`./LearningSpaceImages/${planets[7]}.jpeg`)}
// //             />
// //           </div>

//        //</div> *}
       //</div> 
     //</div>
   );
 } */
}
