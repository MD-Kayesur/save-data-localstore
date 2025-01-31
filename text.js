const addproduct = ()=>{
    const productInput = document.getElementById("productinput")
    const qntityInput = document.getElementById("qntityinput")
    const product=productInput.value
    const qntity =qntityInput.value
     productInput.value = " "
     qntityInput.value = " "
//    console.log(product,qntity);
   displayProductQntity(product,qntity)
   saveInLocalStore(product,qntity)
}

const displayProductQntity = (product,qntity) =>{
    const ul = document.getElementById("productlist")
    const li = document.createElement("li")
    li.innerText=`${product} : ${qntity}`
    ul.append(li)
    
}

const getDateFromLocalStore = ()=>{
    let cart= {}
    const getCart = localStorage.getItem("cart")
    if(getCart){
        cart = JSON.parse(getCart)
    }
    return cart
}

 const saveInLocalStore  =(product,qntity)=>{
const cart = getDateFromLocalStore()
cart[product]=qntity

// console.log(cart);

const stringeyFied = JSON.stringify(cart)
 

localStorage.setItem("cart",stringeyFied) 
 



 }

 const displayShopingCard=()=>{
    const saveCart = getDateFromLocalStore()
    // console.log(saveCart);

    for(const product in  saveCart){
        // console.log(product);
        
        const qntity = saveCart[product] 
        // console.log(product,qntity);
        displayProductQntity(product,qntity)
    }
    
 }

 displayShopingCard()

 