import success from "./../image/success.svg";
import fail from "./../image/fail.svg"

export default function PopupRegisterStatus() {
    return (
        <div className="popup popup_opened">
      <div className="popup__container">
        <button
          className="popup__close" 
          type="button"
          aria-label="Кнопка закрытия модального окна"
        ></button>
        {/* <div
          className="popup__form"
        //   name={`user-${name}`}
        //   onSubmit={onSubmit}
          noValidate
        >
       
        </div> */}
        {/* знак меняется в зависимости от стейта регистрации */}
        <img className="register__status-sign" src={fail}></img>
        {/* надпись меняется в зависимости от стейта регистрации */}
        <h2
          className="register__status-title" 
        >
        Вы успешно зарегистрировались!
        </h2>
      </div>
    </div>
    )
}