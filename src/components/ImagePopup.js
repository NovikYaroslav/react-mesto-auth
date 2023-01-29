function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_for_photo ${card.name ? "popup_opened" : ""}`}
    >
      <figure className="popup__photo-container">
        <button
          className="popup__close popup__close_for_photo"
          type="button"
          aria-label="Кнопка закрытия модального окна"
          onClick={onClose}
        ></button>
        <img
          className="popup__photo"
          src={`${card.link}`}
          alt={`${card.name}`}
        />
        <figcaption className="popup__photo-capture">{card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
