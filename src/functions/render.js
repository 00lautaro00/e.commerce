

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


export const renderProductCart = async (data, cardProduct) => {

    const images = await data ?  data.results.slice(0,20) : [];
    console.log(data)
     images.map(imgs => {
        const divItem = document.createElement("div");
        const divCol = document.createElement("div");
        divItem.classList.add("item");
        imgs.id === "MLA1144239885" || imgs.id === "MLA1153864622" || imgs.id === "MLA1137697039" ? divItem.classList.add("active") : console.log("hello")
        divCol.classList.add("col-xs-12");
        divCol.classList.add("col-sm-6");
        divCol.classList.add("col-md-2");
        cardProduct.append(divItem)
       divItem.append(divCol)
        divCol.innerHTML = `
        <img src="${imgs.thumbnail}" alt="...">
         <div class="card-body">
         <p class="card-text"> ${imgs.title.slice(0,15)}</p>
         <span class="prices">$${imgs.price}</span>
         </div>
        `
    });
} 