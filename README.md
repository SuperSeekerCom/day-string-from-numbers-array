#day-string-from-numbers-array

day-string-from-numbers-array converts an array of week day numbers to a string.

```javascript
import { dayStringFromNumbers } from "day-string-from-numbers-array"

dayStringFromNumbers({ daysArray: [0, 1, 6], sundayValue: 0, separator: ",", and: true }) //returns "Sunday, Monday, and Saturday"
dayStringFromNumbers({
  daysArray: [1, 6, 7],
  sundayValue: 7,
  separator: " |",
  and: false,
}) //returns "Monday | Saturday | Sunday"
```
