import images from "../data.js";

const Header = ({ onColorChange, colorTheme }) => {
  const imgColor = {
    git:
      colorTheme !== images.themeLight ? images.githubDark : images.githubLight,
    linkedin:
      colorTheme !== images.themeLight
        ? images.linkedinDark
        : images.linkedinLight,
    email:
      colorTheme !== images.themeLight ? images.emailDark : images.emailLight,
  };

  return (
    <div>
      <section className="hero">
        <img
          className="theme-btn"
          src={colorTheme}
          alt="theme icon"
          onClick={onColorChange}
        />
        <div className="hero-pic">
          <div className="inner-circle"></div>
          <img src={images.milesLeung} alt="Miles Leung" />
        </div>
        <div className="hero-info">
          <h1>Miles Leung</h1>
          <h2>Frontend Developer</h2>
          <div className="logo-container">
            <a href="https://github.com/cw-milesleung">
              <img src={imgColor.git} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/milesleung/">
              <img src={imgColor.linkedin} alt="linkedin logo" />
            </a>
            <a href="mailto:milesleung0724@gmail.com">
              <img src={imgColor.email} alt="email logo" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
