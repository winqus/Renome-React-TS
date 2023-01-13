import './CarouselSlide.scss';

interface CarouselSlideProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  imageRef?: React.RefObject<HTMLImageElement>;
}

export default function CarouselSlide({
  title, subtitle, imageSrc, altText, imageRef,
}: CarouselSlideProps) {
  return (
    <li className="carousel__slide">
      <img ref={imageRef as React.LegacyRef<HTMLImageElement>} className="carousel__image" src={imageSrc} alt={altText} />
      <div className="carousel__image-overlay-blue" />
      <div className="carousel__text-wrapper">
        <h1 className="carousel__title">{title}</h1>
        <h1 className="carousel__subtitle">{subtitle}</h1>
      </div>
    </li>
  );
}
