async function getHouses() {

    const response = await fetch('http://localhost:3000/houses');
    const data = await response.json();
    return { data };
}


module.exports = getHouses

// console.log(getHouses())