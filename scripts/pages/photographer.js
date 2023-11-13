async function getPhotographers() {
    const request = await fetch("../../data/photographers.json");
    const response = await request.json();
    return response
}

async function filterPhotographersByIdMedia(id) {
    const photographers = await getPhotographers();
    const media = photographers.media
    const filteredPhotographerMedia = media.filter(photographer => photographer.photographerId == id);

    return filteredPhotographerMedia 
}
async function filterPhotographersByIdinfo(id) {
    const photographers = await getPhotographers();
    const info = photographers.photographers 
    const filteredPhotographerInfo = info.filter(photographer => photographer.id == id);

    return filteredPhotographerInfo
}

async function init() {
    // Récupère les datas des photographes
    const params = new URL(document.location).searchParams;
    const id = params.get('id');
    const media = await filterPhotographersByIdMedia(id);
    const info = await filterPhotographersByIdinfo(id)
    console.log(media);
    console.log(info);
}

init()

