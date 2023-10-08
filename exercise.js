
function repeatHello(callback) {
    setInterval(callback, 1000);
}

let sayHello = () => console.log("Hello");

repeatHello(sayHello);

// L'arrow function risulta necessaria perchè permette di avere uno scope diverso 