import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('On render shows input values and elements have necessary classes.', () => {
  const inputHeader = 'Footer header';
  const inputCompanyTitle = 'Footer company title';
  const inputCopyrightText = 'Footer cr text';
  const inputIcons = [
    {
      href: '#icon1',
      className: 'icon-1',
    },
    {
      href: '#icon2',
      className: 'icon-2',
    },
  ];

  const { container } = render(
    <Footer
      header={inputHeader}
      companyTitle={inputCompanyTitle}
      copyrightText={inputCopyrightText}
      icons={inputIcons}
    />,
  );
  const headerElement = screen.getByText(inputHeader);
  const companyTitleElement = screen.getByText(inputCompanyTitle);
  const copyrightTextElement = screen.getByText(inputCopyrightText);
  const iconElements = container.getElementsByClassName('footer__icon');

  expect(headerElement).toBeVisible();
  expect(headerElement).toHaveClass('footer__header');
  expect(companyTitleElement).toBeVisible();
  expect(companyTitleElement).toHaveClass('footer__company-title');
  expect(copyrightTextElement).toBeVisible();
  expect(copyrightTextElement).toHaveClass('footer__copyright-text');
  expect(iconElements.length).toBe(2);
  for (let i = 0; i < iconElements.length; i += 1) {
    expect(iconElements[i]).toHaveClass('footer__icon');
    expect(iconElements[i]).toHaveAttribute('href', inputIcons[i].href);
    expect(iconElements[i].firstChild).toHaveClass(inputIcons[i].className);
  }
});
