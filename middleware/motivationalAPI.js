const fetch = require("node-fetch");
const config = {
    apiURL: "https://type.fit/api/quotes"
};

fetch(config.apiURL)
    .then(res => res.json())
    .then(json => console.log(json));
