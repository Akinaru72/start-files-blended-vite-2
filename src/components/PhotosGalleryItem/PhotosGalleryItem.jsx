import css from './PhotosGalleryItem.module.css';

export default function PhotosGalleryItem({ src, alt, avg_color }) {
  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: { avg_color }, borderColor: { avg_color } }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
}
