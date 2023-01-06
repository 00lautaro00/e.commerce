import { cartState } from "./functions/buttons.js";
import { renderCarrousel, renderProductCart} from "./functions/render.js"
import {  carrouselImage , cardProductVideoGames, cardProductCell, addCart} from "./utils/dom.js"


const cartCount = 0
localStorage.setItem("count", cartCount);

export const init = async (dataElectronics, dataVidoGames, dataCell) => {
    const carrouselInit = await renderCarrousel(dataElectronics, carrouselImage);
    const cardProductInit = await renderProductCart(dataElectronics, carrouselImage);
    const cardProductVideoGamesInit = await renderProductCart(dataVidoGames, cardProductVideoGames);
    const cardProductCellInit = await renderProductCart(dataCell,cardProductCell);
    const cartStateInit = await cartState(addCart, cartCount);

}

init()