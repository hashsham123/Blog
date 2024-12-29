import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar.js";
import "./App.css";
import "animate.css";
import { Link } from "react-scroll";
import Contacts from "./components/contacts/Contacts";
import EmailContact from "./components/contacts/EmailContact.js";

function App() {
  return (
    <div className="main_app">
      <Navbar />
      <div className="button_container_app">
        <Link to="top" smooth={true} duration={500} offset={-50}>
          <img
            className="animate__animated animate__bounce animate__infinite"
            src="right.png"
            alt="icon"
          />
        </Link>
      </div>
      <Home />
      <EmailContact />
      <Contacts />
    </div>
  );
}

export default App;
