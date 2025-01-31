
const addproduct = () => {
    const productInput = document.getElementById("productinput")
    const qntityInput = document.getElementById("qntityinput") 
    const product = productInput.value
    const qntity = qntityInput.value 
    productInput.value = " "
    qntityInput.value = " "
    displayProduct(product, qntity)
    saveProductLocalStore(product,qntity)

}

const displayProduct = (product, qntity) => {

    const productlist = document.getElementById("productlist")
    const li = document.createElement("li")
    li.innerText = `${product} : ${qntity}`
    productlist.append(li)
}

const storeSopingCard = () =>{
    let cart = {}
    const storeCart = localStorage.getItem("cart")
    if (storeCart) {
        cart = JSON.parse(storeCart)
    }
    return cart
}


const saveProductLocalStore = (product,qntity) =>{
const cart = storeSopingCard()
cart[product] = qntity 
// console.log(cart);

const stringeyFied = JSON.stringify(cart)
// console.log(stringeyFied);

 localStorage.setItem(`cart`,stringeyFied)

}
const displayProductByShopingCard = ()=>{
    const saveCart = storeSopingCard()
    // console.log(saveCart);
    
    for(const product in  saveCart){
        // console.log(product);
        
        const qntity = saveCart[product] 
        // console.log(product,qntity);
        displayProduct(product,qntity)
    }
    
}

displayProductByShopingCard()


 
