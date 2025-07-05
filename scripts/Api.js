class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }
  //#2 check----
  getInitialCards() {
    return fetch(this.baseUrl + "/cards/", {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  } //------
  //#1 check----
  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  } //------
  //#3 check----
  editProfile(profileName, profileDescription) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: profileName,
        about: profileDescription,
      }),
    }).then((res) => {
      return res.json();
    });
  } //----#4check-----
  addNewCard(title, url) {
    return fetch(this.baseUrl + "/cards/", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: title,
        link: url,
      }),
    }).then((res) => {
      return res.json();
    });
  } //------

  //#8check----anadir y eliminar me gusta
  likeCard(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes", {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  }

  dislikeCard(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes", {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  }
  //#6,7check----
  deleteCard(cardId) {
    return fetch(this.baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return res.json();
    });
  }

  //#9----
  updateAvatarPicture(avatarData) {
    return fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarData,
      }),
    }).then((res) => {
      return res.json();
    });
  }
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "614327d0-327a-477f-989a-c388fd731af6",
    "Content-Type": "application/json",
  },
});
