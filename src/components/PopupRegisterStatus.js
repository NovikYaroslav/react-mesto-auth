import success from "./../image/success.svg";

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
        <img className="register" src={success}></img>
        <h2
          className="popup__title" 
        >
        Вы успешно зарегистрировались!
        </h2>
      </div>
    </div>
    )
}