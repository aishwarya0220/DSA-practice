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


3) String JS methods

| Functions              | String operation             | Typical complexity |
| ---------------------- | ---------------------------- | -----------------: |
| Get length             | s.length                     |               O(1) |
| Access character       | s[i]                         |               O(1) |
| Access character       | s.charAt(i)                  |               O(1) |
| Check existence        | s.includes(x)                |               O(n) |
| Find index             | s.indexOf(x)                 |               O(n) |
| Extract portion        | s.slice(start, end)          |               O(k) |
| Extract portion        | s.substring(start, end)      |               O(k) |
| Convert to lowercase   | s.toLowerCase()              |               O(n) |
| Convert to uppercase   | s.toUpperCase()              |               O(n) |
| Remove whitespace      | s.trim()                     |               O(n) |
| Replace                | s.replace(a, b)              |               O(n) |
| Iterate                | for...of                     |               O(n) |

- - String -> Array

| Functions              | String → Array operation     | Typical complexity |
| ---------------------- | ---------------------------- | -----------------: |
| Split characters       | s.split("")                  |               O(n) |
| Split by space         | s.split(" ")                 |               O(n) |
| Split by delimiter     | s.split(",")                 |               O(n) |
| Split by regex         | s.split(/\s+/)               |               O(n) |

- - Array -> String

| Functions              | Array → String operation     | Typical complexity |
| ---------------------- | ---------------------------- | -----------------: |
| Join characters        | arr.join("")                 |               O(n) |
| Join with space        | arr.join(" ")                |               O(n) |
| Join with comma        | arr.join(",")                |               O(n) |
| Join with delimiter    | arr.join("-")                |               O(n) |


4) Backtracking template - 

def backtrack(params):
    if base_case_condition:
        results.append(copy_of_solution)
        return

    for choice in choices:                          for (let choice of getChoices()) {
        if violates_constraints:                        if (isValid(choice, state)) { // Constraint check
            continue

        make_choice                                         current.push()

        backtrack(updated_params)                           backtrack(update-params)

        undo_choice  # backtracking step                    current.pop()

                                                        }
                                                    }



5) Hash Map

map.set(key, value) → Adds/updates a key-value pair.
map.set("a", 10)

map.get(key) → Returns the value associated with the key.
map.get("a") → 10

map.has(key) → Returns true if key exists, otherwise false.
map.has("a") → true

map.delete(key) → Removes the key-value pair.
map.delete("a")

map.size → Returns number of key-value pairs.
map.size → 1

map.clear() → Removes all key-value pairs.

Iteration
map.keys() → Gives all keys.
map.values() → Gives all values.
map.entries() → Gives all [key, value] pairs.