import { init } from "../main.js";

let cartStateCount = localStorage.getItem("cart")

export const cartState = async () => {
    const addCart = document.querySelectorAll(".item");
    addCart.forEach(btn => {
        btn.addEventListener("click", (e) => {
            console.log(btn)
            console.log(e.target.alt)
            
            const modal = document.getElementById("modal-confirm");
            modal.classList.remove("hidden")
            const buttonConfirm = document.getElementById("confirm")
            const buttonCancel = document.getElementById("cancel")
            buttonConfirm.addEventListener("click", buttonModalConfirm)
            buttonCancel.addEventListener("click", buttonModalCancel)
        })
    });
    
}
const buttonModalConfirm = async (  ) => {
    cartStateCount = parseInt(cartStateCount) + 1
    localStorage.setItem("cart", cartStateCount);
    const modal = document.getElementById("modal-confirm");
    modal.classList.add("hidden");
    init()
}
const buttonModalCancel = async (  ) => {
    const modal = document.getElementById("modal-confirm");
    modal.classList.add("hidden");
}