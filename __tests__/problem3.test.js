const getHouses = require('../problem3')


describe("Testing getHouses Function", () => {
    test('should make an API call to the /houses endpoind', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve({ houses: [{ name: "house2", ownerName: "Krishna", address: "Patna", areaCode: "100000", rent: "1100", isBachelorAllowed: true, isMarriedAllowed: true, id: 2 }, { name: "house3", ownerName: "Bicky", address: "Bangal", areaCode: "300000", rent: "900", isBachelorAllowed: true, isMarriedAllowed: false, id: 3 }] }),
            });
        });

        const response = await getHouses();

        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/houses');
    });

    test('should make an API call to the /houses 1 time', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve({ houses: [{ name: "house2", ownerName: "Krishna", address: "Patna", areaCode: "100000", rent: "1100", isBachelorAllowed: true, isMarriedAllowed: true, id: 2 }, { name: "house3", ownerName: "Bicky", address: "Bangal", areaCode: "300000", rent: "900", isBachelorAllowed: true, isMarriedAllowed: false, id: 3 }] }),
            });
        });

        const response = await getHouses();

        expect(fetch).toHaveBeenCalledTimes(1)
    });

    test('should return the correct data from the API call', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve({ houses: [{ name: "house2", ownerName: "Krishna", address: "Patna", areaCode: "100000", rent: "1100", isBachelorAllowed: true, isMarriedAllowed: true, id: 2 }, { name: "house3", ownerName: "Bicky", address: "Bangal", areaCode: "300000", rent: "900", isBachelorAllowed: true, isMarriedAllowed: false, id: 3 }] }),
                ok: true
            });
        });

        const response = await getHouses();
        expect(response.data).toEqual({ houses: [{ name: "house2", ownerName: "Krishna", address: "Patna", areaCode: "100000", rent: "1100", isBachelorAllowed: true, isMarriedAllowed: true, id: 2 }, { name: "house3", ownerName: "Bicky", address: "Bangal", areaCode: "300000", rent: "900", isBachelorAllowed: true, isMarriedAllowed: false, id: 3 }] });
    });

})

