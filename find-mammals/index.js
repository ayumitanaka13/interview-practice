// #1
// animals = [
//   {
//     type: "Dog",
//     mammal: true,
//   },
//   {
//     type: "Snake",
//     mammal: false,
//   },
//   {
//     type: "Cheetah",
//     mammal: true,
//   },
// ];

// const mammals = (arr) => {
//   return animals.filter((animal) => animal.mammal);
// };

// console.log(mammals(animals));

// #2
const animals = Array.from(document.querySelectorAll(".mammal-value"));
const mammals = animals.filter((animal) => animal.innerText === "true");

const onlyMammals = document.querySelector("#only-mammals");

for (mammal of mammals) {
  let grandparent = mammal.parentElement.parentElement
  onlyMammals.appendChild(grandparent)
}
