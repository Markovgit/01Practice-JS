let allTotal = 0 ;

function addToCart(element)
{

    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    

    if(parseInt(quantity) > 0){

       quantity= parseInt(quantity);

        price = price.substring(1);
        price = parseInt(price);

        let total = price * quantity; 
       
        allTotal += total;

        cartItems.innerHTML += `<div class = "cart-single-item">
  
                                   <h3>${name}</h3>
                                   <p>$${price} x ${quantity} = $<span>${total}</span> </p>
                                   <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>            
                                 </div>` ; 


         
                                 
        document.querySelector('.total').innerText = `Total: $${allTotal} ` ;                          
        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');




    }else {
        alert('Odaberite kolicinu')
    }

    
}



function removeFromCart(element)
{
let mainEl = element.closest('.cart-single-item');
let price = mainEl.querySelector('p span').innerText;
let name = mainEl.querySelector('h3').innerText;
let asortiman = document.querySelectorAll('.single-item');
price = parseInt(price);

allTotal -= price; 

document.querySelector('.total').innerText =`Total: $ ${allTotal}`;

mainEl.remove();



asortiman.forEach(function(balm)
{
    let itemName = balm.querySelector('.si-content h3'). innerText;
    if (itemName === name) {
        balm.querySelector('.actions input').value = 0;
        balm.querySelector('.actions button').removeAttribute('disabled');
        balm.querySelector('.actions button').innerText = 'Dodaj';
    }

})

}