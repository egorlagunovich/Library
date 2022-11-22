const addButton = document.querySelector(".addButton");
const addMenu = document.querySelector(".addMenu");
const books = document.querySelector(".books");
const main = document.querySelector("main");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const submitBook = document.querySelector(".submitBook");
const checkBox = document.querySelector("#read");

addButton.addEventListener("click", () => {
  addMenu.classList.toggle("addMenuActive");
  main.classList.toggle("mainOpacity");
});

submitBook.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("book-container");

  let textTitle = document.createElement("p");
  textTitle.textContent = title.value;

  let textAuthor = document.createElement("p");
  textAuthor.textContent = author.value;

  let textPages = document.createElement("p");
  textPages.textContent = pages.value;

  let redButton = document.createElement("button");
  redButton.textContent = "Finished";

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  redButton.classList.add("redButton");
  removeButton.classList.add("removeButton");

  div.append(textTitle);
  div.append(textAuthor);
  div.append(textPages);
  div.append(redButton);
  div.append(removeButton);
  books.append(div);

  addMenu.classList.remove("addMenuActive");
  main.classList.remove("mainOpacity");

  if (checkBox.checked) {
    redButton.classList.add("readBook");
  }

  let divs = document.querySelector(".book-container");
  removeButton.addEventListener("click", () => {
    books.removeChild(div);
  });

  redButton.addEventListener("click", () => {
    redButton.classList.toggle("readBook");
  });

  title.value = "";
  author.value = "";
  pages.value = "";
});
