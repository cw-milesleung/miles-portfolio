import images from "../data";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrapper project-wrapper">
        <a href="https://cw-milesleung.github.io/rot/">
          <img src={images.project1} alt="ROT" />
        </a>
      </div>
      <div className="wrapper project-wrapper">
        <a href="https://github.com/">
          <img src={images.project2} alt="Project 2" />
        </a>
      </div>
      <div className="wrapper project-wrapper">
        <a href="https://github.com/">
          <img src={images.project3} alt="Project 3" />
        </a>
      </div>
      <div className="wrapper project-wrapper">
        <a href="https://github.com/">
          <img src={images.project4} alt="Project 4" />
        </a>
      </div>
    </section>
  );
};
export default Portfolio;
