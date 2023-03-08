import { ImageViewer } from "../ImageViewer";
import "./OpportunityImages.scss";

export function OpportunityImages() {
  return (
    <div>
      <ImageViewer minDate="2004-02-24" roverName="Spirit" />
      <ImageViewer minDate="2004-08-25" roverName="Oppotunity" />
    </div>
  );
}
