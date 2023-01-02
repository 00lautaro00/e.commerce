import { init } from "./src/main.js"

const urlElectronics ="https://api.mercadolibre.com/sites/MLA/search?category=MLA1648"
const urlVideoGames ="https://api.mercadolibre.com/sites/MLA/search?category=MLA1144"

const options = {
    headers:{
        authorization:"Bearer APP_USR-3078457136538659-122209-eb5082e18caa1f5171cfc9ddd649a169-480197504"
    }
}

const responseElectronics = await fetch(urlElectronics, options)
               .then(res => res.json())
               .then(data => data)

const responseVideoGames  = await fetch(urlVideoGames, options)
.then(res => res.json())
.then(data => data)

init(responseElectronics, responseVideoGames)

$(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });
    
    $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this); 
    
    for (var i=1;i<6;i++) {
    itemToClone = itemToClone.next();
    
    if (!itemToClone.length) {
    itemToClone = $(this).siblings(':first');
    }
    
    itemToClone.children(':first-child').clone()
    .addClass("cloneditem-"+(i))
    .appendTo($(this));
    }
    });
    });
    