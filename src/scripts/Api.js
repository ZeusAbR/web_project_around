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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } //------
  //#1 check----
  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } //------

  //#8check----anadir y eliminar me gusta
  likeCard(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes", {
      method: "PUT",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dislikeCard(cardId) {
    return fetch(this.baseUrl + "/cards/" + cardId + "/likes", {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //#6,7check----
  deleteCard(cardId) {
    return fetch(this.baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
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
