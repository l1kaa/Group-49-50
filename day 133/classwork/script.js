function getProduct() {
    const Mypromise1 = new Promise((resolve, reject) => {
    console.log("getting information about the product");
    
    setTimeout(() => {
        const info = { 
            status: "In stock",
            amount: 200
        };
        resolve(info);

    }, 1000); 
});
}

// getProduct()
//     .then((response) => {
//     console.log(response);
// });


function getPosts(){
    const Mypromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                {postName: 'first post', postImage: 'image1.jpg'},
                {postName: 'second post', postImage: 'image2.jpg'},
                {postName: 'third post', postImage: 'image3.jpg'}
            ]
        }, 2000)
    })
};

function getFriends(){
    const Mypromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const friends = [
                {name: 'Lika', age: 17},
                {name: 'giorgi', age: 18}
            ]
        }, 3000)
    })
}

