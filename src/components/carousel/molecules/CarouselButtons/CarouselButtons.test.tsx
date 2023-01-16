import { fireEvent, render, screen } from '@testing-library/react';
import CarouselButtons from './CarouselButtons';

test('On render button icons visible.', () => {
  render(<CarouselButtons
    onClickLeft={() => {}}
    onClickRight={() => {}}
  />);

  const leftBtnElement = screen.getByLabelText('Carousel Left');
  const leftBtnIconElement = leftBtnElement.getElementsByClassName('icon-arrow-left')[0];
  const rightBtnElement = screen.getByLabelText('Carousel Right');
  const rightBtnIconElement = rightBtnElement.getElementsByClassName('icon-arrow-right')[0];

  expect(leftBtnElement).toBeVisible();
  expect(leftBtnElement).toHaveClass('carousel__btn');
  expect(leftBtnElement).toContainHTML(leftBtnIconElement.innerHTML);
  expect(rightBtnElement).toBeVisible();
  expect(rightBtnElement).toHaveClass('carousel__btn');
  expect(rightBtnElement).toContainHTML(rightBtnIconElement.innerHTML);
});

test('Buttons are clickable.', () => {
  const inputOnClickLeft = jest.fn();
  const inputOnClickRight = jest.fn();

  render(<CarouselButtons
    onClickLeft={inputOnClickLeft}
    onClickRight={inputOnClickRight}
  />);
  const leftBtnElement = screen.getByLabelText('Carousel Left');
  const leftBtnIconElement = leftBtnElement.getElementsByClassName('icon-arrow-left')[0];
  const rightBtnElement = screen.getByLabelText('Carousel Right');
  const rightBtnIconElement = rightBtnElement.getElementsByClassName('icon-arrow-right')[0];
  fireEvent.click(leftBtnElement);
  fireEvent.click(leftBtnIconElement);
  fireEvent.click(rightBtnElement);
  fireEvent.click(rightBtnIconElement);

  expect(inputOnClickLeft).toBeCalledTimes(2);
  expect(inputOnClickRight).toBeCalledTimes(2);
});
