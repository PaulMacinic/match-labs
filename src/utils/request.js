const baseUrl = "https://match-labs-api.herokuapp.com/api/no_auth";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//! Advanced
// const role = "candidate";

//! Advanced
// const format = (data) => {
//   return role === "company"
//     ? { ...data, name: `${data.first_name} ${data.last_name}` }
//     : {
//         ...data,
//         description: data.company.description,
//         profile_image: data.company.profile_image,
//       };
// };

export const fetchMatches = async () => {
  //! Advanced
  // const url = role === "company" ? `${baseUrl}/candidates` : `${baseUrl}/labs`;

  //! Advanced
  // const res = await fetch(url, {
  const res = await fetch(`${baseUrl}/labs`, {
    method: "GET",
    headers,
  });
  const json = await res.json();

  //! Advanced
  // return json.map((j) => format(j));
  return json;
};

export const fetchProfile = async (id) => {
  //! Advanced
  // const entity = role === "candidate" ? "labs" : "candidates";

  //! Advanced
  // const res = await fetch(`${baseUrl}/${entity}/${id}`, {
  const res = await fetch(`${baseUrl}/labs/${id}`, {
    method: "GET",
    headers,
  });
  const json = await res.json();

  //! Advanced
  // return format(json);
  return json;
};
