import './Carousel.scss';
import { useState, useRef, useEffect } from 'react';
import { CarouselSlideData } from './Carousel.interfaces';
import CarouselSlide from '../../molecules/CarouselSlide/CarouselSlide';
import CarouselButtons from '../../molecules/CarouselButtons/CarouselButtons';

interface CarouselProps {
  slides: CarouselSlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const getNonNegativeArrayIndex = (index: number, size: number) => ((index % size) + size) % size;

  const [slideIndex, setSlideIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [isSlidable, setIsSlidable] = useState(true);
  const [trackTranslatation, setTrackTranslatation] = useState('0%');
  const [renderedSlides, setRenderedSlides] = useState<CarouselSlideData[]>(
    [-1, 0, 1].map((pos) => slides[getNonNegativeArrayIndex(pos, slides.length)]),
  );
  const trackRef = useRef<HTMLUListElement>(null);

  const handleSlideChange = (newIndex: number) => {
    if (!isSlidable || slides.length < 2) {
      return;
    }
    setIsSlidable(false);
    setAnimated(true);
    setTrackTranslatation(`${-100 * (newIndex - slideIndex)}%`);
    setSlideIndex(getNonNegativeArrayIndex(newIndex, slides.length));
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setRenderedSlides([
        slides[getNonNegativeArrayIndex(slideIndex - 1, slides.length)],
        slides[getNonNegativeArrayIndex(slideIndex, slides.length)],
        slides[getNonNegativeArrayIndex(slideIndex + 1, slides.length)],
      ]);
      setAnimated(false);
      setTrackTranslatation('0%');
      setIsSlidable(true);
    };

    trackRef.current?.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      trackRef.current?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [trackRef, slideIndex]);

  return (
    <section className="carousel">
      <ul
        ref={trackRef}
        className={`carousel__slide-track ${animated ? 'carousel__slide-track--sliding' : ''}`}
        style={{ transform: `translateX(${trackTranslatation})` }}
      >
        {renderedSlides.map((slide, index) => (
          <CarouselSlide
            key={index}
            title={slide.title}
            subtitle={slide.subtitle}
            altText={slide.alt}
            imageSrc={slide.path}
          />
        ))}
      </ul>

      <CarouselButtons
        onClickLeft={() => handleSlideChange(slideIndex - 1)}
        onClickRight={() => handleSlideChange(slideIndex + 1)}
      />
    </section>
  );
}
