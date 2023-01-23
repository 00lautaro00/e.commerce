import { init } from "../main.js";


export const cartState = async () => {
    let cartStateCount = localStorage.getItem("cart");

    const addCart = document.querySelectorAll(".item");
    addCart.forEach(btn => {
        btn.addEventListener("click", (e) => {
            
            const modal = document.getElementById("modal-confirm");
            modal.classList.remove("hidden")
            const buttonConfirm = document.getElementById("confirm")
            const buttonCancel = document.getElementById("cancel")
            buttonConfirm.addEventListener("click", () => buttonModalConfirm(cartStateCount))
            buttonCancel.addEventListener("click", buttonModalCancel)
        })
    });
    
}
const buttonModalConfirm = async ( cartStateCount ) => {
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