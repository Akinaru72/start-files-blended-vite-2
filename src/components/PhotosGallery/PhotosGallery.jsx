import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

export default function PhotosGallery({ images }) {
  return (
    <Grid>
      {images.map(({ id, src, alt, avg_color }) => (
        <GridItem key={id}>
          <PhotosGalleryItem src={src} alt={alt} avg_color={avg_color} />
        </GridItem>
      ))}
    </Grid>
  );
}
