import './resets.scss';
import Footer from './components/footer/organisms/Footer/Footer';
import data from './pageData.json';

function App() {
  return (
    <Footer
      header={data.footer.header}
      companyTitle={data.footer.companyTitle}
      copyrightText={data.footer.copyrightText}
      icons={data.footer.icons}
    />
  );
}

export default App;
