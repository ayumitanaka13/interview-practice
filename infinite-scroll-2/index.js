const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    loading.classList.add("show");
    // setTimeout(fetchData, 1000);
    fetchData();
  }
});

const fetchData = async () => {
  const { results } = await (await fetch("https://randomuser.me/api/")).json();
  addData(results[0]);
};

const addData = (data) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");

  let userName = data.name.first + " " + data.name.last;
  let userPic = data.picture.large;

  div.classList.add("card");
  img.src = userPic;
  img.alt = userName;
  img.loading = "lazy";
  p.innerText = userName;

  div.appendChild(img);
  div.appendChild(p);
  container.appendChild(div);

  loading.classList.remove("show");
};

fetchData();
fetchData();
fetchData();
fetchData();
fetchData();
