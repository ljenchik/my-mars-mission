import "./ImageThumbnail.scss";

interface ImageThumbnailProps {
  urls: string[];
  selectedImage: string | undefined;
  onClickImage: (arg0: string) => void;
}

export function ImageThumbnail(props: ImageThumbnailProps) {
  const urls = props.urls;
  const selected = props.selectedImage;

  return (
    <div className="thumb-container">
      {urls.map((url: string) => {
        return (
          <img
            className={`thumb-sizes ${url === selected ? "selected" : ""} `}
            src={url}
            onClick={() => props.onClickImage(url)}
          />
        );
      })}
    </div>
  );
}
