const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

// observe scroll
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    // show animation
    loading.classList.add("show");
    setTimeout(getPost, 500);
  }
});

// get random number
const getRandomNr = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// get data from api
const getPost = async () => {
  const postResponses = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`
  );
  const postData = await postResponses.json();
  const userResponses = await fetch("https://randomuser.me/api");
  const userData = await userResponses.json();

  const data = { post: postData, user: userData.results[0] };

  addDatatoDOM(data);
};

// add data to DOM
const addDatatoDOM = (data) => {
  const postEl = document.createElement("div");
  postEl.classList.add("post");
  postEl.innerHTML = `
        <h2>${data.post.title}</h2>
        <p>${data.post.body}</p>
        <div class="user">
            <img src="${data.user.picture.large}" alt="${data.user.name.first}" />
            <p>${data.user.name.first}</p>
        </div>
    `;
  container.appendChild(postEl);

  loading.classList.remove("show");
};

getPost();
getPost();
getPost();
