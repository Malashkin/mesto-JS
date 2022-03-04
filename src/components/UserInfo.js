export default class UserInfo {
    constructor(nameSelector, infoSelector, avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector)
    };

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            info: this._about.textContent,
        }
        return userInfo
    };
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this._id = data._id;
        this._avatar.src = data.avatar;
    };
}