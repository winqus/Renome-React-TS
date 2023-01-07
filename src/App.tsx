import './resets.scss';
import data from './pageData.json';
import About from './components/about/organisms/About/About';

export default function App() {
  return (
    <About
      title={data.about.title}
      subtitle={data.about.subtitle}
      text={data.about.text}
      images={data.about.images}
    />
  );
}
