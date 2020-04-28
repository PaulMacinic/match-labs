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
  const url = role === "company" ? `${baseUrl}/candidates` : `${baseUrl}/labs`;

  const res = await fetch(url, { method: "GET" });
  const json = await res.json();

  return json.map((j) => format(j));
};

export const fetchProfile = async (id) => {
  const entity = role === "candidate" ? `labs` : `candidates`;

  const res = await fetch(`${baseUrl}/${entity}/${id}`, { method: "GET" });
  const json = await res.json();
  return format(json);
};

export const fetchLikes = () => {
  const data =
    role === "company"
      ? format({
          id: 11,
          first_name: "John",
          last_name: "Doe static",
          email: "user@name.com",
          phone: "+0 800 000 000",
          description: "I'm a fancy description!",
          created_at: "2020-04-17T10:57:25.838Z",
          updated_at: "2020-04-17T10:57:25.838Z",
          profile_image: "https://placehold.it/350x450.png",
          technologies: [
            {
              id: 8,
              name: "IBM RPG",
              created_at: "2020-04-02T17:58:22.756Z",
              updated_at: "2020-04-02T17:58:22.756Z",
            },

            {
              id: 18,
              name: "JS",
              created_at: "2020-04-02T17:58:22.804Z",
              updated_at: "2020-04-02T17:58:22.804Z",
            },
            {
              id: 19,
              name: "TeX",
              created_at: "2020-04-02T17:58:22.808Z",
              updated_at: "2020-04-02T17:58:22.808Z",
            },
          ],
        })
      : format({
          id: 1,
          name: "Match Labs static",
          end_date: "2020-06-01",
          spots: 6,
          objectives:
            "Folosind React (o librărie JavaScript pentru construirea interfețelor cu utilizatorii), vom dezvolta o soluție care va ajuta procesul de selecție din cadrul proiectului Liga AC LABS prin conectarea celor mai promițătoare perechi de companii și studenți. Mai exact, platforma va funcționa bazându-se pe un proces de matching ce va lua în calcul input-ul fiecărui utilizator, dar și interese, preferințe și skill-uri. În termeni informali, vom construi un Tinder mai pragmatic și mai util, fără a pierde componenta fun.",
          selection_details:
            '1. CV: Clasic sau cu o notă personală, tu decizi sub ce formă ne prezinti skill-urile și motivația care te fac "a perfect match" pentru laboratorul nostru. 2. Test: Brief and to the point, nu-ți vom răpi mult timp (maxim 30 de minute).',
          requirements:
            "Suntem aici să învățăm, așa că nu te speria dacă nu bifezi toate cerințele sau nu ești la nivelul la care ți-ai dori. Uite ce-ar trebui să pui pe masă (dar îți venim și noi în ajutor):  1. Știi câte ceva despre HTML/CSS și poți pune în practică conceptele de bază.   2. JavaScript nu-ți este un limbaj de programare complet străin, chiar și doar la nivel teoretic.   3. English, you speak it!",
          created_at: "2020-04-02T17:44:07.372Z",
          updated_at: "2020-04-02T18:33:50.481Z",
          company_id: 1,
          company: {
            id: 1,
            name: "[e-spres-oh]",
            email: "paulmacinic@gmail.com",
            phone: "0771466059",
            website: "https://e-spres-oh.com",
            description: "Front-end & Back-end Programming Consultancy",
            created_at: "2020-04-02T17:35:22.182Z",
            updated_at: "2020-04-02T19:01:54.687Z",
            profile_image: "https://obscurial.dk/match-labs/eoh-logo.svg",
          },
          technologies: [
            {
              id: 16,
              name: "F#",
              created_at: "2020-04-02T17:58:22.794Z",
              updated_at: "2020-04-02T17:58:22.794Z",
            },
          ],
        });

  return data;
};

export const register = async (data) => {
  // 1. make a POST request with the email and password
  // Set auth token in localstorage using config
};

export const assignRole = async (data) => {
  // 2. Make POST request with user data
};
