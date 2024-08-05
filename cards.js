const IMAGE_URL = "https://placehold.co/200";

const USER = {
    id: 1,
    user_name: "User Name",
    description: "Me gustan los conejos",
    age: "26",
    fav_music:{
        artists: ["Taylor","Hozier"],
    },
};

// Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");


// Crear elemento img

const imageElement = document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt = "User profile photo";

// Creamos elemento titulo -> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");


// Poblar
cardTitleElement.textContent = USER.user_name;
cardAgeElement.textContent = USER.age;
cardDescElement.textContent = USER.description;

// Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement);