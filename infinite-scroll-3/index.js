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
  const res = await fetch("https://randomuser.me/api/");
  const { results } = await res.json();
  addUser(results[0]);
  loading.classList.remove("show");
};

const addUser = (user) => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
        <img src=${user.picture.large} alt="${user.name.first}" loading="lazy" />
        <p>${user.name.first} ${user.name.last}</p>
    `;
  container.appendChild(div);
};

fetchApi();
fetchApi();
fetchApi();
fetchApi();
fetchApi();
