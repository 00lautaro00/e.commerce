import { renderCarrousel} from "./functions/render.js"
import {  carrouselImage } from "./utils/dom.js"

export const init = async (data) => {
    const carrouselInit = await renderCarrousel(data, carrouselImage);
    // const cardProductInit = await renderProductCart(data, cardProduct);
}

init()