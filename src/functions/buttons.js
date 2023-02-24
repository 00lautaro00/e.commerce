import { notifierRender } from "../assets/modal/notifier.js";
import { init } from "../main.js";
import { renderProductModal } from "./render.js";


export const cartState = async (dataElectronics, dataVideoGames, dataCell) => {

    let cartStateCount = sessionStorage.getItem("cart");
    const addCart = document.querySelectorAll(".item");
    const modal = document.getElementById("modal-confirm");
    const buttonConfirm = document.getElementById("confirm");
    const buttonCancel = document.getElementById("cancel");
   

const modalAction = async (e,id) => {
    e.preventDefault()
    e.stopImmediatePropagation();
        modal.classList.remove("hidden");
        sessionStorage.setItem("item", id);
        const render = await renderProductModal(dataElectronics, dataVideoGames, dataCell)
}


const buttonModalConfirm = async (e ) => {
    e.preventDefault()
    e.stopImmediatePropagation();
    let cartItemsId = sessionStorage.getItem("cartItemsId");
    let item = sessionStorage.getItem("item");

    if(item !== "undefined"){
           if(!cartItemsId) {
               modal.classList.add("hidden")
               cartStateCount = parseInt(cartStateCount) + 1
               sessionStorage.setItem("cart", JSON.stringify(cartStateCount));
               sessionStorage.setItem("cartItemsId", item);

               init();
   
           }else{
            const cartArray = cartItemsId.split(",");
            const value = cartArray.some(id => id === item);

                   if(!value){
                       modal.classList.add("hidden")
                       cartItemsId = [cartItemsId, item];
                       cartStateCount = parseInt(cartStateCount) + 1;
                       sessionStorage.setItem("cartItemsId",cartItemsId);
                       sessionStorage.setItem("cart", JSON.stringify(cartStateCount));
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

addCart.forEach((btn) => btn.addEventListener("click",(e)=> {
    const id = e.target.alt;
    modalAction(e,id)
}));
buttonCancel.addEventListener("click", buttonModalCancel);
buttonConfirm.addEventListener("click",  buttonModalConfirm);

setTimeout(() => {
    const cart = document.querySelectorAll("#cart-gallery");
    cart.forEach((btn) => {
        btn.addEventListener("click", (e) =>{
            e.preventDefault();
            e.stopImmediatePropagation();
            const id = e.target.dataset.id 
            modalAction(e,id)
        })
    })
}, 0)


}



export const tableModal = async () => {
    const user = document.getElementById("cart-user");
    const buttonCancel = document.getElementById("cancelTable");
    const modal = document.getElementById("table-modal")
    const deleteButtonInit = await deleteButton()


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

export const deleteButton = async (  ) => {
    setTimeout(() => {
        let cartStateCount = sessionStorage.getItem("cart");
        const deleteBtn  = document.querySelectorAll("#delete");
        deleteBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                const getButton = document.getElementById("delete");
                const idi = getButton.getAttribute("data-id");
                cartStateCount = parseInt(cartStateCount) - 1
               sessionStorage.setItem("cart", JSON.stringify(cartStateCount));
                const cart = sessionStorage.getItem("cartItemsId")
                const cartItems = cart ? cart.split(",") : [];
                const newCart = cartItems.filter(id => id !== idi);
                sessionStorage.setItem("cartItemsId", newCart);
            })
        })
    },0)
}
