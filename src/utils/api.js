export default class Api {
    constructor({baseURL, key}) {
        this._URL = baseURL;
        this.key = key;
    }
    search() {
        return fetch(`api.giphy.com/v1/gifs/trending?api_key=RdGZuc1yz5OxCXh5U86bmFqDT03Tw7ij`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
          })
          .then((res) => {
            return res.ok? res.json(): Promise.reject(`Ошибка: ${res.status}`);
          });
    }
}


const api = new Api({
    baseURL: "api.giphy.com/v1/gifs/",
    key: "RdGZuc1yz5OxCXh5U86bmFqDT03Tw7ij"
});
api.search().then(res => {
    console.log(res);
});