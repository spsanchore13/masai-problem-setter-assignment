const prime = require('../problem1');


describe("Testing Prime Function", () => {
    test("should return prime numbers from array", () => {
        expect(prime([1, 2, 3, 4, 5, 6, 7])).toEqual([2, 3, 5, 7])
    })

    test("should return empty array when no arguments", () => {
        expect(prime([])).toEqual([])
    })

    test("should handle with negative numbers", () => {
        expect(prime([1, 2, -3, 4, -5, 6])).toEqual([2])
    })


    test("should handle single value array", () => {
        expect(prime([7])).toEqual([7])
    })

    test("should handle with negative numbers array", () => {
        expect(prime([-1, -3, -5, -7, -8, -13, -17])).toEqual([])
    })
})