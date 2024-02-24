function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    



    // parse Float sluzi ya prevaranje stringa u broj 

inflationRate =  parseFloat(inflationRate.value);
money = parseFloat(money.value); 


let years = document.querySelector('#years').value;
years = parseFloat(years);

    // ovo je formula za izracun inflacije  za prvu godinu  
let worth = money + ( money * (inflationRate / 100));

// petlja koja ukljucuje formulu za ostale godine 


for (let  i = 1 ; i < years ; i++) {

    worth += worth * (inflationRate / 100);
}
//skracujemo na 2 decimale
worth =worth.toFixed(2);
// kreiranje novog elementa  preko JS 
let newElement = document.createElement('div');
newElement.className = 'new-value';
newElement.innerText = `Danasnji ${money} e vrijedi isto kao ${worth}e za ${years} godina . `;
//postavljanje kreiranog elementa u container 
document.querySelector('.container').appendChild(newElement);

}


