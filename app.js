let myArray = [
  {
    id: 1,
    resName: "food item1",
    dummy:"chicken",
    img: "images/image-1.jpg",
    hotel: "Alpha nairobi",
    about:"food lover",
  },
  {
    id: 2,
    resName: "food item2",
    dummy:"goat meat",
    img: "images/image-2.jpg",
    hotel: "Alpha paris",
    about:"food lover",
  },
  {
    id: 3,
    resName: "food item3",
    dummy:"cow meat",
    img: "images/image-3.jpg",
    hotel: "Alpha london",
    about:"food lover",
  },
  {
    id: 4,
    resName: "food item4",
    dummy:"sheep meat",
    img: "images/image-4.jpg",
    hotel: "Alpha new york",
    about:"food lover",
  },
  {
    id: 5,
    resName: "food item5",
    dummy:"fish",
    img: "images/image-5.jpg",
    hotel: "Alpha freetown",
    about:"food lover",
  },
];

let resName = document.getElementById("resName");
let dumbo = document.getElementById("dummy");
let images = document.getElementById("images");
let hotel = document.getElementById("hotel");
let about = document.getElementById("about");
let back = document.getElementById("back");
let main = document.getElementById("main");
let next = document.getElementById("next");

let Idea = 0;

window.addEventListener("DOMContentLoaded", function () {
  allMenu(Idea);
});

const allMenu = () => {
  let myMenu = myArray[Idea];

  resName.textContent = myMenu.resName;
  dumbo.textContent = myMenu.dummy;
  images.src = myMenu.img;
  hotel.textContent = myMenu.hotel;
  about.textContent = myMenu.about;
};

main.addEventListener("click", () => {
  Idea = Math.floor(Math.random() * myArray.length);
  allMenu(Idea);
});

back.addEventListener("click", () => {
  Idea--;
  if (Idea < 0) {
    Idea = myArray.length - 1;
  }
  allMenu(Idea);
});

next.addEventListener("click", () => {
  Idea++;
  if (Idea > myArray.length - 1) {
    Idea = 0;
  }
  allMenu(Idea);
});
