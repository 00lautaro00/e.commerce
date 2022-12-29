

export const renderCarrousel = async (data, carrouselImage) => {
    

    const images = await data ?  data.results.slice(0,9) : [];
     images.map(imgs => {
        const a = document.createElement("a");
        const div = document.createElement("div");
        a.classList.add("product")
        div.classList.add("card");
        div.classList.add("w-product");
         div.classList.add("item-slide");
        carrouselImage.append(div);
        div.innerHTML = 
        `
        <img src="${imgs.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text"> ${imgs.title.slice(0,18)}</p>
        <span class="prices">$${imgs.price}</span>
        </div>
        `
    });
}


// export const renderProductCart = async (data, cardProduct) => {

//     const images = await data ?  data.results.slice(0,8) : [];
    
//      images.map(imgs => {
//         const a = document.createElement("a");
//         const div = document.createElement("div");
//         a.classList.add("product")
//         div.classList.add("card");
//         div.classList.add("w-product");
//         cardProduct.append(a)
//         a.append(div);
//         div.innerHTML = `<img src="${imgs.thumbnail}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                         <p class="card-text"> ${imgs.title.slice(0,18)}</p>
//                         <span class="prices">$${imgs.price}</span>
//                         </div>`
//     });
// } 