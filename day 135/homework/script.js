const fastTask = new Promise(resolve => {
    setTimeout(() => resolve("Fast task finished"), 500);
});

const mediumTask = new Promise(resolve => {
    setTimeout(() => resolve("Medium task finished"), 1000);
});

const slowTask = new Promise(resolve => {
    setTimeout(() => resolve("Slow task finished"), 1500);    
});


Promise.race([fastTask, mediumTask, slowTask])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
