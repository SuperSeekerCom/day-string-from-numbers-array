# day-string-from-numbers-array

day-string-from-numbers-array converts an array of week day numbers to a string.

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
}) //returns "Monday | Saturday | Sunday"
```

## dayStringFromNumbers

dayStringFromNumbers requires and object with the following properties:

### Required Properties

`daysArray` and `sundayValue` are the only required properties.

Use `sundayValue` to indicate what number represents sunday (either a 0 or a 7).

`daysArray` must me an array of numbers that are valid for the `sundayValue` you've chosen.

```javascript
export type WeekDayNumbersSunZero = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type WeekDayNumbersSunSeven = 1 | 2 | 3 | 4 | 5 | 6 | 7
```
