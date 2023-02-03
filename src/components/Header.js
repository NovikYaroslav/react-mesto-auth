import mestoLogo from "./../image/mesto-logo.svg";
import { Link } from "react-router-dom";

function Header({loggedIn}) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={mestoLogo}
        alt="Логотип проекта Место"
      />
      <div className="login-bar">
      {/* <p className="login-bar__user-email">{`${loggedIn ? "nen" : ""}`}</p> */}
      <Link to="/sign-in" className="login-bar__button">{loggedIn ? "Выйти" : "Войти"}</Link>
      </div>

    </header>
  );
}

export default Header;
