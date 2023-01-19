function prime(arr) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            ans.push(arr[i]);
        }
    }

    return ans
}


function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = prime;
// console.log(prime([1, 2, 3, 4, 5, 6, 7]))