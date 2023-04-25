let allItems = document.querySelector('.cont .item-box');
let searchInput = document.querySelector('.cont input');


let getProducts = (query="")=>{
    let li = '';
    data.forEach((item)=>{
        if(item.productName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1){
            li+= `
            <div class = 'item'>
            <div class='img'>
            <img src='${item.productImg}' alt=${item.productName} >
            </div>
            <span>${item.productName}</span>
            <h4 class='product-price' >  ${item.productPrice}</h4>
            </div>
            `
        }
        else
        if(item.productPrice.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1){
            li+= `
            <div class = 'item'>
            <div class='img'>
            <img src='${item.productImg}' alt='' >
            </div>
            <span>${item.productName}</span>
            <h4 class='product-price' >  ${item.productPrice}</h4>
            </div>
            `
        }
    })
    allItems.innerHTML=li;

}

searchInput.onkeyup=(e)=>{
    getProducts(e.target.value);
}
getProducts