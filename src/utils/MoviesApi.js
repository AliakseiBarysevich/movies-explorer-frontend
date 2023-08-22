import { SERVER_URL } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}

class MoviesApi {
  constructor({ baseUrl
  }) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: SERVER_URL,
});