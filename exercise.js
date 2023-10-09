const isLogged = true;

let checkIfLoggedIn = new Promise((resolve, reject) => {
    if (isLogged) {
        resolve(Math.random());
    } else {
        reject(new Error("Not logged in"));
    }
});

let checkNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve(`{name: "John", age: 24}`);
        } else {
            reject(new Error("Number is lower or equal to 0.5"));
        }
    })
}

checkIfLoggedIn
    .then((num) => checkNumber(num))
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
    .finally(() => console.log("Finally!"))