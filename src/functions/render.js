

export const renderCarrousel = async (data, carrouselImage) => {
    

    // const images = await data ?  data.results.slice(0,9) : [];
    //  images.map(imgs => {
    //     const a = document.createElement("a");
    //     const div = document.createElement("div");
    //     div.classList.add("card");
    //     div.classList.add("w-product");
    //      div.classList.add("item-slide");
    //     carrouselImage.append(div);
    //     div.innerHTML = 
    //     `
    //     <img src="${imgs.thumbnail}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //     <p class="card-text"> ${imgs.title.slice(0,18)}</p>
    //     <span class="prices">$${imgs.price}</span>
    //     </div>
    //     `
    // });
}
export const renderCartState = async () => {
    const cartRenderCount = document.getElementById("cart");
    const countCart = localStorage.getItem("cart");
    cartRenderCount.innerHTML = 
                                `
                                <span class="cart-state">${countCart}</span>
                                `
}

export const renderProductCart = async (data, cardProduct) => {

    const images = await data ?  data.results.slice(0,10) : [];
    console.log(data)
     images.map(imgs => {
        const detail = imgs.title + imgs.price
        const a = document.createElement("a")
        const divItem = document.createElement("div");
        const divCol = document.createElement("div");
        divItem.classList.add("item");
        imgs.id === "MLA1236113102" || imgs.id === "MLA1297804431" || imgs.id === "MLA1311305496" ? divItem.classList.add("active") : ''
        divCol.classList.add("col-xs-12");
        divCol.classList.add("col-sm-6");
        divCol.classList.add("col-md-2");
        divCol.classList.add("product");
        cardProduct.append(divItem)
       divItem.append(a)
       a.append(divCol)
        divCol.innerHTML = `
         <div class="card-product-container" >
         <img class="image" src="${imgs.thumbnail}" alt=${imgs.id} >
         <div class="card-body">
         <p class="card-text"> ${imgs.title.slice(0,15)}</p>
         <span class="prices">$${imgs.price}</span>
         </div>
         </div>
        `
    });
} 

export const renderGallery = async (cardGallery, dataElectronics, dataCell, dataVidoGames) => {
    
    
    const imagesElectronics = await dataElectronics ?  dataElectronics?.results.slice(0,20) : [];
    const imagesCell = await dataCell ?  dataCell?.results.slice(0,20) : [];
    const imagesVideoGames = await dataVidoGames ?  dataVidoGames?.results.slice(0,20) : [];

    const electronics = imagesElectronics.map(data => {
        let elec = [];
        elec = [...elec, data, {filterCategory: "PC"}]
        return elec
    })
    const cell = imagesCell.map(data => {
        let elec = [];
        elec = [...elec, data, {filterCategory: "CELL"}]
        return elec
    })
    const videoGames = imagesVideoGames.map(data => {
        let elec = [];
        elec = [...elec, data, {filterCategory: "VIDEOGAMES"}]
        return elec
    })
    

    const allProduct = [...cell, ...electronics, ...videoGames];
    allProduct.map(imgs => {
        console.log(imgs[1].filterCategory)
        const div = document.createElement("div");
        cardGallery.append(div)
        div.innerHTML = 
        `
        <div class="image-gallery" data-name="smootie" id=${imgs[1].filterCategory}><span><img src=${imgs[0].thumbnail} alt="smootieDark"></span></div>
        `
    });

}

{/* <div>
         <i class="fa-solid fa-cart-circle-plus"></i>
         </div>
           <button class="cart-add" id="cart-button"> <i class="fa-sharp fa-solid fa-cart-plus icon-size"></i> </button> */}