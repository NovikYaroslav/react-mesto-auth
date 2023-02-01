import success from "./../image/success.svg";
import fail from "./../image/fail.svg"

export default function InfoTooltip({ isOpen, onClose }) {
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
        <img className="popup__status-sign" src={fail}></img>
        {/* надпись меняется в зависимости от стейта регистрации */}
        <h2
          className="popup__status-title" 
        >
        Вы успешно зарегистрировались!
        </h2>
      </div>
    </div>
    )
}