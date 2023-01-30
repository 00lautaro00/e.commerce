import { cartState } from "./functions/buttons.js";
import { renderCarrousel, renderCartState, renderCartUser, renderGallery, renderProductCart} from "./functions/render.js"
import {  carrouselImage , cardProductVideoGames, cardProductCell, cardGallery} from "./utils/dom.js"


const count = localStorage.getItem("cart");
if(!count)  localStorage.setItem("cart", JSON.stringify(0));

// localStorage.clear()
export const init = async (dataElectronics, dataVideoGames, dataCell) => {
    const carrouselInit = await renderCarrousel(dataElectronics, carrouselImage);
    const cardProductInit = await renderProductCart(dataElectronics, carrouselImage);
    const cardProductVideoGamesInit = await renderProductCart(dataVideoGames, cardProductVideoGames);
    const cardProductCellInit = await renderProductCart(dataCell,cardProductCell);
    const cartStateInit = await cartState(dataElectronics, dataVideoGames, dataCell);
    const renderCart = await renderCartState();
    const renderGalleryInit = await renderGallery(cardGallery, dataElectronics, dataVideoGames, dataCell);
    const renderCartUserInit = await renderCartUser(dataElectronics, dataCell, dataVideoGames);

}

init()