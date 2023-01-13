import './CarouselButtons.scss';
import { MouseEventHandler } from 'react';

interface CarouselButtonsProps {
  onClickLeft: MouseEventHandler<HTMLButtonElement>;
  onClickRight: MouseEventHandler<HTMLButtonElement>;
}

export default function CarouselButtons({
  onClickLeft, onClickRight,
}: CarouselButtonsProps) {
  return (
    <div className="carousel__buttons">
      <button type="button" onClick={onClickLeft} className="carousel__btn" aria-label="Carousel Left">
        <i className="icon-arrow-left" />
      </button>
      <button type="button" onClick={onClickRight} className="carousel__btn" aria-label="Carousel Right">
        <i className="icon-arrow-right" />
      </button>
    </div>
  );
}
