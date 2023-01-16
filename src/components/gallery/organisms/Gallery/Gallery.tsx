import './Gallery.scss';
import { GalleryImage } from './Gallery.interfaces';

interface GalleryProps {
  title: string;
  subtitle: string;
  images: GalleryImage[],
}

export default function Gallery({ title, subtitle, images }: GalleryProps) {
  return (
    <section className="gallery">
      <h1 className="gallery__title">{title}</h1>
      <h2 className="gallery__subtitle">{subtitle}</h2>
      <div className="gallery__image-container">
        {images.map((image, index) => (
          <img key={index} src={image.path} alt={image.alt} className="gallery__image" loading="lazy" />
        ))}
      </div>
    </section>
  );
}
