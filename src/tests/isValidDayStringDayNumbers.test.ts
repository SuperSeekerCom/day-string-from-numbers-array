import { isValidDayStringDayNumbers } from ".."

test.each([
  [[0, 1, 3], 0, true],
  [[0, 1, , 1, 3], 0, true],
  [[8, 1, 3], 0, false],
  [[0, 1, 3], 7, false],
  [[7, 24, 1, 3], 7, false],
  [[7, 2, 1, 3], 7, true],
  [[2, 1, 3], 8, false],
])(`isValidDayStringDayNumbers test`, (numArr, sunVal, result) => {
  //@ts-ignore
  expect(isValidDayStringDayNumbers({ daysArray: numArr, sundayValue: sunVal })).toBe(
    result,
  )
})
