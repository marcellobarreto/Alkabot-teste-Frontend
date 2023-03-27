import axios from "axios";
export const JSON_URL = "https://jsonplaceholder.typicode.com";

export function postsGet() {
    return axios.get(`${JSON_URL}/posts`);
};

export function postsGetId(id) {
    return axios.get(`${JSON_URL}/posts/`+id+"/comments");
};

export function userGet() {
    return axios.get(`${JSON_URL}/users`);
};

export function userGetId(id) {
    return axios.get(`${JSON_URL}/users/`+id);
};