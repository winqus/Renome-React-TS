import './About.scss';
import { AboutImage } from './About.interfaces';

interface AboutProps {
  title: string;
  subtitle: string;
  text: string;
  images: AboutImage[];
}

export default function About({
  title, subtitle, text, images,
} : AboutProps) {
  return (
    <section className="about">
      <div className="about__image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.path}
            alt={image.alt}
            className={`about__image ${image.isOnRightSide ? 'about__image--right' : 'about__image--left'} ${image.isOnTop ? 'about__image--on-top' : ''}`}
            loading="lazy"
          />
        ))}
      </div>
      <h1 className="about__title">{title}</h1>
      <h2 className="about__subtitle">{subtitle}</h2>
      <p className="about__text">
        {text}
      </p>
    </section>
  );
}
