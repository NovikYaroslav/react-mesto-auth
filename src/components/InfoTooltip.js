import success from "./../image/success.svg";
import fail from "./../image/fail.svg";

export default function InfoTooltip({ isOpen, onClose, isRegistrationSucced }) {
  console.log(isRegistrationSucced);
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Кнопка закрытия модального окна"
          onClick={onClose}
        ></button>
        {/* знак меняется в зависимости от стейта регистрации */}
        <img
          className="popup__status-sign"
          // src={`${isRegistrationSucced ? {success} : {fail}}`}
          src={isRegistrationSucced ? success : fail}
          // src={`${isRegistrationSucced ? "./../image/success.svg" : "./../image/fail.svg"}`}
          // src={"./../image/fail.svg"}
         
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
