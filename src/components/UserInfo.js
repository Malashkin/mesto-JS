export default class UserInfo {
    constructor(nameSelector, infoSelector) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(infoSelector);
    };
    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            info: this._job.textContent,
        }
        return userInfo
    };
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.job;
    }
}