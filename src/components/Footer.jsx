const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Miles Leung {currentYear}</p>
      <br />
      <br />
    </footer>
  );
};
export default Footer;
