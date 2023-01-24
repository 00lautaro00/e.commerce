import { notifierRender } from "../assets/modal/notifier.js";
import { init } from "../main.js";


export const cartState = async () => {
    let cartStateCount = localStorage.getItem("cart");
    let cartItemsId = localStorage.getItem("cartItemsId");
    const addCart = document.querySelectorAll(".item");

    addCart.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const item = e.target.alt
            const modal = document.getElementById("modal-confirm");
            modal.classList.remove("hidden")
            const buttonConfirm = document.getElementById("confirm")
            const buttonCancel = document.getElementById("cancel")
            buttonConfirm.addEventListener("click", () => buttonModalConfirm(cartStateCount,cartItemsId, item))
            buttonCancel.addEventListener("click", buttonModalCancel)
        })
    });
    
}
const buttonModalConfirm = async ( cartStateCount, cartItemsId, item ) => {
    const cartArray = cartItemsId.split(",");
    if(!cartItemsId) {
        cartItemsId = [cartItemsId, item];
        localStorage.setItem("cartItemsId",cartItemsId)
        cartStateCount = parseInt(cartStateCount) + 1
        localStorage.setItem("cart", cartStateCount);
    }else{
        const value = cartArray.every(id => id !== item);
       console.log("value",value)
            if(value){
                cartItemsId = [cartItemsId, item];
                console.log("cartItemsId", cartItemsId)
                localStorage.setItem("cartItemsId",cartItemsId);
                cartStateCount = parseInt(cartStateCount) + 1
                localStorage.setItem("cart", cartStateCount);
            }else{
                notifierRender("Product exist in the cart");
                const notifier = document.getElementById("notifier");
                notifier.classList.remove("hidden");
                setTimeout(() => {
                    notifier.classList.add("hidden");
                }, 1000)

            }
    }
    const modal = document.getElementById("modal-confirm");
    modal.classList.add("hidden");
    init()
}
const buttonModalCancel = async (  ) => {
    const modal = document.getElementById("modal-confirm");
    modal.classList.add("hidden");
}