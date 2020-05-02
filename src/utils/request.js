const baseUrl = "https://match-labs-api.herokuapp.com/api";

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

const formatMe = (data) =>
  data.matcher_type === "Candidate"
    ? {
        role: data.matcher_type.toLowerCase(),
        id: data.matcher_id,
        personal: {
          first_name: data.matcher.first_name,
          last_name: data.matcher.last_name,
          email: data.matcher.email,
          description: data.matcher.description,
          phone: data.matcher.phone,
          profile_image: data.matcher.profile_image,
        },
      }
    : {
        role: data.matcher_type.toLowerCase(),
        id: data.matcher_id,
        personal: {
          name: data.matcher.name,
          email: data.matcher.email,
          description: data.matcher.description,
          phone: data.matcher.phone,
          profile_image: data.matcher.profile_image,
        },
      };

const formatMatch = (data) => {
  return role === "candidate"
    ? {
        id: data.lab.id,
        name: data.lab.name,
        profile_image: "data.lab.company.profile_image",
      }
    : {
        id: data.candidate.id,
        name: `${data.candidate.first_name} ${data.candidate.last_name}`,
        profile_image: data.candidate.profile_image,
        technologies: data.candidate.technologies,
      };
};

function handleErrors(response) {
  if (!response.ok) {
    console.log(response.statusText);
  }
  return response;
}

const config = {
  setAuthToken: (res) => {
    const token = res.headers.entries().next().value[1];
    localStorage.setItem("token", token);
  },
  get authorization() {
    return {
      Authorization: localStorage.getItem("token"),
    };
  },
  get headers() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  },
};

export const fetchMatches = async () => {
  const res = await fetch(`${baseUrl}/matches`, {
    method: "GET",
    headers: { ...config.headers, ...config.authorization },
  });
  const json = await res.json();

  return json.map((j) => formatMatch(j));
};

export const fetchProfile = async (id) => {
  const entity = role === "candidate" ? `labs` : `candidates`;

  const res = await fetch(`${baseUrl}/${entity}/${id}`, {
    method: "GET",
    headers: { ...config.headers, ...config.authorization },
  });
  const json = await res.json();
  return format(json);
};

export const fetchLikes = async () => {
  const entity = role === "company" ? "candidates" : "labs";

  const res = await fetch(`${baseUrl}/${entity}/likeable`, {
    method: "GET",
    headers: { ...config.headers, ...config.authorization },
  });

  const json = await res.json();
  return json.map((item) => format(item));
};

export const fetchAllLikes = async () => {
  const entity = role === "company" ? "candidates" : "labs";

  const res = await fetch(`${baseUrl}/${entity}`, {
    method: "GET",
    headers: { ...config.headers, ...config.authorization },
  });

  const json = await res.json();
  return json.map((like) => format(like));
};

export const register = async (data) => {
  const res = await fetch(`https://match-labs-api.herokuapp.com/api/users`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({ user: data }),
  }).catch((e) => {
    console.log(e);
  });

  config.setAuthToken(res);

  const json = await res.json();
  return json;
};

export const assignRole = async (data) => {
  const res = await fetch(
    `https://match-labs-api.herokuapp.com/api/candidates`,
    {
      method: "POST",
      headers: { ...config.headers, ...config.authorization },
      body: JSON.stringify(data),
    }
  ).catch((e) => console.log(e));

  const json = await res.json();
  return json;
};

export const login = async (data) => {
  const res = await fetch(
    `https://match-labs-api.herokuapp.com/api/users/sign_in`,
    {
      method: "POST",
      headers: { ...config.authorization, ...config.headers },
      body: JSON.stringify({
        user: data,
      }),
    }
  );

  config.setAuthToken(res);

  const json = await res.json();
  return json;
};

export const logout = async (data) => {
  await fetch(`https://match-labs-api.herokuapp.com/api/users/sign_out`, {
    method: "DELETE",
    headers: { ...config.authorization, ...config.headers },
  }).catch((e) => console.log(e));
};

export const me = async (data) => {
  const res = await fetch(`https://match-labs-api.herokuapp.com/api/me`, {
    method: "GET",
    headers: { ...config.authorization, ...config.headers },
  });

  handleErrors(res);

  const json = await res.json();

  return json.error ? false : formatMe(json);
};

export const editAccount = async (id, data) => {
  const entity = role === "candidate" ? `candidates` : `companies`;

  const res = await fetch(`${baseUrl}/${entity}/${id}`, {
    method: "PUT",
    headers: { ...config.headers, ...config.authorization },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  return json;
};
