import iconSun from "../../assets/icon-sun.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header flex justify-between">
      <h1 className="fs-400">devfinder</h1>
      <button className="header__btn" aria-label="Toggle Theme">
        <img src={iconSun} alt="" />
      </button>
    </header>
  );
}

export default Header;