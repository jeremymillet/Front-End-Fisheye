import { getDomElement } from "../utils/helper.js";


function lightbox() {
  function openLightbox() {
    document.getElementById("lightbox-container").style.display = "flex";
    document.getElementById("lightbox-container").addEventListener("keydown", (event) => {
      console.log("test");
      test(event)
    });
  }

   function closeLightbox() {
     document.getElementById("lightbox-container").style.display = "none";
     document.getElementById("lightbox-container").removeEventListener("keydown", (e) => {
       test(event)
     } );
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
      if (objetCourant.image === undefined) {
        document.querySelector("#lightbox-img video").src = `assets/photographers/media/${objetCourant.video}`;
        document.querySelector("#lightbox-img img").src = "";
      }
       else {
         document.querySelector("#lightbox-img img").src = `assets/photographers/media/${objetCourant.image}`;
         document.querySelector(
           "#lightbox-img video"
         ).src = "";
       }
       document.querySelector("#lightbox-text").innerText = objetCourant.title;
       // Affichez l'objet où vous le souhaitez dans votre interface utilisateur
     }
     else {
       indexCourant = domElement.length;
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
       element.addEventListener("click", () => {
         openLightbox();
         const name = element.getAttribute("alt");
         const indexTrouve = domElement.findIndex(
           (objet) => objet.title === name
         );
         indexCourant = indexTrouve
         afficherObjet(indexCourant);
       });;
     });
}
export default lightbox;
