

export default async function fetchJson(method, url, body) {
    const BASE_URL = "api";

    const options = {
        method: method.toUpperCase(),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    //much to do for body

    let fetchUrl;

    //Handling corner case for url
    if (BASE_URL && url.substring(0, 1) !== '/') {
        fetchUrl = BASE_URL + '/' + url;
    } else {
        fetchUrl = BASE_URL + url;
    }

    console.log(fetchUrl);

    let response;

    try {
        response = await fetch(fetchUrl, options);
        const responseJson = response.json();
        
        if (response.ok) {
            return {
                data: responseJson,
            }
        }
        return {
            error: responseJson.title || responseJson,
        };
    } catch (error) {
        console.log(response);
        return {
            error: "Server Error"
        }
    }

}

export const api = {
    get(url) {
        return fetchJson('GET', url);
    }
}