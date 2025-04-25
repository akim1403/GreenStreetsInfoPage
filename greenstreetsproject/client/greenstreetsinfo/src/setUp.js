import './App.css';
import Header from './components/header';
import SetUpImage from './components/set-upImage';
import SetUpInfo from './components/set-upInfo';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="ContentWrapper">
        <SetUpImage />
      </div>
      <div className= "HomePageInfo">
        <SetUpInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;