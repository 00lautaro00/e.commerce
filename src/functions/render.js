

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
    // console.log(data)
     images.map(imgs => {
        const a = document.createElement("a")
        const divItem = document.createElement("div");
        const divCol = document.createElement("div");
        divItem.classList.add("item");
        imgs.id === "MLA1310545723" || imgs.id === "MLA928038046" || imgs.id === "MLA1234364405" ? divItem.classList.add("active") : ''
        divCol.classList.add("col-xs-12");
        divCol.classList.add("col-sm-6");
        divCol.classList.add("col-md-2");
        divCol.classList.add("product");
        cardProduct.append(divItem)
       divItem.append(a)
       a.append(divCol)
        divCol.innerHTML = `
         <div class="card-product-container" >
         <img class="" id="imageProduct" src="${imgs.thumbnail}" alt=${imgs.id} >
         </div>
        `
    });
} 

export const renderGallery = async (cardGallery, dataElectronics,  dataVideoGames, dataCell) => {
    
    
    const imagesElectronics = await dataElectronics ?  dataElectronics?.results.slice(0,20) : [];
    const imagesCell = await dataCell ?  dataCell?.results.slice(0,20) : [];
    const imagesVideoGames = await dataVideoGames ?  dataVideoGames?.results.slice(0,20) : [];

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
        const div = document.createElement("div");
        cardGallery.append(div)
        div.innerHTML = 
        `
        <div class="image-gallery " data-name=${imgs[1].filterCategory} >
            <span>
               <img src=${imgs[0].thumbnail} alt=${imgs[0].title}>
            </span>
          <div class="">
            <p class="card-text"> ${imgs[0].title.slice(0,15)}</p>
            <span class="prices">$${imgs[0].price}</span>
            <button class="cart-add" id="cart-button"> <i class="fa-sharp fa-solid fa-cart-plus icon-size"></i> </button> 
           </div>
        </div>
        `
    });

}

export const renderProductModal = async (dataElectronics, dataVideoGames, dataCell) => {
    const div = document.getElementById("productModal"); 
    const itemId = localStorage.getItem("item");
    
    const imagesElectronics = await dataElectronics ?  dataElectronics?.results.slice(0,20) : [];
    const imagesCell = await dataCell ?  dataCell?.results.slice(0,20) : [];
    const imagesVideoGames = await dataVideoGames ?  dataVideoGames?.results.slice(0,20) : [];
    const allProduct = [...imagesElectronics, ...imagesCell, ...imagesVideoGames];
    
    
    const product = allProduct.find( ids => ids.id === itemId);
    div.innerHTML = 
                    `
                    <div class="card-product-container" >
                    <img class="" id="imageProduct" src="${product ? product.thumbnail 
                        : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"}" alt=${"id"} >
                    <div class="card-body">
                     <p class="card-text"> ${product ? product.title.slice(0,40) : ""}</p>
                     <span class="prices">$${product ? product.price : ""}</span>
                     </div>
                    
                    </div> 
                    `
}


export const renderCartUser = async (dataElectronics, dataCell, dataVideoGames ) => {

            // const div = document.getElementsByClassName("card-body"); 
        let fullCart
        const itemsforIds = localStorage.getItem("cartItemsId");
        const itemsforIdsArray = itemsforIds ? itemsforIds.split(",") : []
        const table = document.getElementById("table-cart")
        const imagesElectronics = await dataElectronics ?  dataElectronics?.results.slice(0,20) : [];
        const imagesCell = await dataCell ?  dataCell?.results.slice(0,20) : [];
        const imagesVideoGames = await dataVideoGames ?  dataVideoGames?.results.slice(0,20) : [];
        const allProduct = [...imagesCell, ...imagesElectronics, ...imagesVideoGames];
        console.log(itemsforIdsArray)
        itemsforIdsArray.map( product => {
            if(!!itemsforIdsArray.length){
                 fullCart = allProduct.filter( ids => ids.id === product );
            }
            return fullCart
        })
        fullCart.map(imgs => {
           if(table){
            table.innerHTML=
            `
            <thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Name</th>
  <th scope="col">Price</th>
  <th scope="col">Action</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>${imgs.title}</td>
  <td>${imgs.price}</td>
  <td><button>delete</button></td>
</tr>
</tbody>
            `
           }
        })
}

{/* <div>
<div class="card-body">
         <p class="card-text"> ${imgs.title.slice(0,15)}</p>
         <span class="prices">$${imgs.price}</span>
         </div>
         <i class="fa-solid fa-cart-circle-plus"></i>
         </div>
           <button class="cart-add" id="cart-button"> <i class="fa-sharp fa-solid fa-cart-plus icon-size"></i> </button> */
        }


