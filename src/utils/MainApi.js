const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    updateProfile(name, email) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
            }),
        }).then(checkResponse);
    }

    getSavedMovies() {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(checkResponse);
    }

    saveMovie(movie) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        }).then(checkResponse);
    }

    deleteMovie(id) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(checkResponse);
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.moviesexplorer.nomoredomains.monster'
});