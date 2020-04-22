
export const API = {
    fetchAllLabs:  async ()  => {
        const endpointAPI = "https://match-labs-api.herokuapp.com/api/no_auth/labs";
        const response = await fetch(endpointAPI);
        const responseJson = await response.json();

        return responseJson;
    },

    fetchLab:  async (labId)  => {
        const endpointAPI = `https://match-labs-api.herokuapp.com/api/no_auth/labs/${labId}`;
        const response = await fetch(endpointAPI);
        const responseJson = await response.json();

        return responseJson;
    },

    fetchAllCandidates:  async ()  => {
        const endpointAPI = `https://match-labs-api.herokuapp.com/api/no_auth/candidates/`;
        const response = await fetch(endpointAPI);
        const responseJson = await response.json();

        return responseJson;
    }
};