


export const renderCartState = async () => {
    const cartRenderCount = document.getElementById("cart");
    const countCart = sessionStorage.getItem("cart");
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
        imgs.id === "MLA1314590445" || imgs.id === "MLA1329010033" || imgs.id === "MLA1142471087" ? divItem.classList.add("active") : ''
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
    
    const imagesElectronics = await dataElectronics ?  dataElectronics?.results.slice(0,5) : [];
    const imagesCell = await dataCell ?  dataCell?.results.slice(0,5) : [];
    const imagesVideoGames = await dataVideoGames ?  dataVideoGames?.results.slice(0,6) : [];

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
    allProduct.map((imgs, index) => {
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
            <button class="cart-add" id="cart-button"> <i class="fa-sharp fa-solid fa-cart-plus icon-size " id="cart-gallery" data-id="${imgs[0].id}"></i> </button> 
           </div>
        </div>
        `
    });

}


export const renderProductModal = async (dataElectronics, dataVideoGames, dataCell) => {
    const div = document.getElementById("productModal"); 
    const itemId = sessionStorage.getItem("item");
    
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
        let fullCart = []
        const itemsforIds = sessionStorage.getItem("cartItemsId");
        const itemsforIdsArray = itemsforIds ? itemsforIds.split(",") : []
        const div = document.getElementById("card-table");
        const table = document.createElement("table");
        const imagesElectronics = await dataElectronics ?  dataElectronics?.results.slice(0,20) : [];
        const imagesCell = await dataCell ?  dataCell?.results.slice(0,20) : [];
        const imagesVideoGames = await dataVideoGames ?  dataVideoGames?.results.slice(0,20) : [];
        const allProduct = [...imagesCell, ...imagesElectronics, ...imagesVideoGames];

        table.classList.add("table");
        div.append(table);

        itemsforIdsArray.map( product => {
            if(!!itemsforIdsArray.length){
                 const cart = allProduct.filter( ids => product === ids.id);
                 fullCart = [...fullCart,...cart]
                 
            }else{
                return fullCart = []
            }
        })

        fullCart.map((imgs, index) => {
            const tbody = document.createElement("tbody");
            const tr = document.createElement("tr");
            table.append(tbody)
            tbody.append(tr);
           if(!fullCart.length){
            tr.innerHTML=`<h3> Empty cart </h3>`
         
           }else{
            tr.innerHTML=
            `
                <th scope="row">${index + 1}</th>
                <td>${imgs.title}</td>
                <td>$${imgs.price}</td>
                <td>
                <button class="btn btn-danger" id="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
                </td>
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


