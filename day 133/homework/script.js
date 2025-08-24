const userPromise = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 15) + 1; // 1–15
    fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            reject("User not found.");
        }
    })
    .then(userData => resolve(userData))
    .catch(() => reject("Couldn't fetch user info"));
});


const postPromise = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 150) + 1; // 1–150
    fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            reject("Post not found.");
        }
    })
    .then(postData => resolve(postData))
    .catch(() => reject("Couldn't fetch post info"));
});


Promise.all([userPromise, postPromise])
    .then(([user, post]) => {
        console.log("User:", user);
        console.log("Post:", post);
    })
    .catch(error => {
        console.error("User data not found:", error);
    });
