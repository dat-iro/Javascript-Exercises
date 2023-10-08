const number = 15;

let numberPromise = new Promise ((resolve, reject) => {
    if (number > 10) {
        resolve("Resolved");
    } else {
        reject("Rejected");
    }
})

numberPromise
    .then((val) => console.log(val))
    .catch((err) => console.error(err))