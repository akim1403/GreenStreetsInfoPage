import './App.css';
import Header from './components/header';
import AboutUsImage from './components/aboutUsImage';
import AboutUsInfo from './components/aboutUsInfo';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="ContentWrapper">
        <AboutUsImage />
      </div>
      <div>
        <AboutUsInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;