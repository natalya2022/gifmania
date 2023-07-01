export default class Api {
    constructor({baseURL, key}) {
        this._URL = baseURL;
        this._key = key;
    }
    trending() {
        return fetch(`${this._URL}trending?api_key=${this._key}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
          })
          .then((res) => {
            return res.ok? res.json(): Promise.reject(`Ошибка: ${res.status}`);
          });
    }
    search(word) {
        return fetch(`${this._URL}search?api_key=${this._key}&q=${word}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
          })
          .then((res) => {
            return res.ok? res.json(): Promise.reject(`Ошибка: ${res.status}`);
          });
    }
    random() {
        return fetch(`${this._URL}random?api_key=${this._key}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
          })
          .then((res) => {
            return res.ok? res.json(): Promise.reject(`Ошибка: ${res.status}`);
          });
    }
}

export const api = new Api({
    baseURL: "https://api.giphy.com/v1/gifs/",
    key: "RdGZuc1yz5OxCXh5U86bmFqDT03Tw7ij"
});
