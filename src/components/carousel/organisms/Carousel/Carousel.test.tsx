import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import { CarouselSlideData } from './Carousel.interfaces';

const exampleCarouselData: CarouselSlideData[] = [
  {
    title: 'Slide 1',
    subtitle: 'Subtitle 1',
    alt: 'Slide Alt 1',
    path: './img/slide1',
  },
  {
    title: 'Slide 2',
    subtitle: 'Subtitle 2',
    alt: 'Slide Alt 2',
    path: './img/slide2',
  },
  {
    title: 'Slide 3',
    subtitle: 'Subtitle 3',
    alt: 'Slide Alt 3',
    path: './img/slide3',
  },
];

test('All 3 slides are rendered in correct order.', () => {
  render(<Carousel slides={exampleCarouselData} />);
  const imageElements = screen.getAllByRole('img');
  const titleElements = screen.getAllByRole('heading', { level: 1 });
  const subtitleElement = screen.getAllByRole('heading', { level: 2 });

  expect(imageElements.length).toBe(3);
  expect(titleElements.length).toBe(3);
  expect(subtitleElement.length).toBe(3);
  for (let i = 0; i < 3; i += 1) {
    expect(imageElements[i]).toBeVisible();
    expect(titleElements[i]).toBeVisible();
    expect(subtitleElement[i]).toBeVisible();
  }
  expect(titleElements[0]).toHaveTextContent(exampleCarouselData[2].title);
  expect(titleElements[1]).toHaveTextContent(exampleCarouselData[0].title);
  expect(titleElements[2]).toHaveTextContent(exampleCarouselData[1].title);
});

test('Single input slide renders.', () => {
  const inputSlides: CarouselSlideData[] = [
    exampleCarouselData[0],
  ];
  render(<Carousel slides={inputSlides} />);
  const imageElements = screen.getAllByRole('img');

  imageElements.forEach((image) => {
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', inputSlides[0].path);
  });
});
