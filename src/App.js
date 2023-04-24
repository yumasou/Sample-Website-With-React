import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Service from "./components/pages/Service";
import Products from "./components/pages/Products";
import Weather from "./components/weathering/Weather";
import Demo from "./components/pages/Demo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/products" element={<Products/>} ></Route>
          <Route path="/weather" element={<Weather/>}></Route>
          <Route path="/demo" element={<Demo/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
