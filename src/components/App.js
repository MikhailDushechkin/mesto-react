import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
          <>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="url"
                  id="avatar-link"
                  className="form__input"
                  placeholder="Ссылка на аватар"
                  name="link"
                  required
                />
                <span className="form__input-error avatar-link-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Сохранить"
      />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        children={
          <>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="text"
                  id="profile-name"
                  className="form__input"
                  placeholder="Имя"
                  name="name"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="form__input-error profile-name-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="text"
                  id="profile-description"
                  className="form__input"
                  placeholder="О себе"
                  name="description"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="form__input-error profile-description-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Сохранить"
      />
      <PopupWithForm
        name="cards"
        title="Новое место"
        children={
          <>
            <fieldset className="form__fieldset">
              <label className="form__field">
                <input
                  type="text"
                  id="photo-name"
                  className="form__input"
                  placeholder="Название"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="form__input-error photo-name-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="url"
                  id="photo-link"
                  className="form__input"
                  placeholder="Ссылка на картинку"
                  name="link"
                  required
                />
                <span className="form__input-error photo-link-error"></span>
              </label>
            </fieldset>
          </>
        }
        buttonText="Создать"
      />
      <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" />
      <ImagePopup />
      <template id="photo-cards-element">
        <li className="photo-cards__item">
          <img src="#" alt="Фотография" className="photo-cards__photo" />
          <div className="photo-cards__description">
            <h2 className="photo-cards__text"></h2>
            <div className="photo-cards__like-block">
              <button
                className="photo-cards__button-like"
                type="button"
                aria-label="Поставить лайк"
              ></button>
              <span className="photo-cards__like-counter"></span>
            </div>
          </div>
          <button
            className="photo-cards__button-del"
            type="button"
            aria-label="Удалить фото"
          ></button>
        </li>
      </template>
    </>
  );
}

export default App;
