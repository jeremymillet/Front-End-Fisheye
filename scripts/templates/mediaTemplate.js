
function mediaTemplate(data) {
  const { image, title, likes, video, date ,likeStatus} = data;
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
    const nbLikes = document.createElement("p");
    nbLikes.classList.add("photo-likes");
    nbLikes.textContent = likes;

    const likeIcon = document.createElement("div");
    likeIcon.classList.add("like-icon");
    
    if (likeStatus === "active") {
      likeIcon.classList.add("active");
    }
    likeIcon.setAttribute("tabindex", "12 ");
    likeIcon.innerHTML =
      '<svg  aria-label="like" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M11.125 21.35L9.85625 20.03C5.35 15.36 2.375 12.28 2.375 8.5C2.375 5.42 4.4925 3 7.1875 3C8.71 3 10.1712 3.81 11.125 5.09C12.0787 3.81 13.54 3 15.0625 3C17.7575 3 19.875 5.42 19.875 8.5C19.875 12.28 16.9 15.36 12.3938 20.04L11.125 21.35Z" fill="black"/></svg>';

    const pictureName = document.createElement("p");
    pictureName.textContent = title;
    pictureName.classList.add("picture-name");

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("like-container");
    likeContainer.setAttribute("aria-label", "likes");
    likeContainer.appendChild(nbLikes);
    likeContainer.appendChild(likeIcon);
    likeContainer.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        if (likeIcon.classList.contains("active")) {
          if (likeStatus === "active") {
            nbLikes.textContent = likes - 1;
          } else {
            nbLikes.textContent = likes;
          }
          likeIcon.classList.remove("active");
          allLikes();
          return;
        } else {
          if (likeStatus === "active") {
            nbLikes.textContent = likes;
          } else {
            nbLikes.textContent = likes + 1;
          }
        }
        likeIcon.classList.add("active");       
        allLikes();
      }
    });
    likeContainer.addEventListener("click", () => {
      if (likeIcon.classList.contains("active")) {
        if (likeStatus === "active") {
          nbLikes.textContent = likes - 1;
        }
        else {
          nbLikes.textContent = likes;
        }
        likeIcon.classList.remove("active");
        allLikes();
        return;
      }
      else {
        if (likeStatus === "active") {
          nbLikes.textContent = likes;
        }
        else {
          nbLikes.textContent = likes + 1;
        }
      }
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
      video.setAttribute("data", date);
      video.classList.add("media");
      video.setAttribute("tabindex", "11");

      const videoContainer = document.createElement("div");
      videoContainer.appendChild(video);
      videoContainer.appendChild(textcontainerMedia);
      videoContainer.setAttribute("aria-label", "ouvrir la lightbox");
      videoContainer.classList.add("media-picture-container");


      photographersSectionMedia.appendChild(videoContainer);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", photographImg);
      img.setAttribute("alt", title);
      img.setAttribute("data", date);
      img.classList.add("media");
      img.setAttribute("tabindex", "11");

      const pictureContainer = document.createElement("div");
      pictureContainer.classList.add("media-picture-container");
      pictureContainer.setAttribute("aria-label", "ouvrir la lightbox");
      pictureContainer.appendChild(img);
      pictureContainer.appendChild(textcontainerMedia);

      photographersSectionMedia.appendChild(pictureContainer);
    }
  }
  return { getPhotographerMediaDom };
}
