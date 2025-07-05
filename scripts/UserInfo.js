export class UserInfo {
  constructor(nameSelector, descriptionSelector, urlImage) {
    this.nameElement = document.querySelector(nameSelector);

    this.descriptionElement = document.querySelector(descriptionSelector);
    this.urlImage = document.querySelector(urlImage);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      description: this.descriptionElement.textContent,
    };
  }

  setUserInfo(name, description) {
    this.nameElement.textContent = name;
    this.descriptionElement.textContent = description;
  }
  setAvatar(url) {
    this.urlImage.src = url;
  }
}
