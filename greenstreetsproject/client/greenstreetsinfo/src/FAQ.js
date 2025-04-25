import "./App.css";
import Header from "./components/header";
import FAQImage from "./components/faqImage";
import FaqInfo from "./components/faqInfo";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="ContentWrapper">
        <FAQImage />
      </div>
      <div className="HomePageInfo">
        <FaqInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
