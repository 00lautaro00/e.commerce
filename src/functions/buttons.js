import { init } from "../main.js";


export const cartState = async () => {
    const addCart = document.querySelectorAll(".item");
    // console.log(addCart)
    let cartStateCount = localStorage.getItem("cart")
    addCart.forEach(btn => {
        btn.addEventListener("click", (e) => {
            console.log(btn)
            console.log(e.target.alt)
            // cartStateCount = parseInt(cartStateCount) + 1
            // localStorage.setItem("cart", cartStateCount);
            // init()
        })
    });
    
}