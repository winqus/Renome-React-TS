import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';
import { GalleryImage } from './Gallery.interfaces';

const exampleImagesData: GalleryImage[] = [
  {
    path: './img1',
    alt: 'img1 alternative',
  },
  {
    path: './img2',
    alt: 'img2 alternative',
  },
  {
    path: './img3',
    alt: 'img3 alternative',
  },
  {
    path: './img4',
    alt: 'img4 alternative',
  },
];

test('On render shows input values and elements have necessary classes.', () => {
  const inputTitle = 'My gallery title';
  const inputSubtitle = 'My gallery subtitle';
  const inputImages = exampleImagesData;

  render(
    <Gallery
      title={inputTitle}
      subtitle={inputSubtitle}
      images={inputImages}
    />,
  );
  const titleElement = screen.getByText(inputTitle);
  const subtitleElement = screen.getByText(inputSubtitle);
  const imageElements = screen.getAllByRole('img');

  expect(titleElement).toBeVisible();
  expect(titleElement).toHaveClass('gallery__title');
  expect(subtitleElement).toBeVisible();
  expect(subtitleElement).toHaveClass('gallery__subtitle');
  expect(imageElements.length).toBe(4);
  imageElements.forEach((image, index) => {
    expect(image).toHaveAttribute('src', inputImages[index].path);
    expect(image).toHaveAttribute('alt', inputImages[index].alt);
    expect(image).toHaveClass('gallery__image');
  });
});
