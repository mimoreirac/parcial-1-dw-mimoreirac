const themeToggle = document.getElementById("darkToggle");
const cardContainer = document.querySelector(".card-container");
let userList = [];

fetch("https://randomuser.me/api/?results=5")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    users.results.forEach((user) => {
      const userCard = document.createElement("div");
      const userName = document.createElement("h3");
      const userCountry = document.createElement("p");
      const userEmail = document.createElement("p");

      userName.classList.add("user-name");
      userName.textContent = `${user.name.first} ${user.name.last}`;
      userCountry.classList.add("user-country");
      userCountry.textContent = `${user.location.city}`;
      userEmail.classList.add("user-email");
      userCountry.textContent = `${user.email}`;
      userCard.classList.add("user-card");

      userCard.appendChild(userName);
      userCard.appendChild(userCountry);
      userCard.appendChild(userEmail);

      cardContainer.appendChild(userCard);
    });
  });

themeToggle.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.getElementById("mainHeader").classList.add("dark-mode");
})