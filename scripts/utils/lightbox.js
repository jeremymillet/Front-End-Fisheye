import { getDomElement } from "../utils/helper.js";


function lightbox() {
  function openLightbox() {
    document.getElementById("lightbox-container").style.display = "flex";
    document.addEventListener("keydown", arrowNextPrevious);
    document.addEventListener("keydown", closeModalKeyboard);
  }

   function closeLightbox() {
     document.getElementById("lightbox-container").style.display = "none";
     document.removeEventListener("keydown", arrowNextPrevious);
     document.removeEventListener("keydown", closeModalKeyboard);
  }

  let indexCourant = 0;

  const domElement = getDomElement();
  
  function arrowNextPrevious(event) {
    if (event.keyCode === 37) {
      previous();
    }
    else if (event.keyCode === 39) {
      next()
    }
  }
  function closeModalKeyboard(event) {
    if (event.keyCode === 27) {
      closeLightbox();
    }
  }
  function next() {
    if (indexCourant + 1 < domElement.length) {
      afficherObjet(indexCourant + 1);
      indexCourant++;
    } else {
      afficherObjet(0);
      indexCourant = 0;
    }
  }
  function previous() {
    if (indexCourant - 1 >= 0) {
      afficherObjet(indexCourant - 1);
      indexCourant--;
    } else {
      afficherObjet(domElement.length -1);
      indexCourant = domElement.length -1;
    }
  }
  function afficherObjet(index) {
    const objetCourant = domElement[index];
    if (objetCourant) {
      const mediaVideo = document.querySelector("#lightbox-img video");
      if (objetCourant.image === undefined) {
        mediaVideo.src = `assets/photographers/media/${objetCourant.video}`;
        mediaVideo.setAttribute("controls", true);
        mediaVideo.style.display = "flex";
        document.querySelector("#lightbox-img img").style.display = "none";
      }
       else {
        document.querySelector("#lightbox-img img").src = `assets/photographers/media/${objetCourant.image}`;
        document.querySelector("#lightbox-img img").style.display = "flex";
        mediaVideo.style.display = "none";
        mediaVideo.removeAttribute("controls");
       }
       document.querySelector("#lightbox-text").innerText = objetCourant.title;
       // Affichez l'objet où vous le souhaitez dans votre interface utilisateur
     }
     else {
       indexCourant = domElement.length;
    }
  }
  function hundleClickMedia(event) {
    openLightbox();
    const name = event.target.getAttribute("alt");
    const indexTrouve = domElement.findIndex((objet) => objet.title === name);
    indexCourant = indexTrouve;
    afficherObjet(indexCourant);
  }
  function hundleClickEnterMedia(event) {
    if (event.keyCode === 13) {
      hundleClickMedia(event);
    } 
  }
  document.getElementById("previous-img").addEventListener("click", previous)
  document.getElementById("next-img").addEventListener("click", next);


   document
     .getElementById("close-lightbox")
     .addEventListener("click", closeLightbox);

   document
     .querySelectorAll(".media")
     .forEach((element) => {
       element.addEventListener("click", hundleClickMedia)    
       element.addEventListener("keydown", hundleClickEnterMedia)     
     });
}
export default lightbox;
