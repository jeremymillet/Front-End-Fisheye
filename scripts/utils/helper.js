import lightbox from "../utils/lightbox.js";

export async function getPhotographers() {
  try {
    const request = await fetch("../../data/photographers.json");
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
export function getDomElement() {
  const domMedias = document.getElementsByClassName("media-picture-container");
  const mediasFromDom = Array.from(domMedias);

  const tableauObjets = mediasFromDom.map(function (element) {
    let image, video, likeStatus;
    if (element.querySelector("img") === null) {
      video = element
        .querySelector("video")
        .getAttribute("src")
        .split("/")
        .pop();
    } else if (element.querySelector("img") !== null) {
      image = element.querySelector("img").getAttribute("src").split("/").pop();
    }
    const title = element.querySelector(".media-text-container p").textContent;
    const likes = parseInt(
      element.querySelector(".media-text-container div .photo-likes")
        .textContent
    );
    const date = element
      .querySelector(".media-picture-container :first-child")
      .getAttribute("data");
    if (
      element
        .querySelector(".media-picture-container .like-container .like-icon")
        .classList.contains("active")
    ) {
      likeStatus = "active";
    } else {
      likeStatus = "none";
    }
    const nouvelObjet = {
      image,
      video,
      title,
      likes,
      date,
      likeStatus,
    };
    return nouvelObjet;
  });
  return tableauObjets;
}
export function displayMedia(media) {
  const photographersSectionMedia = document.querySelector(".photograph-media");
  photographersSectionMedia.innerHTML = "";
  media.forEach((media) => {
    const mediaModel = mediaTemplate(media);
    const photographerMediaDom = mediaModel.getPhotographerMediaDom();
  });
  lightbox();
}
export function allLikes() {
  const domLikes = document.querySelectorAll(".photo-likes");
  let arrayLikes = Array.from(domLikes).map(function (objet) {
    return parseInt(objet.innerHTML);
  });

  let totalLikes = arrayLikes.reduce(function (acc, valeur) {
    return acc + valeur;
  }, 0);
  let totalLikesDom = document.querySelector(".all-likes");
  totalLikesDom.innerHTML = totalLikes;
}
