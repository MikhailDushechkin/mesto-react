import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialData()
      .then((data) => {
        const [cards, userData] = data;

        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
            <img
              src={userAvatar}
              alt="Аватар профиля"
              className="profile__avatar"
            />
          </div>
          <div className="profile__bio">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__description">{userDescription}</p>
            </div>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографии"
        ></button>
      </section>
      <section className="photo-cards">
        <ul className="photo-cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick ={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
