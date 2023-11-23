function mediaTemplate(data) {
    const { image, title, likes,video } = data;
    const photographImg = `assets/photographers/media/${image}`;
    const photographVod = `assets/photographers/media/${video}`;
    function getPhotographerMediaDom() {
        const photographersSectionMedia = document.querySelector(".photograph-media");

        if (image === undefined) { 
            const video = document.createElement('video');
            video.setAttribute('src', photographVod);
            video.setAttribute("alt", title);
            const videoContainer = document.createElement('div');
            videoContainer.appendChild(video);
            const textcontainerMedia = document.createElement('div');
            const pictureName = document.createElement('p');
            const nbLikes = document.createElement('p');
            const likeIcon = document.createElement('img');
            const likeContainer = document.createElement('div');
            likeContainer.appendChild(nbLikes);
            likeContainer.appendChild(likeIcon);
            likeIcon.setAttribute("src","./assets/icons/hearth.svg"); 
            pictureName.textContent = title;
            nbLikes.textContent = likes;
            textcontainerMedia.classList.add('media-text-container');
            textcontainerMedia.appendChild(pictureName);
            textcontainerMedia.appendChild(likeContainer);
            videoContainer.appendChild(textcontainerMedia)
            photographersSectionMedia.appendChild(videoContainer);
        }
        else {
            const img = document.createElement('img');
            img.setAttribute("src", photographImg);
            img.setAttribute("alt", title);
            const textcontainerMedia = document.createElement('div');
            const pictureName = document.createElement('p');
            const nbLikes = document.createElement('p');
            pictureName.textContent = title;
            nbLikes.textContent = likes;
            const likeIcon = document.createElement('img');
            const likeContainer = document.createElement('div');
            likeContainer.appendChild(nbLikes);
            likeContainer.appendChild(likeIcon);
            likeIcon.setAttribute("src", "./assets/icons/hearth.svg");
            textcontainerMedia.classList.add('media-text-container');
            textcontainerMedia.appendChild(pictureName);
            textcontainerMedia.appendChild(likeContainer);
            const pictureContainer = document.createElement('div');
            pictureContainer.appendChild(img);
            pictureContainer.appendChild(textcontainerMedia)
            photographersSectionMedia.appendChild(pictureContainer);

        }
      
    }
    return { getPhotographerMediaDom }
}
