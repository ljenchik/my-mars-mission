import React, { useEffect, useState } from "react";
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

export function ImageViewer() {
  const [urls, setUrls] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("2021-02-18");
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

  if (selectedDate !="2021-02-18" && urls.length === 0) {
    return (
      <>
        <div className="image-viewer">
          <div className="header">Mars Perseverance Rover Images</div>
          <h3 className="sub-header">
            Choose a date to see images taken on this day
          </h3>
        </div>
        <DatePicker
          onChange={(val: any) => {
            setSelectedDate(val.toISOString().split("T")[0]);
          }}
          value={new Date(selectedDate)}
          minDate={new Date("2021-02-18")}
        />
        <h3 className="sub-header" >
          There were no photographs taken on this date. Please choose another
          date
        </h3>
        <img className="crop" src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"/>
      </>
    );
  } else {
    return (
      <>
        <div className="image-viewer">
          <div className="header">Mars Perseverance Rover Images</div>
          <h3 className="sub-header">
            Choose a date to see images taken on this day
          </h3>
        </div>
        <DatePicker
          onChange={(val: any) => {
            setSelectedDate(val.toISOString().split("T")[0]);
          }}
          value={new Date(selectedDate)}
          minDate={new Date("2021-02-18")}
        />
        <Carousel>
          {urls.map((url: any) => {
            return (
              <div className="same-size-images">
                <img src={url.img_src} />
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}
