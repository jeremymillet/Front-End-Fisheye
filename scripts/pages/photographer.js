import { getPhotographers } from "../utils/helper.js";

let totalLikes = 0;
async function filterPhotographersByIdMedia(id, data) {
  const media = data.media;
  const filteredPhotographerMedia = media.filter(
    (photographer) => photographer.photographerId == id
  );
  return filteredPhotographerMedia;
}
async function filterPhotographersByIdinfo(id, data) {
  const info = data.photographers;
  const filteredPhotographerInfo = info.filter(
    (photographer) => photographer.id == id
  );
  return filteredPhotographerInfo;
}

async function displayData(info, media) {
  displayMedia(media);
  const filterByLikes = [...media].sort((a, b) => b.likes - a.likes);
  const filterByName = [...media].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const filterByDate = [...media].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );
  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      if (sBtn_text.textContent === "Popularité") {
        displayMedia(filterByLikes);
      } else if (sBtn_text.textContent === "Date") {
        displayMedia(filterByDate);
      } else if (sBtn_text.textContent === "Titre") {
        displayMedia(filterByName);
      }
      optionMenu.classList.remove("active");
    });
  });
  const photographerModel = photographerTemplate(info, totalLikes);
  const PhotographerHeaderDom = photographerModel.getPhotographerHeaderDom();
}

function displayMedia(media) {
  const photographersSectionMedia = document.querySelector(".photograph-media");
  photographersSectionMedia.innerHTML = "";
  media.forEach((media) => {
    totalLikes += media.likes;
    const mediaModel = mediaTemplate(media);
    const photographerMediaDom = mediaModel.getPhotographerMediaDom();
  });
}

async function init() {
  // Récupère les datas des photographes
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  const photographers = await getPhotographers();
  const media = await filterPhotographersByIdMedia(id, photographers);
  const info = await filterPhotographersByIdinfo(id, photographers);
  displayData(info[0], media);
}

init();
