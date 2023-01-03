import { renderCarrousel, renderProductCart} from "./functions/render.js"
import {  carrouselImage , cardProductVideoGames, cardProductCell} from "./utils/dom.js"

export const init = async (dataElectronics, dataVidoGames, dataCell) => {
    const carrouselInit = await renderCarrousel(dataElectronics, carrouselImage);
    const cardProductInit = await renderProductCart(dataElectronics, carrouselImage);
    const cardProductVideoGamesInit = await renderProductCart(dataVidoGames, cardProductVideoGames);
    const cardProductCellInit = await renderProductCart(dataCell,cardProductCell);

}

init()