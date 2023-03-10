import './resets.scss';
import Navbar from './components/navbar/organisms/Navbar/Navbar';
import Carousel from './components/carousel/organisms/Carousel/Carousel';
import About from './components/about/organisms/About/About';
import Gallery from './components/gallery/organisms/Gallery/Gallery';
import Footer from './components/footer/organisms/Footer/Footer';
import data from './pageData.json';

export default function App() {
  return (
    <>
      <Navbar
        title={data.navbar.title}
        cartCount={data.navbar.cartCount}
        cartValue={data.navbar.cartValue}
        cartDropdownItems={data.navbar.cartDropdownItems}
        menuData={data.navbar.menu}
      />
      <Carousel
        slides={data.carousel.slides}
      />
      <About
        title={data.about.title}
        subtitle={data.about.subtitle}
        text={data.about.text}
        images={data.about.images}
      />
      <Gallery
        title={data.gallery.title}
        subtitle={data.gallery.subtitle}
        images={data.gallery.images}
      />
      <Footer
        header={data.footer.header}
        companyTitle={data.footer.companyTitle}
        copyrightText={data.footer.copyrightText}
        icons={data.footer.icons}
      />
    </>
  );
}
