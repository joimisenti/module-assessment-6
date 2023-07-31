const shuffle = require("../src/shuffle");

let testDataArr = ["Optimus Prime", "Bumblebee", "Bender", "Baymax", "Wall-E", "Voltron"]

describe("shuffle should...", () => {
  test("return an array", () => {
    const returnValue = shuffle(testDataArr)
    expect(returnValue).toBeInstanceOf(Array);
  })

  it("return array of same length as argument", () => {
    expect(shuffle(testDataArr)).toHaveLength(testDataArr.length);
  })

  test("contain all the same items originally in the array", () => {
    expect(testDataArr).toEqual(expect.arrayContaining(shuffle(testDataArr)))
  })
  
});
