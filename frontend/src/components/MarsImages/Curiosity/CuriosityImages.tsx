import { ImageViewer } from "../ImageViewer";

export function CuriosityImages() {
  return (
    <div>
      <ImageViewer minDate="2012-08-08" maxDate={new Date().toISOString()} roverName="Curiosity" />
    </div>
  );
}