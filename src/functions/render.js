

export const renderCarrousel = async (data, carrouselImage) => {
    

    const images = await data ?  data.results.slice(4,7) : [];
     images.map(imgs => {
        // const div = document.createElement("div");
        //  div.classList.add("carousel-item");
        //  div.classList.add("active");
        // carrouselImage.append(div);
        // div.innerHTML = `<img src="${imgs.thumbnail}" class="d-block w-20"  alt="...">`
    });
}


export const renderProductCart = async (data, cardProduct) => {

    const images = await data ?  data.results.slice(0,8) : [];
    
     images.map(imgs => {
        const a = document.createElement("a");
        const div = document.createElement("div");
        a.classList.add("product")
        div.classList.add("card");
        div.classList.add("w-product");
        cardProduct.append(a)
        a.append(div);
        div.innerHTML = `<img src="${imgs.thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text"> ${imgs.title.slice(0,18)}</p>
                        <span class="prices">$${imgs.price}</span>
                        </div>`
    });
} 