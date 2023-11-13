import { getPhotographers } from "../utils/helper.js"

async function filterPhotographersByIdMedia(id,data) {
    const media = data.media
    const filteredPhotographerMedia = media.filter(photographer => photographer.photographerId == id);

    return filteredPhotographerMedia 
}
async function filterPhotographersByIdinfo(id,data) {
    const info = data.photographers 
    const filteredPhotographerInfo = info.filter(photographer => photographer.id == id);

    return filteredPhotographerInfo
}

async function init() {
    // Récupère les datas des photographes
    const params = new URL(document.location).searchParams;
    const id = params.get('id');
    const photographers = await getPhotographers();
    const media = await filterPhotographersByIdMedia(id,photographers);
    const info = await filterPhotographersByIdinfo(id,photographers)
    console.log(media);
    console.log(info);
}

init()

