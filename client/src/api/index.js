
const BASE_URL = '/api/movies';

const getMovies = async () => {
    const response = await fetch(`${BASE_URL}`);
    const movies = response.json();
    if (response.status >= 400) {
        throw new Error(movies.error);
    }
    return movies;
}

export { getMovies };
