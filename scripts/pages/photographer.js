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

async function displayData(info, media) {
    let totalLikes = 0;
    media.forEach((media) => {
        totalLikes += media.likes;
        const mediaModel = mediaTemplate(media, totalLikes);
        const photographerMediaDom = mediaModel.getPhotographerMediaDom()
    });
    const photographerModel = photographerTemplate(info,totalLikes);
    const PhotographerHeaderDom = photographerModel.getPhotographerHeaderDom();
};

async function init() {
    // Récupère les datas des photographes
    const params = new URL(document.location).searchParams;
    const id = params.get('id');
    const photographers = await getPhotographers();
    const media = await filterPhotographersByIdMedia(id,photographers);
    const info = await filterPhotographersByIdinfo(id, photographers)
    displayData(info[0],media)
}

init()

