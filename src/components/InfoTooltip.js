import success from "./../image/success.svg";
import fail from "./../image/fail.svg";

export default function InfoTooltip({ isOpen, onClose, isRegistrationSucced }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Кнопка закрытия модального окна"
          onClick={onClose}
        ></button>

        <img
          className="popup__status-sign"
          src={isRegistrationSucced ? success : fail}
        ></img>

        <h2 className="popup__status-title">
          {`${
            isRegistrationSucced
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте еще раз."
          }`}
        </h2>
      </div>
    </div>
  );
}
