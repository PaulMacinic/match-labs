const baseUrl = "https://match-labs-api.herokuapp.com/api/no_auth";

const role = localStorage.getItem("role");

const format = (data) => {
  return role === "company"
    ? {
        ...data,
        name: `${data.first_name} ${data.last_name}`,
      }
    : {
        ...data,
        description: data.company.description,
        profile_image: data.company.profile_image,
      };
};

export const fetchMatches = async () => {
  const entity = role === "candidate" ? `labs` : `candidates`;
  
  const res = await fetch(`${baseUrl}/${entity}`, { method: "GET" });
  const json = await res.json();

  return json.map((j) => format(j));
};

export const fetchProfile = async (id) => {
  const entity = role === "candidate" ? `labs` : `candidates`;
  
  const res = await fetch(`${baseUrl}/${entity}/${id}`, { method: "GET" });
  const json = await res.json();
  return format(json);
};