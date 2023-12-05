function mediaTemplate(data) {
  const { image, title, likes, video } = data;
  const photographImg = `assets/photographers/media/${image}`;
  const photographVod = `assets/photographers/media/${video}`;

  function allLikes() {
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

  function getPhotographerMediaDom() {
    const photographersSectionMedia = document.querySelector(".photograph-media");
    console.log(photographersSectionMedia.children);

    const nbLikes = document.createElement("p");
    nbLikes.classList.add("photo-likes");
    nbLikes.textContent = likes;

    const likeIcon = document.createElement("div");
    likeIcon.classList.add("like-icon");
    likeIcon.setAttribute("tabindex", "8");
    likeIcon.innerHTML =
      '<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M11.125 21.35L9.85625 20.03C5.35 15.36 2.375 12.28 2.375 8.5C2.375 5.42 4.4925 3 7.1875 3C8.71 3 10.1712 3.81 11.125 5.09C12.0787 3.81 13.54 3 15.0625 3C17.7575 3 19.875 5.42 19.875 8.5C19.875 12.28 16.9 15.36 12.3938 20.04L11.125 21.35Z" fill="black"/></svg>';

    const pictureName = document.createElement("p");
    pictureName.textContent = title;

    const likeContainer = document.createElement("div");
    likeContainer.appendChild(nbLikes);
    likeContainer.appendChild(likeIcon);
    likeContainer.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        if (likeIcon.classList.contains("active")) {
          nbLikes.textContent = likes;
          likeIcon.classList.remove("active");
          nbLikes.classList.remove("active");
          allLikes();
          return;
        }
        nbLikes.textContent = likes + 1;
        likeIcon.classList.add("active");
        allLikes();
      }   
    });
    likeContainer.addEventListener("click", () => {
      if (likeIcon.classList.contains("active")) {
        nbLikes.textContent = likes;
        likeIcon.classList.remove("active");
        nbLikes.classList.remove("active");
        allLikes();
        return;
      }
      nbLikes.textContent = likes + 1;
      likeIcon.classList.add("active");
      allLikes();
    });

    const textcontainerMedia = document.createElement("div");
    textcontainerMedia.classList.add("media-text-container");
    textcontainerMedia.appendChild(pictureName);
    textcontainerMedia.appendChild(likeContainer);
    if (image === undefined) {
      const video = document.createElement("video");
      video.setAttribute("src", photographVod);
      video.setAttribute("alt", title);

      const videoContainer = document.createElement("div");
      videoContainer.appendChild(video);
      videoContainer.appendChild(textcontainerMedia);

      photographersSectionMedia.appendChild(videoContainer);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", photographImg);
      img.setAttribute("alt", title);

      const pictureContainer = document.createElement("div");
      pictureContainer.appendChild(img);
      pictureContainer.appendChild(textcontainerMedia);

      photographersSectionMedia.appendChild(pictureContainer);
    }
  }
  return { getPhotographerMediaDom };
}
