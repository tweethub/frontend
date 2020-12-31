/* eslint-disable no-undef */
function retweets(query, cb) {
    // TODO: fix
    return fetch(`tweethub.io:8080/api/v1/retweets`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function favorites(query, cb) {
    // TODO: fix
    return fetch(`tweethub.io:8080/api/v1/favorites`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    throw error;
}

function parseJSON(response) {
    return response.json();
}

const Client = {retweets, favorites};
export default Client;