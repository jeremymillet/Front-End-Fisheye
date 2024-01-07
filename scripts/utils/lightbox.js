import { getDomElement } from "../utils/helper.js";


function lightbox() {
  function openLightbox() {
    document.getElementById("lightbox-container").style.display = "flex";
    document.addEventListener("keydown", test)
  }

   function closeLightbox() {
     document.getElementById("lightbox-container").style.display = "none";
     document.removeEventListener("keydown", test)
  }

  let indexCourant = 0;

  const domElement = getDomElement();
  
  function test(event) {
    if (event.keyCode === 37) {
      previous();
    }
    else if (event.keyCode === 39) {
      next()
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
        document.querySelector("#lightbox-img img").src = "";
      }
       else {
         document.querySelector("#lightbox-img img").src = `assets/photographers/media/${objetCourant.image}`;
        mediaVideo.src = "";
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
  document.getElementById("previous-img").addEventListener("click", previous)
  document.getElementById("next-img").addEventListener("click", next);


   document
     .getElementById("close-lightbox")
     .addEventListener("click", closeLightbox);
  console.log("test");

   document
     .querySelectorAll(".media")
     .forEach((element) => {
       element.removeEventListener("click", hundleClickMedia)
       element.addEventListener("click", hundleClickMedia)
     });
}
export default lightbox;
