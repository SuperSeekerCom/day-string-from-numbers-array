// Object used to find day string if Sunday is represented by 0
export const WeekDayNumbersObjSunZero = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday",
}
// Object used to find day string if Sunday is represented by 7
export const WeekDayNumbersObjSunSeven = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
}

// array of valid day numbers for isValidDayStringDayNumbers
export const dayNumArrSunZero = [0, 1, 2, 3, 4, 5, 6]
export const dayNumArrSunSeven = [1, 2, 3, 4, 5, 6, 7]

export type WeekDayNumbersSunZero = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type WeekDayNumbersSunSeven = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type DaysArrayAndSunValue =
  | {
      daysArray: WeekDayNumbersSunSeven[]
      sundayValue: 7
    }
  | {
      daysArray: WeekDayNumbersSunZero[]
      sundayValue: 0
    }

export type DayStringFromNumbersParams = DaysArrayAndSunValue & {
  separator?: string
  and?: boolean
  repeatDays?: boolean
  sort?: "none" | "SundayToSaturday" | "MondayToSunday"
}

export function isValidDayStringDayNumbers(params: {
  daysArray: number[]
  sundayValue: number
}): params is DaysArrayAndSunValue {
  if (params.sundayValue === 0) {
    return params.daysArray.every((n) => dayNumArrSunZero.includes(n))
  } else if (params.sundayValue === 7) {
    return params.daysArray.every((n) => dayNumArrSunSeven.includes(n))
  } else {
    return false
  }
}

/**
 * @description Converts an array of numbers representing weekdays to a string.
 * @returns valid day string day numbers
 * @example dayStringFromNumbers({daysArray: [0, 1, 6], sundayValue: 0, separator: ',', and: true}) //returns "Sunday, Monday, and Saturday"
 * dayStringFromNumbers({daysArray: [1, 6, 7], sundayValue: 7, separator: ' |', and: false}) //returns "Monday | Saturday | Sunday"
 */
export function dayStringFromNumbers({
  daysArray,
  sundayValue,
  separator,
  and,
}: DayStringFromNumbersParams): string {
  if (sundayValue !== 0 && sundayValue !== 7) {
    throw new Error(
      `Invalid sundayValue passed to isValidDayStringDayNumbers. sundayValue should be either 0 or 7.`,
    )
  }
  if (!isValidDayStringDayNumbers({ daysArray, sundayValue })) {
    throw new Error(
      `Invalid "daysArray" param passed to isValidDayStringDayNumbers. "daysArray" must be an array of integers 0-6 (if sundayValue === 0) or 1-7 (if sundayValue === 7).`,
    )
  }

  if (!(typeof separator === "string" || typeof separator === "undefined")) {
    throw new Error(
      `The optional "separator" param must be of type string. If a value is not provided, it default to "," (a comma).`,
    )
  }
  if (!(typeof and === "boolean" || typeof and === "undefined")) {
    throw new Error(
      `The optional "and" param must be of type boolean. If a value is not provided, it defaults to true.`,
    )
  }

  separator = separator || ","

  and = typeof and === "boolean" ? and : true

  const WeekDayObj =
    sundayValue === 0 ? WeekDayNumbersObjSunZero : WeekDayNumbersObjSunSeven

  let dayString = ``

  daysArray.forEach((dayNumber, index, arr) => {
    dayString =
      dayString +
      `${index !== 0 && index !== arr.length - 1 ? `${separator} ` : ""}${
        index !== 0 && index === arr.length - 1 && and
          ? `, and `
          : index !== 0 && index === arr.length - 1 && !and
          ? `${separator} `
          : ""
        // @ts-ignore Ignore because have already confirmed dayNumber exists on WeekDayObj
      }${WeekDayObj[dayNumber]}`
  })

  return dayString
}
