import { notifierRender } from "../assets/modal/notifier.js";
import { init } from "../main.js";
import { renderProductModal } from "./render.js";


export const cartState = async (dataElectronics, dataVideoGames, dataCell) => {

    let cartStateCount = localStorage.getItem("cart");
    const addCart = document.querySelectorAll(".item");
    const modal = document.getElementById("modal-confirm");
    const buttonConfirm = document.getElementById("confirm");
    const buttonCancel = document.getElementById("cancel");

const modalAction = async (e) => {
    e.preventDefault()
    e.stopImmediatePropagation();
        modal.classList.remove("hidden");
        localStorage.setItem("item", e.target.alt);
        const render = await renderProductModal(dataElectronics, dataVideoGames, dataCell)
}



const buttonModalConfirm = async (e ) => {
    e.preventDefault()
    e.stopImmediatePropagation();
    let cartItemsId = localStorage.getItem("cartItemsId");
    let item = localStorage.getItem("item");

    if(item !== "undefined"){
           if(!cartItemsId) {
               modal.classList.add("hidden")
               cartStateCount = parseInt(cartStateCount) + 1
               localStorage.setItem("cart", JSON.stringify(cartStateCount));
               localStorage.setItem("cartItemsId", item);

               init();
   
           }else{
            const cartArray = cartItemsId.split(",");
            const value = cartArray.some(id => id === item);

                   if(!value){
                       modal.classList.add("hidden")
                       cartItemsId = [cartItemsId, item];
                       cartStateCount = parseInt(cartStateCount) + 1;
                       localStorage.setItem("cartItemsId",cartItemsId);
                       localStorage.setItem("cart", JSON.stringify(cartStateCount));
                       init()
                   }else{
                       modal.classList.add("hidden")
                       notifierRender("Product exist in the cart");
                       const notifier = document.getElementById("notifier");
                       notifier.classList.remove("hidden");
                       setTimeout(() => {
                           notifier.classList.add("hidden");
                       }, 1500)
                   }
           }
    }else{
        modal.classList.add("hidden");
        notifierRender("Product not found");
        const notifier = document.getElementById("notifier");
        notifier.classList.remove("hidden");
        setTimeout(() => { notifier.classList.add("hidden")}, 1500)
    }
     
}


const buttonModalCancel = async (  ) =>  modal.classList.add("hidden");

addCart.forEach((btn) => btn.addEventListener("click", modalAction));
buttonCancel.addEventListener("click", buttonModalCancel);
buttonConfirm.addEventListener("click",  buttonModalConfirm);


}



export const tableModal = async () => {
    const user = document.getElementById("cart-user");
    const buttonCancel = document.getElementById("cancel");
    const modal = document.getElementById("table-modal")


    user.addEventListener("click" , (e) =>{
        e.preventDefault()
        e.stopImmediatePropagation();
        if(e) {
            const table = document.getElementById("table-modal");
            table.classList.remove("hidden"); 
            buttonCancel.addEventListener("click", buttonModalCancel);

        }
    })
const buttonModalCancel = async (  ) =>  modal.classList.add("hidden");

}
 