const baseUrl = "https://match-labs-api.herokuapp.com/api/no_auth";

// export const fetchLikes = () => {
//   const data =
//     "role" === "company"
//       ? format({
//           id: 1,
//           name: "Match Labs",
//           end_date: "2020-06-01",
//           spots: 6,
//           objectives:
//             "Folosind React (o librărie JavaScript pentru construirea interfețelor cu utilizatorii), vom dezvolta o soluție care va ajuta procesul de selecție din cadrul proiectului Liga AC LABS prin conectarea celor mai promițătoare perechi de companii și studenți. Mai exact, platforma va funcționa bazându-se pe un proces de matching ce va lua în calcul input-ul fiecărui utilizator, dar și interese, preferințe și skill-uri. În termeni informali, vom construi un Tinder mai pragmatic și mai util, fără a pierde componenta fun.",
//           selection_details:
//             '1. CV: Clasic sau cu o notă personală, tu decizi sub ce formă ne prezinti skill-urile și motivația care te fac "a perfect match" pentru laboratorul nostru. 2. Test: Brief and to the point, nu-ți vom răpi mult timp (maxim 30 de minute).',
//           requirements:
//             "Suntem aici să învățăm, așa că nu te speria dacă nu bifezi toate cerințele sau nu ești la nivelul la care ți-ai dori. Uite ce-ar trebui să pui pe masă (dar îți venim și noi în ajutor):  1. Știi câte ceva despre HTML/CSS și poți pune în practică conceptele de bază.   2. JavaScript nu-ți este un limbaj de programare complet străin, chiar și doar la nivel teoretic.   3. English, you speak it!",
//           created_at: "2020-04-02T17:44:07.372Z",
//           updated_at: "2020-04-02T18:33:50.481Z",
//           company_id: 1,
//           company: {
//             id: 1,
//             name: "[e-spres-oh]",
//             email: "paulmacinic@gmail.com",
//             phone: "0771466059",
//             website: "https://e-spres-oh.com",
//             description: "Front-end & Back-end Programming Consultancy",
//             created_at: "2020-04-02T17:35:22.182Z",
//             updated_at: "2020-04-02T19:01:54.687Z",
//             profile_image: "https://obscurial.dk/match-labs/eoh-logo.svg",
//           },
//           technologies: [
//             {
//               id: 16,
//               name: "F#",
//               created_at: "2020-04-02T17:58:22.794Z",
//               updated_at: "2020-04-02T17:58:22.794Z",
//             },
//           ],
//         })
//       : format({
//           id: 11,
//           first_name: "John",
//           last_name: "Doe",
//           email: "user@name.com",
//           phone: "+0 800 000 000",
//           description: "I'm a fancy description!",
//           created_at: "2020-04-17T10:57:25.838Z",
//           updated_at: "2020-04-17T10:57:25.838Z",
//           profile_image: "https://placehold.it/350x450.png",
//           technologies: [
//             {
//               id: 1,
//               name: "Lisp – ISO/IEC 13816",
//               created_at: "2020-04-02T17:58:22.719Z",
//               updated_at: "2020-04-02T17:58:22.719Z",
//             },
//             {
//               id: 2,
//               name: "DataFlex",
//               created_at: "2020-04-02T17:58:22.726Z",
//               updated_at: "2020-04-02T17:58:22.726Z",
//             },
//             {
//               id: 3,
//               name: "Kaleidoscope",
//               created_at: "2020-04-02T17:58:22.730Z",
//               updated_at: "2020-04-02T17:58:22.730Z",
//             },
//             {
//               id: 4,
//               name: "Constraint Handling Rules (CHR)",
//               created_at: "2020-04-02T17:58:22.735Z",
//               updated_at: "2020-04-02T17:58:22.735Z",
//             },
//             {
//               id: 5,
//               name: "JASS",
//               created_at: "2020-04-02T17:58:22.740Z",
//               updated_at: "2020-04-02T17:58:22.740Z",
//             },
//             {
//               id: 6,
//               name: "PL-11",
//               created_at: "2020-04-02T17:58:22.745Z",
//               updated_at: "2020-04-02T17:58:22.745Z",
//             },
//             {
//               id: 7,
//               name: "bc",
//               created_at: "2020-04-02T17:58:22.750Z",
//               updated_at: "2020-04-02T17:58:22.750Z",
//             },
//             {
//               id: 8,
//               name: "IBM RPG",
//               created_at: "2020-04-02T17:58:22.756Z",
//               updated_at: "2020-04-02T17:58:22.756Z",
//             },
//             {
//               id: 9,
//               name: "OBJ2",
//               created_at: "2020-04-02T17:58:22.761Z",
//               updated_at: "2020-04-02T17:58:22.761Z",
//             },
//             {
//               id: 10,
//               name: "OpenVera",
//               created_at: "2020-04-02T17:58:22.765Z",
//               updated_at: "2020-04-02T17:58:22.765Z",
//             },
//             {
//               id: 11,
//               name: "Agora",
//               created_at: "2020-04-02T17:58:22.770Z",
//               updated_at: "2020-04-02T17:58:22.770Z",
//             },
//             {
//               id: 12,
//               name: "Singularity",
//               created_at: "2020-04-02T17:58:22.775Z",
//               updated_at: "2020-04-02T17:58:22.775Z",
//             },
//             {
//               id: 13,
//               name: "TUTOR",
//               created_at: "2020-04-02T17:58:22.780Z",
//               updated_at: "2020-04-02T17:58:22.780Z",
//             },
//             {
//               id: 14,
//               name: "ELAN",
//               created_at: "2020-04-02T17:58:22.785Z",
//               updated_at: "2020-04-02T17:58:22.785Z",
//             },
//             {
//               id: 15,
//               name: "MARK-IV (now VISION:BUILDER)",
//               created_at: "2020-04-02T17:58:22.790Z",
//               updated_at: "2020-04-02T17:58:22.790Z",
//             },
//             {
//               id: 16,
//               name: "F#",
//               created_at: "2020-04-02T17:58:22.794Z",
//               updated_at: "2020-04-02T17:58:22.794Z",
//             },
//             {
//               id: 17,
//               name: "IBM Informix-4GL",
//               created_at: "2020-04-02T17:58:22.799Z",
//               updated_at: "2020-04-02T17:58:22.799Z",
//             },
//             {
//               id: 18,
//               name: "Pizza",
//               created_at: "2020-04-02T17:58:22.804Z",
//               updated_at: "2020-04-02T17:58:22.804Z",
//             },
//             {
//               id: 19,
//               name: "TeX",
//               created_at: "2020-04-02T17:58:22.808Z",
//               updated_at: "2020-04-02T17:58:22.808Z",
//             },
//             {
//               id: 20,
//               name: "ESPOL",
//               created_at: "2020-04-02T17:58:22.813Z",
//               updated_at: "2020-04-02T17:58:22.813Z",
//             },
//           ],
//         });

//   return data;
// };
