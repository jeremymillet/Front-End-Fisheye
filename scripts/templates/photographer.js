function photographerTemplate(data,likes) {
    const { name, portrait, tagline, price, city, country, id } = data;
    const picture = `assets/photographers/${portrait}`;
    const totalLikes = likes
    function getUserCardDOM() {
        const article = document.createElement('article');
        const linkImg = document.createElement('a');
        const imgContainer = document.createElement('div');
        const textContainer = document.createElement('div');
        const img = document.createElement('img');
        linkImg.href = `photographer.html?id=${id}`
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photo de" + name);
        const h2 = document.createElement('h2');
        const localisation = document.createElement('p');
        const description = document.createElement('p');
        const prix = document.createElement('p');
        h2.textContent = name;
        localisation.textContent = city + ',' + country;
        localisation.classList.add('localisation');
        description.textContent = tagline;
        description.classList.add('tagline');
        prix.textContent = price + '€/jour';
        prix.classList.add('price');
        article.appendChild(linkImg);
        linkImg.appendChild(imgContainer);
        article.appendChild(textContainer);
        imgContainer.appendChild(img);
        linkImg.appendChild(h2);
        textContainer.appendChild(localisation);
        textContainer.appendChild(description);
        textContainer.appendChild(prix);
        return (article);
    };

    function getPhotographerHeaderDom() {
        const modalName = document.querySelector(".photographer-name");
        modalName.innerHTML = name;
        const photographersSection = document.querySelector(".photograph-header");
        const h2 = document.createElement('h2');
        const localisation = document.createElement('h3');
        const description = document.createElement('p');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const textContainer = document.createElement('div');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        imgContainer.classList.add("photograph-header-container-img");
        textContainer.classList.add("photograph-header-container-text");
        description.classList.add("tagline");
        localisation.classList.add('localisation');
        h2.textContent = name;
        localisation.textContent = city + ',' + country;
        description.textContent = tagline;
        photographersSection.appendChild(textContainer);
        photographersSection.appendChild(imgContainer);
        textContainer.appendChild(h2);
        textContainer.appendChild(localisation);
        textContainer.appendChild(description);
        imgContainer.appendChild(img);

        const totalLikesContainer = document.createElement('div');
        totalLikesContainer.classList.add("total-likes-container");
        const totalLikesTextContainer = document.createElement('div');
        const icon = document.createElement('div');
        icon.innerHTML = '<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M11.125 21.35L9.85625 20.03C5.35 15.36 2.375 12.28 2.375 8.5C2.375 5.42 4.4925 3 7.1875 3C8.71 3 10.1712 3.81 11.125 5.09C12.0787 3.81 13.54 3 15.0625 3C17.7575 3 19.875 5.42 19.875 8.5C19.875 12.28 16.9 15.36 12.3938 20.04L11.125 21.35Z" fill="black"/></svg>'
        const totalLikesText = document.createElement('p');
        const prix = document.createElement('p')
        totalLikesText.textContent = totalLikes 
        totalLikesText.classList.add('all-likes');
        prix.textContent = price + '€/jour'
        totalLikesTextContainer.appendChild(totalLikesText);
        totalLikesTextContainer.appendChild(icon)
        totalLikesContainer.appendChild(totalLikesTextContainer)
        totalLikesContainer.appendChild(prix);
        photographersSection.appendChild(totalLikesContainer)
        
        return (photographersSection)
    };
    return { name, picture,tagline,price,city,country, getUserCardDOM, getPhotographerHeaderDom}
}