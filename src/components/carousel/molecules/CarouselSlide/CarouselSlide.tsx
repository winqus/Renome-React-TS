import './CarouselSlide.scss';

interface CarouselSlideProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
}

export default function CarouselSlide({
  title, subtitle, imageSrc, altText,
}: CarouselSlideProps) {
  return (
    <li className="carousel__slide">
      <img className="carousel__image" src={imageSrc} alt={altText} />
      <div className="carousel__image-overlay-blue" />
      <div className="carousel__text-wrapper">
        <h1 className="carousel__title">{title}</h1>
        <h2 className="carousel__subtitle">{subtitle}</h2>
      </div>
    </li>
  );
}
