import { render, screen } from '@testing-library/react';
import About from './About';
import { AboutImage } from './About.interfaces';

const exampleImages: AboutImage[] = [
  {
    path: './img1',
    alt: 'img1 alt text',
    isOnRightSide: false,
    isOnTop: false,
  },
  {
    path: './img2',
    alt: 'img2 alt text',
    isOnRightSide: true,
    isOnTop: true,
  },
];

test('On render shows passed values.', () => {
  render(
    <About
      title="My title"
      subtitle="My subtitle"
      text="Some very amazing awe-inspiring text"
      images={exampleImages}
    />,
  );
  const images = screen.getAllByRole('img');
  const titleElement = screen.getByRole('heading', { level: 1 });
  const subtitleElement = screen.getByRole('heading', { level: 2 });
  const paragraphElement = screen.getByText('Some very amazing awe-inspiring text');

  expect(images.length).toBe(2);
  images.forEach((image, index) => {
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', exampleImages[index].path);
    expect(image).toHaveAttribute('alt', exampleImages[index].alt);
  });
  expect(titleElement).toBeVisible();
  expect(titleElement).toHaveTextContent('My title');
  expect(subtitleElement).toBeVisible();
  expect(subtitleElement).toHaveTextContent('My subtitle');
  expect(paragraphElement).toBeVisible();
});
