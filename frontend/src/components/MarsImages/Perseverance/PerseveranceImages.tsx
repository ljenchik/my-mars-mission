import { ImageViewer } from "../ImageViewer";

export function PerseveranceImages() {
  return (
    <div>
      <ImageViewer minDate="2021-02-18" maxDate={new Date().toISOString()} roverName="Perseverance" />
    </div>
  );
}