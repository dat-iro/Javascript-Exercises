
function printAsyncName(name, callback) {
    setInterval(callback, 1000);
    setInterval(() => console.log(name), 2000)
}

let sayHello = () => console.log("Hello!");

printAsyncName("Matteo", sayHello);