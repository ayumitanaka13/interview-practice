const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    loading.classList.add("show");
    fetchApi();
  }
});

const fetchApi = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const { results } = await res.json();
    addUsers(results);
    loading.classList.remove("show");
  } catch (error) {
    console.log(error);
  }
};

const addUsers = (data) => {
  data.map((d) => {
    let div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
    <img src="${d.picture.large}" alt="${d.name.first}" loading="lazy"/>
    <p>${d.name.first} ${d.name.last}</p>
    `;

    container.appendChild(div);
  });
};

fetchApi();
