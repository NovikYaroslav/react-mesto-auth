function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  buttonText,
  children,
}) {
  return (
    <div className={`popup popup_for_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className={`popup__close popup__close_for_${name}`}
          type="button"
          aria-label="Кнопка закрытия модального окна"
          onClick={onClose}
        ></button>
        <h2
          className={`popup__title ${
            name === "confirmation" && "popup__title_confirm"
          }`}
        >
          {title}
        </h2>
        <form
          className="popup__form"
          name={`user-${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            className={`popup__save ${!isValid ? "popup__save_inactive" : ""}`}
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
