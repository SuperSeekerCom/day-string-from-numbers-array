# day-string-from-numbers-array

[![install size](https://packagephobia.com/badge?p=day-string-from-numbers-array)](https://packagephobia.com/result?p=day-string-from-numbers-array)
[![Coverage Status](https://coveralls.io/repos/github/SuperSeekerCom/day-string-from-numbers-array/badge.svg?branch=main)](https://coveralls.io/github/SuperSeekerCom/day-string-from-numbers-array?branch=main)

day-string-from-numbers-array converts an array of weekday numbers to a string.

```javascript
import { dayStringFromNumbers } from "day-string-from-numbers-array"

dayStringFromNumbers({
  daysArray: [0, 1, 6],
  sundayValue: 0,
  separator: ",",
  and: true,
})
//returns "Sunday, Monday, and Saturday"

dayStringFromNumbers({
  daysArray: [1, 6, 7],
  sundayValue: 7,
  separator: " |",
  and: false,
})
//returns "Monday | Saturday | Sunday"
```

## dayStringFromNumbers Function

dayStringFromNumbers requires an object with the following properties:

### Required Properties

`daysArray` and `sundayValue` are the only required properties.

Use `sundayValue` to indicate what number represents Sunday (a 0 or a 7).

`daysArray` must be an array of numbers that are valid for the `sundayValue` you've chosen.

```javascript
export type WeekDayNumbersSunZero = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type WeekDayNumbersSunSeven = 1 | 2 | 3 | 4 | 5 | 6 | 7
```

You can use the `isValidDayStringDayNumbers` function to prevent errors if you're using dynamic data that may have an array with invalid numbers included.

```javascript
import { isValidDayStringDayNumbers } from "day-string-from-numbers-array"

const x = { daysArray: [0, 1, 2, 3], sundayValue: 7 }

const arePropertiesValid = isValidDayStringDayNumbers(x) // false

// prevent dayStringFromNumbers from throwing an error due to the invalid data (a 0 when daysArray should only contain numbers 1-7 due to sundayValue = 7)
if (arePropertiesValid) {
  dayStringFromNumbers(x)
}
```

### Optional Properties

By default, multiple days will be separated by ", ". The final day in a list will be separated by " and " if there are 2 days or ", and" if there are 3 or more days.

```javascript
import { dayStringFromNumbers } from "day-string-from-numbers-array"

dayStringFromNumbers({ daysArray: [1, 2, 3], sundayValue: 0 })
//returns "Monday, Tuesday, and Wednesday"
dayStringFromNumbers({ daysArray: [1, 2, 7], sundayValue: 7 })
//returns "Monday, Tuesday, and Sunday"
dayStringFromNumbers({ daysArray: [2, 3], sundayValue: 7 })
//returns "Tuesday and Wednesday"
dayStringFromNumbers({ daysArray: [7], sundayValue: 7 })
//returns "Sunday"
```

You can use the `separator` and `and` properties to change the string that separates dates and remove the " and " or ", and " from strings.

```javascript
dayStringFromNumbers({
  daysArray: [1, 2, 7],
  sundayValue: 7,
  separator: " |",
  and: false,
})
//returns "Monday | Tuesday | Sunday"
```

## isValidDayStringDayNumbers Function

You can use the `isValidDayStringDayNumbers` function to prevent errors if you're using dynamic data that may have an array with invalid numbers included.

```javascript
import { isValidDayStringDayNumbers } from "day-string-from-numbers-array"

const x = { daysArray: [0, 1, 2, 3], sundayValue: 7 }

const arePropertiesValid = isValidDayStringDayNumbers(x) // false

// prevent dayStringFromNumbers from throwing an error due to the invalid data (a 0 when daysArray should only contain numbers 1-7 due to sundayValue = 7)
if (arePropertiesValid) {
  dayStringFromNumbers(x)
}
```

This package was created and is maintained by the team at [SuperSeeker](https://superseeker.net/).
