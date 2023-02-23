import React from "react";

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="photo-cards__item">
      <img
        src={card.link}
        alt={card.name}
        className="photo-cards__photo"
        onClick={handleClick}
      />
      <div
        className={`photo-cards__description ${
          card.likes.length > 0 && "photo-cards__description_with-count"
        }`}
      >
        <h2 className="photo-cards__text">{card.name}</h2>
        <div className="photo-cards__like-block">
          <button
            className="photo-cards__button-like"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <span className="photo-cards__like-counter">
            {card.likes.length > 0 ? card.likes.length : ''}
          </span>
        </div>
      </div>
      <button
        className="photo-cards__button-del"
        type="button"
        aria-label="Удалить фото"
      ></button>
    </li>
  );
}

export default Card;
