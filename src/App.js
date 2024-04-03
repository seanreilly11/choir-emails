import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
