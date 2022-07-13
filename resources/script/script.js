let button = document.getElementById("button");
let img = document.getElementById("image");
let msg = document.getElementById("msg");

//Array Quotes
const quotes = [
    {
        quote:"Cuanto mais esprientes a gente estejamos. Mais conhessimentu tamos. Melhor tamém estamos.",
        author: "Jorge Jesus",
        image: './resources/img/jjesus.jpg'
    },
    {
        quote:  "Comigo, ou ‘sem-migo’, o Porto vai ser campeão!",
        author: "João Pinto",
        image: './resources/img/jpinto.jpg'
    },
    {
        quote:"Chutou à barra? Ah, foi para não ceder canto…",
        author: "Pinto da Costa",
        image: './resources/img/pcosta.jpg'
    },
    {
        quote: "…Vamos jogar ao ataque, fechadinhos lá atrás…",
        author: "Jaime Pacheco",
        image: './resources/img/jpacheco.jpg'
    },
    {
        quote:"Podiam meter os pregos nas calosidades anais",
        author: "Manuel Machado",
        image: './resources/img/mmachado.png'
    }
]

//Generate random integer
function generateRandomNumber (x){
    let  random = Math.floor(Math.random() * x);
    return random;
}

let len = quotes.length;
let num;

function shuffle(){
    if (len > 1){
        button.innerHTML = "New Quote";
        len --;
        [quotes[len], quotes[num]] = [quotes[num], quotes[len]];
    }else{
        button.innerHTML = "Reset?";
        len = quotes.length;
    }
}

function displayMessage(){
    num = generateRandomNumber(len);
    let quote = quotes[num];
    msg.innerHTML = `As <strong>${quote.author}</strong> once said, <br /> <br /> <em>${quote.quote}</em>`;
    img.src = quote.image;
    shuffle();
}

// Add an event handler for the click event
button.addEventListener("click", displayMessage());