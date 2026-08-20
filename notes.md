Patterns 

1) Hash Set

"Does this value exist?"
"Have I seen this value before?"
"Remove duplicates"
"Find missing values"
"Find common/unique values"
"Consecutive sequences"

| Functions         | Set operation   | Typical complexity |
| ----------------- | --------------- | -----------------: |
| Create            | `new Set()`     |               O(1) |
| Create from array | `new Set(nums)` |               O(n) |
| Add               | `set.add(x)`    |       O(1) average |
| Check existence   | `set.has(x)`    |       O(1) average |
| Delete            | `set.delete(x)` |       O(1) average |
| Count elements    | `set.size`      |               O(1) |
| Iterate           | `for...of`      |               O(n) |
| Clear             | `set.clear()`   |               O(n) |



2) Matrix based problems

Define the 4 boundaries of matrix(top,bottom,left,right) and work around those boundaries (95% matrix interview problems follow same pattern)