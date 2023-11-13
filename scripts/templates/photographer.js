function photographerTemplate(data) {
    const { name, portrait,tagline,price,city,country,id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const linkImg = document.createElement('a');
        const imgContainer = document.createElement('div');
        const textContainer = document.createElement('div');
        const img = document.createElement('img');
        linkImg.href = `photographer.html?id=${id}`
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
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
    }
    function getPhotographerHeaderDom() {
        
    }
    return { name, picture,tagline,price,city,country, getUserCardDOM,getPhotographerHeaderDom }
}