import { getPhotographers, displayMedia, allLikes } from "../utils/helper.js";
import tri from "../utils/tri.js"
import lightbox from "../utils/lightbox.js";


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
  const photographerModel = photographerTemplate(info);
  const PhotographerHeaderDom = photographerModel.getPhotographerHeaderDom();
}

async function init() {
  // Récupère les datas des photographes
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  const photographers = await getPhotographers();
  const media = await filterPhotographersByIdMedia(id, photographers);
  const info = await filterPhotographersByIdinfo(id, photographers);
  displayData(info[0], media);
  tri();
  allLikes();
  lightbox();
}

init();
