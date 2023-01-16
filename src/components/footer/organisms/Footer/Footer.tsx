import './Footer.scss';
import { FooterIcon } from './Footer.interfaces';

interface FooterProps {
  header: string;
  companyTitle: string;
  copyrightText: string;
  icons: FooterIcon[];
}

export default function Footer({
  header, companyTitle, copyrightText, icons,
}: FooterProps) {
  return (
    <footer className="footer">
      <h3 className="footer__header">{header}</h3>
      <div className="footer__icons">
        {icons.map((icon, index) => (
          <a key={index} href={icon.href} className="footer__icon">
            <i className={icon.className} />
          </a>
        ))}
      </div>
      <h1 className="footer__company-title">{companyTitle}</h1>
      <h2 className="footer__copyright-text">{copyrightText}</h2>
    </footer>
  );
}
