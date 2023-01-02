import { renderCarrousel, renderProductCart} from "./functions/render.js"
import {  carrouselImage , cardProduct, cardProductVideoGames} from "./utils/dom.js"

export const init = async (dataElectronics, dataVidoGames) => {
    const carrouselInit = await renderCarrousel(dataElectronics, carrouselImage);
    const cardProductInit = await renderProductCart(dataElectronics, carrouselImage);
    const cardProductVideoGamesInit = await renderProductCart(dataVidoGames, cardProductVideoGames);
}

init()