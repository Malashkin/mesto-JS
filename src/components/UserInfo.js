export default class UserInfo {
    constructor(nameSelector, infoSelector) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(infoSelector);
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
    }
}