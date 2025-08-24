function getTime() {
    const Mypromise = new Promise((resolve, reject) => {
    console.log("getting information about the time of the day");
    
    setTimeout(() => {
        const time = { 
            time: 'day',
        };
        resolve(time);

        }, 1000); 
    });

    return Mypromise

}


getTime().then((response) => {
    let icon;

    switch (response.time) {
        case 'day':
            icon = '☀️';
            break;
        case 'afternoon':
            icon = '🌤️';
            break;
        case 'evening':
            icon = '🌙';
            break;
        default:
            icon = '❓';
    }

    console.log(`Right now it's: ${response.time} ${icon}`);
});