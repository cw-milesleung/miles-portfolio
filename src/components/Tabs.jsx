import { useState } from "react";
import TabButton from "./TabButton";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Tabs = () => {
  console.log("Tab render...");
  const [selectedTopic, setSelectTopic] = useState("portfolio");

  const handleSelect = (selectedBtn) => {
    setSelectTopic(selectedBtn);
  };

  return (
    <div className="tabs">
      <section className="portfolio-skills">
        <div className="btn-bg">
          <TabButton
            id="portfolio-btn"
            onClick={() => handleSelect("portfolio")}
            isSelected={selectedTopic === "portfolio"}
          >
            Portfolio
          </TabButton>
          <TabButton
            id="skills-btn"
            onClick={() => handleSelect("skills")}
            isSelected={selectedTopic === "skills"}
          >
            Skills
          </TabButton>
        </div>
      </section>
      {selectedTopic === "portfolio" ? <Portfolio /> : <Skills />}
    </div>
  );
};
export default Tabs;
