import Experience from "./components/Experience";
import Header from "./components/Header";
import Info from "./components/Info";
import { useState } from "react";
import images from "./data.js";
import Tabs from "./components/Tabs.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [colorTheme, setColorTheme] = useState(images.themeLight);
  const [bgcolorTheme, setBgColorTheme] = useState("App");

  const handleColorTheme = () => {
    setColorTheme((prevTheme) =>
      prevTheme === images.themeLight ? images.themeDark : images.themeLight
    );

    setBgColorTheme((prevBgColor) =>
      prevBgColor === "App" ? "App dark-theme" : "App"
    );
  };

  return (
    <div className={bgcolorTheme}>
      <Header onColorChange={handleColorTheme} colorTheme={colorTheme} />
      <Experience />
      <Info />
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
