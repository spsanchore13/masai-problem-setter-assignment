const studentDetails = require('../problem2');


describe("studentDetails", () => {
    test("should calculates the correct values for given array", () => {
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

        const result = studentDetails(arr);
        expect(result).toEqual({
            totalPromoted: 3,
            totalPromotedAvgAge: 11,
            totalPromotedUnder15: 4,
            totalAgePromotedMale: 23,
            totalPromotedFemaleAscByAge: [
                {
                    name: 'Sophie', age: 8, promoted: true, gender: 'Female'
                },
                {
                    name: 'Brantley', age: 14, promoted: true, gender: 'Female'
                }
            ],
        });
    });

    test("should return following values form empty arr", () => {
        expect(studentDetails([])).toEqual({
            totalPromoted: 0,
            totalPromotedAvgAge: 0,
            totalPromotedUnder15: 0,
            totalAgePromotedMale: 0,
            totalPromotedFemaleAscByAge: []
        })
    })
});
