import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./ImageViewer.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//To improve:
//works on all screens

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function ImageViewer() {
  const minDate = "2021-02-18";
  const [urls, setUrls] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(minDate);
  const [message, setMessage] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${selectedDate}&api_key=IgINDcTiL7hEVwnUDaK28gqY58yA3XIfQZfNhH8l`
    )
      .then((response) => response.json())
      .then((result) => {
        const photos = result.photos;
        if (photos.length === 0) {
          setUrls([]);
          setMessage(
            "There were no photographs taken on this date. Please choose another date"
          );
        } else {
          shuffleArray(photos);
          setUrls(photos.slice(0, 20));
          setMessage("");
          setCurrentSlide(0);
        }
      })
      .catch((error) => console.log(error));
  }, [selectedDate]);

  const handleChange = (event: {
    target: { value: string | number | Date };
  }) => {
    const new_date = new Date(event.target.value).toISOString().slice(0, 10);
    setSelectedDate(new_date);
  };

  if (!urls) {
    return (
      <div className="image-viewer">
        <h1 className="hero--header">Mars Perseverance Rover Images</h1>
        <div className="hero--date-text-container">
          <h3 className="hero--text">
            Choose a date to see images taken on this day
          </h3>
          <input
            type="date"
            onChange={handleChange}
            min={minDate}
            value={selectedDate}
          />
        </div>
        <h3 className="hero--no-images-text">Images are loading ...</h3>
      </div>
    );
  } else if (message !== "") {
    return (
      <div className="image-viewer">
        <div className="hero--header">Mars Perseverance Rover Images</div>
        <div className="hero--date-text-container">
          <h3 className="hero--text">
            Choose a date to see images taken on this day
          </h3>
          <input
            type="date"
            onChange={handleChange}
            min={minDate}
            value={selectedDate}
          />
        </div>
        <h3 className="hero--no-images-text">{message}</h3>
        <img
          className="hero--cropped-mars-image"
          src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
        />
      </div>
    );
  } else {
    return (
      <div className="image-viewer">
        <div className="hero--header">Mars Perseverance Rover Images</div>
        <div className="hero--date-text-container">
          <h3 className="hero--text">
            Choose a date to see images taken on this day
          </h3>
          <input type="date" min={minDate} onChange={handleChange} value={selectedDate} />
        </div>
        <Carousel
          infiniteLoop={true}
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          
        >
          {urls.map((url: any) => {
            return (
              <div>
                <img src={url.img_src} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
