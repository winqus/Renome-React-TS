import { render, screen } from '@testing-library/react';
import CarouselSlide from './CarouselSlide';

test('Passed values are rendered.', () => {
  const inputTitle = 'My slide title';
  const inputSubtitle = 'My slide subtitle';
  const inputImageSrc = './myimg1';
  const inputAltText = 'My slide alt text';

  render(<CarouselSlide
    title={inputTitle}
    subtitle={inputSubtitle}
    imageSrc={inputImageSrc}
    altText={inputAltText}
  />);
  const imageElement = screen.getByRole('img');
  const titleElement = screen.getByRole('heading', { level: 1 });
  const subtitleElement = screen.getByRole('heading', { level: 2 });

  expect(imageElement).toBeVisible();
  expect(imageElement).toHaveAttribute('src', inputImageSrc);
  expect(imageElement).toHaveAttribute('alt', inputAltText);
  expect(titleElement).toBeVisible();
  expect(titleElement).toHaveTextContent(inputTitle);
  expect(subtitleElement).toBeVisible();
  expect(subtitleElement).toHaveTextContent(inputSubtitle);
});
