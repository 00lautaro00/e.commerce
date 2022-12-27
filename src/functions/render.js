

export const renderCarrousel = async (data, carrouselImage) => {
    

    const images = await data ?  data.results.slice(4,7) : [];
    console.log(images)
    
     images.map(imgs => {
        // const div = document.createElement("div");
        //  div.classList.add("carousel-item");
        //  div.classList.add("active");
        // carrouselImage.append(div);
        // div.innerHTML = `<img src="${imgs.thumbnail}" class="d-block w-20"  alt="...">`
    });
} 