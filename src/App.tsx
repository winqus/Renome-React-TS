import './resets.scss';
import Gallery from './components/gallery/organisms/Gallery/Gallery';
import data from './pageData.json';

function App() {
  return (
    <Gallery
      title={data.gallery.title}
      subtitle={data.gallery.subtitle}
      images={data.gallery.images}
    />
  );
}

export default App;
