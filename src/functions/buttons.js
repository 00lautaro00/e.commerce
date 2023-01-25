import { notifierRender } from "../assets/modal/notifier.js";
import { init } from "../main.js";
import { renderProductModal } from "./render.js";


export const cartState = async (dataElectronics, dataVideoGames, dataCell) => {

    let cartStateCount = localStorage.getItem("cart");
    const addCart = document.querySelectorAll(".item");
    let cartItemsId = localStorage.getItem("cartItemsId");
    const modal = document.getElementById("modal-confirm");
    const buttonConfirm = document.getElementById("confirm");
    const buttonCancel = document.getElementById("cancel");
    const cartArray = cartItemsId.split(",");

const modalAction = async (e) => {
        modal.classList.remove("hidden");
        localStorage.setItem("item", e.target.alt);
        const render = await renderProductModal(dataElectronics, dataVideoGames, dataCell)
}



const buttonModalConfirm = async ( ) => {

    let item = localStorage.getItem("item");
    const value = cartArray.some(id => id === item);

    console.log("item", item);
    console.log("value", value);


        if(!cartItemsId) {
            modal.classList.add("hidden")
            cartItemsId = [cartItemsId, item];
            cartStateCount = parseInt(cartStateCount) + 1
            localStorage.setItem("cart", cartStateCount);
            localStorage.setItem("cartItemsId",cartItemsId)
            init();

        }else{
           console.log("value",value)
                if(!value){
                    modal.classList.add("hidden")
                    cartItemsId = [cartItemsId, item];
                    cartStateCount = parseInt(cartStateCount) + 1;
                    localStorage.setItem("cartItemsId",cartItemsId);
                    localStorage.setItem("cart", cartStateCount);
                    init()
                }else{
                    modal.classList.add("hidden")
                    notifierRender("Product exist in the cart");
                    const notifier = document.getElementById("notifier");
                    notifier.classList.remove("hidden");
                    setTimeout(() => {
                        notifier.classList.add("hidden");
                    }, 1000)
                }
        }
        
}
const buttonModalCancel = async (  ) =>  modal.classList.add("hidden");



addCart.forEach((btn) => btn.addEventListener("click", modalAction));
buttonCancel.addEventListener("click", buttonModalCancel);
 buttonConfirm.addEventListener("click",  buttonModalConfirm);


}
