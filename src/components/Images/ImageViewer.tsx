import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./ImageViewer.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DatePicker from "react-date-picker";

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//To do: 
//thumbs frames only wjen clicked; 
//images start from the first;
//work on all screens

export function ImageViewer() {
  const [urls, setUrls] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("2021-02-18");

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${selectedDate}&api_key=IgINDcTiL7hEVwnUDaK28gqY58yA3XIfQZfNhH8l`
    )
      .then((response) => response.json())
      .then((result) => {
        const photos = result.photos;
        shuffleArray(photos);
        setUrls(photos.slice(0, 20));
      })
      .catch((error) => console.log(error));
  }, [selectedDate]);

  if (urls.length === 0) {
    return (
      <div className="image-viewer">
        <div className="hero--header">Mars Perseverance Rover Images</div>
        <div className="hero--pick-date">
          <h3 className="hero--text">
            Choose a date to see images taken on this day
          </h3>
          <DatePicker
            className="hero--date"
            onChange={(val: any) => {
              setSelectedDate(val.toISOString().split("T")[0]);
            }}
            value={new Date(selectedDate)}
            minDate={new Date("2021-02-18")}
          />
        </div>
        <h3 className="no-images-text">
          <p>There were no photographs taken on this date.</p>
          <p>Please choose another date</p>
        </h3>
        <img
          className="cropped-mars-image"
          src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
        />
      </div>
    );
  } else {
    return (
      <div className="image-viewer">
        <div className="hero--header">Mars Perseverance Rover Images</div>
        <div className="hero--pick-date">
          <h3 className="hero--text">
            Choose a date to see images taken on this day
          </h3>
          <DatePicker
            className="hero--date"
            onChange={(val: any) => {
              setSelectedDate(val.toISOString().split("T")[0]);
            }}
            value={new Date(selectedDate)}
            minDate={new Date("2021-02-18")}
          />
        </div>

        <div>
          <Carousel infiniteLoop={true}>
            {urls.map((url: any) => {
              return (
                <div>
                  <img src={url.img_src} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
