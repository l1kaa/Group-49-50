function randomPromise() {
    const delay = Math.floor(Math.random() * 10 + 1) * 1000; // 1–10 sec
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(`Promise resolved after ${delay / 1000} seconds`);
        }, delay);
    });
}

// rejects after 5 seconds
function timeoutPromise(ms = 5000) {
    return new Promise((_, reject) => {
        setTimeout(() => {
        reject("Promise timed out.");
        }, ms);
    });
}


Promise.race([randomPromise(), timeoutPromise()])
    .then(result => console.log(result))
    .catch(error => console.error(error));
