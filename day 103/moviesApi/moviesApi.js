const form = document.querySelector('form');
const container = document.querySelector('.img-container');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let query = form.querySelector('input').value;
    console.log(query);

    Api(query);
});

async function Api(query){
    const request = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const response = await request.json();
    // console.log(request);

    //  await -ის გარეშე
    // .then(request => request.json())
    // .then(response => {
    //     images(response);
    // })
    // .catch(error => {
    //     console.error(error);
    // });

    images(response);
}

function images(response){
    container.innerHTML = '';      

    for (let item of response){
        console.log(item)
        const src = item.show.image?.medium; 
        if (!src) continue;                   

        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    }
}