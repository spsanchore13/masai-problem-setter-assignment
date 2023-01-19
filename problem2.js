function studentDetails(arr) {
    let totalPromoted = 0;
    let totalPromotedAvgAge = 0;
    let totalPromotedUnder15 = 0;
    let totalAgePromotedMale = 0;
    let totalPromotedFemaleAscByAge = [];
    let totalage = 0;


    for (let i = 0; i < arr.length; i++) {
        totalage += arr[i].age;
        if (arr[i].promoted) {
            totalPromoted += 1;
        }
        if (arr[i].age < 15) {
            totalPromotedUnder15 += 1;
        }

        if (arr[i].gender === "Male") {
            totalAgePromotedMale += arr[i].age;
        }

        if (arr[i].gender === "Female") {
            totalPromotedFemaleAscByAge.push(arr[i])
        }
    }

    if (arr.length > 0) {
        totalPromotedAvgAge = Math.floor(totalage / arr.length);
    }
    totalPromotedFemaleAscByAge = totalPromotedFemaleAscByAge.sort((a, b) => a.age - b.age)

    return {
        totalPromoted,
        totalPromotedAvgAge,
        totalPromotedUnder15,
        totalAgePromotedMale,
        totalPromotedFemaleAscByAge
    }
}



const arr = [
    {
        name: "Hewie",
        age: 9,
        promoted: true,
        gender: "Male",
    },
    {
        name: "Brantley",
        age: 14,
        promoted: true,
        gender: "Female",
    },
    {
        name: "Sophie",
        age: 8,
        promoted: true,
        gender: "Female",
    },
    {
        name: "alvin",
        age: 14,
        promoted: false,
        gender: "Male",
    },
];

module.exports = studentDetails

// console.log(studentDetails(arr))