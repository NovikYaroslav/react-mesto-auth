import mestoLogo from "./../image/mesto-logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={mestoLogo}
        alt="Логотип проекта Место"
      />
    </header>
  );
}

export default Header;
