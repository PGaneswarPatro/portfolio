import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2>Ganeswar Patro</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="btn"
        onClick={() => {
          window.open("https://drive.google.com/file/d/1OfBiO_WHfeqCgabUO1O6Bo-Ka_1hSYFF/view?usp=sharing", "_blank");
        }}
      >
        Resume
      </button>
    </nav>
  );
}

export default Navbar;