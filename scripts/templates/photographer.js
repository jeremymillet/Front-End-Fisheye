function photographerTemplate(data) {
    console.log(data);
    const { name, portrait, tagline, price, city, country, id,image,title,likes } = data;
    const picture = `assets/photographers/${portrait}`;

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
        
        return (photographersSection)
    };
    return { name, picture,tagline,price,city,country, getUserCardDOM, getPhotographerHeaderDom}
}