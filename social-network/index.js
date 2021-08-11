const container = document.querySelector(".container");

const fetchApi = async () => {
  const { results } = await (
    await fetch("https://randomuser.me/api/?results=10")
  ).json();

  addUsers(results);
};

const addUsers = (results) => {
  for (result of results) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    div.classList.add("user");

    let picture = `${result.picture.large}`;
    let name = `${result.name.first} ${result.name.last}`;

    img.src = picture;
    p.innerHTML = name;

    div.appendChild(img);
    div.appendChild(p);
    container.appendChild(div);
  }
};

fetchApi();
