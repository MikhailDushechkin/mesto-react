import React from "react";

function ImagePopup({card, onClose}) {
  return (
    <div className={`popup overlay-photo ${card && 'popup_opened'}`}>
      <div className="overlay-photo__container">
        <img src={card ?.link} alt={card ?.name} className="overlay-photo__image" />
        <h2 className="overlay-photo__description">{card ?.name}</h2>
        <button
          type="button"
          className="popup__close-button overlay-photo__close-button"
          aria-label="Закрыть поп-ап"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
