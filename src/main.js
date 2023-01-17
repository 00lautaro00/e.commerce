import { cartState } from "./functions/buttons.js";
import { renderCarrousel, renderCartState, renderProductCart} from "./functions/render.js"
import {  carrouselImage , cardProductVideoGames, cardProductCell} from "./utils/dom.js"


const count = localStorage.getItem("cart");
// if(count === 0)  localStorage.setItem("cart", 0) 
localStorage.setItem("cart", 0) 



export const init = async (dataElectronics, dataVidoGames, dataCell) => {
    const carrouselInit = await renderCarrousel(dataElectronics, carrouselImage);
    const cardProductInit = await renderProductCart(dataElectronics, carrouselImage);
    const cardProductVideoGamesInit = await renderProductCart(dataVidoGames, cardProductVideoGames);
    const cardProductCellInit = await renderProductCart(dataCell,cardProductCell);
    const cartStateInit = await cartState();
    const renderCart = await renderCartState()

}

init()