const fetch = require("node-fetch");

module.exports = (query) => {
    const body = new URLSearchParams();
    body.append('data', query);

    return fetch("http://overpass-api.de/api/interpreter", {
        body,
        "method": "POST",
    }).then(data => data.json());
};
