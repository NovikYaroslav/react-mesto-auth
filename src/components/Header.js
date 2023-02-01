import mestoLogo from "./../image/mesto-logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={mestoLogo}
        alt="Логотип проекта Место"
      />
      <div className="login-bar">
      <p className="login-bar__user-email"></p>
      <button className="login-bar__button">Войти</button>
      </div>

    </header>
  );
}

export default Header;
