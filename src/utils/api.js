import { apiconfig, BASE_URL } from "./data";

class Api {
  constructor({ url, teamId, headers }) {
    this._url = url;
    this._headers = headers;
    this._teamId = teamId;
  }

  _checkServerResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(
        `Ошибка: ${response.status} ${response.statusText}`
      );
    }
  }

  register(email, password) {
    return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then(this._checkServerResponse);
  }

  authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkServerResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
      });
  }

  checkToken(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkServerResponse);
  }

  getCards() {
    return fetch(`${this._url}/v1/${this._teamId}/cards`, {
      headers: this._headers,
      method: "GET",
    }).then(this._checkServerResponse);
  }
  addCards(newCardData) {
    return fetch(`${this._url}/v1/${this._teamId}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: `${newCardData.name}`,
        link: `${newCardData.link}`,
      }),
    }).then(this._checkServerResponse);
  }

  getUserInfoFromServer() {
    return fetch(`${this._url}/v1/${this._teamId}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then(this._checkServerResponse);
  }

  editUserInfo(profileData) {
    return fetch(`${this._url}/v1/${this._teamId}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${profileData.name}`,
        about: `${profileData.about}`,
      }),
    }).then(this._checkServerResponse);
  }

  editUserAvatar(avatarData) {
    return fetch(`${this._url}/v1/${this._teamId}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatarData.avatar}`,
      }),
    }).then(this._checkServerResponse);
  }

  changeCardLikeStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}/v1/${this._teamId}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._checkServerResponse);
    } else {
      return fetch(`${this._url}/v1/${this._teamId}/cards/${cardId}/likes`, {
        headers: this._headers,
        method: "DELETE",
      }).then(this._checkServerResponse);
    }
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/v1/${this._teamId}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkServerResponse);
  }
}

const yandexApi = new Api(apiconfig);

export default yandexApi;
