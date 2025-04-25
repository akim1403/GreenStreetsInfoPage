import "./App.css";
import Header from "./components/header";
import ContactUsIamge from "./components/contactUsIamge";
import ContactUsInfo from "./components/contactUsInfo";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="ContentWrapper">
        <ContactUsIamge />
      </div>
      <div className="contactUsContainer">
        <ContactUsInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
