async function getRandomDog() {
    try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }
    const data = await res.json(); 
    } catch (err) {
        console.error(err);
    }
}

getRandomDog();
