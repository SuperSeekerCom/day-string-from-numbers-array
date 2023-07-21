import { dayStringFromNumbers } from ".."

// Test valid params
test.each([
  [[1, 2, 3], 0, undefined, undefined, "Monday, Tuesday, and Wednesday"],
  [[1, 2, 3], 7, undefined, undefined, "Monday, Tuesday, and Wednesday"],
  [[2, 3], 7, undefined, undefined, "Tuesday and Wednesday"],
  [[7], 7, undefined, undefined, "Sunday"],
  [[1, 2, 7], 7, " |", false, "Monday | Tuesday | Sunday"],
  [[0, 1, 2, 4], 0, " |", false, "Sunday | Monday | Tuesday | Thursday"],
  [[0, 1, 2, 4], 0, undefined, false, "Sunday, Monday, Tuesday, Thursday"],
])(
  `dayStringFromNumbers valid params test`,
  (daysArray, sundayValue, separator, and, result) => {
    // @ts-ignore
    expect(dayStringFromNumbers({ daysArray, sundayValue, separator, and })).toBe(result)
  },
)

// Test Errors
test.each([
  [
    [1, 2, 3],
    8,
    undefined,
    undefined,
    "Invalid sundayValue passed to isValidDayStringDayNumbers. sundayValue should be either 0 or 7.",
  ],
  [
    [1, 2, 3],
    undefined,
    undefined,
    undefined,
    "Invalid sundayValue passed to isValidDayStringDayNumbers. sundayValue should be either 0 or 7.",
  ],
  [
    [1, 2, 3],
    false,
    undefined,
    undefined,
    "Invalid sundayValue passed to isValidDayStringDayNumbers. sundayValue should be either 0 or 7.",
  ],
  [
    [1, 2, 3, 8],
    0,
    undefined,
    undefined,
    `Invalid "daysArray" param passed to isValidDayStringDayNumbers. "daysArray" must be an array of integers 0-6 (if sundayValue === 0) or 1-7 (if sundayValue === 7).`,
  ],
  [
    [1, 2, 3, 7],
    0,
    undefined,
    undefined,
    `Invalid "daysArray" param passed to isValidDayStringDayNumbers. "daysArray" must be an array of integers 0-6 (if sundayValue === 0) or 1-7 (if sundayValue === 7).`,
  ],
  [
    [0, 1, 2, 3],
    7,
    undefined,
    undefined,
    `Invalid "daysArray" param passed to isValidDayStringDayNumbers. "daysArray" must be an array of integers 0-6 (if sundayValue === 0) or 1-7 (if sundayValue === 7).`,
  ],
  [
    [1, 2, 3, 4, 5, 6, 7],
    7,
    true,
    undefined,
    `The optional "separator" param must be of type string. If a value is not provided, it default to "," (a comma).`,
  ],
  [
    [1, 2, 3, 4, 5, 6, 7],
    7,
    0,
    undefined,
    `The optional "separator" param must be of type string. If a value is not provided, it default to "," (a comma).`,
  ],
  [
    [1, 2, 3, 4, 5, 6, 7],
    7,
    ", ",
    0,
    `The optional "and" param must be of type boolean. If a value is not provided, it defaults to true.`,
  ],
  [
    [1, 2, 3, 4, 5, 6, 7],
    7,
    ", ",
    ", ",
    `The optional "and" param must be of type boolean. If a value is not provided, it defaults to true.`,
  ],
])(
  `dayStringFromNumbers invalid params/error test`,
  (daysArray, sundayValue, separator, and, error) => {
    expect(() => {
      // @ts-ignore
      dayStringFromNumbers({ daysArray, sundayValue, separator, and })
    }).toThrowError(error)
  },
)
