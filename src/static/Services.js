const fetchJson = async (resource, id = '') => {
    const endpointAPI = "https://match-labs-api.herokuapp.com/api/no_auth/";
    const response = await fetch(`${endpointAPI}/${resource}/${id}`);
    const jsonResponse = await response.json();

    return jsonResponse;
}

export default fetchJson;
