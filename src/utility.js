const fetchAPI = async (type) => {
  let url;
  if (type === "lab") {
    url = "https://match-labs-api.herokuapp.com/api/no_auth/labs";
  } else if (type === "candidate") {
    url = "https://match-labs-api.herokuapp.com/api/no_auth/candidates";
  }

  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export default fetchAPI;
