import './App.css';
import Header from './components/header';
import HomePageImage from './components/homepageImage';
import HomePageInfo from './components/homepageInfo';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div className = "NavBarDiv">
        <Header />
      </div>
      <div className="ContentWrapper">
        <HomePageImage />
      </div>
      <div className= "HomePageInfo">
        <HomePageInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
