import { init } from "./src/main.js"

const url ="https://api.mercadolibre.com/sites/MLA/search?category=MLA1648"
const options = {
    headers:{
        authorization:"Bearer APP_USR-3078457136538659-122209-eb5082e18caa1f5171cfc9ddd649a169-480197504"
    }
}

const response = await fetch(url, options)
               .then(res => res.json())
               .then(data => data)

init(response)