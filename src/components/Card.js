import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className="photo-cards__item">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="photo-cards__photo"
        onClick={handleClick}
      />
      <div
        className={`photo-cards__description ${
          props.card.likes.length > 0 && "photo-cards__description_with-count"
        }`}
      >
        <h2 className="photo-cards__text">{props.card.name}</h2>
        <div className="photo-cards__like-block">
          <button
            className="photo-cards__button-like"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <span className="photo-cards__like-counter">
            {props.card.likes.length > 0 ? props.card.likes.length : ''}
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
