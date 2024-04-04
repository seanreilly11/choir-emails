import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <Features />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
