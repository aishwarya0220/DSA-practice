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


Sliding window template for substring search problems - 

public class Solution {
    public List<Integer> slidingWindowTemplateByHarryChaoyangHe(String s, String t) {
        
        //init a collection or int value to save the result according the question.
        List<Integer> result = new LinkedList<>();
        if(t.length()> s.length()) return result;
        
        //create a hashmap to save the Characters of the target substring.
        //(K, V) = (Character, Frequence of the Characters)
        
        Map<Character, Integer> map = new HashMap<>();
        for(char c : t.toCharArray()){
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        //maintain a counter to check whether match the target string.
        int counter = map.size();//must be the map size, NOT the string size because the char may be duplicate.
        
        //Two Pointers: begin - left pointer of the window; end - right pointer of the window
        int begin = 0, end = 0;
        
        //the length of the substring which match the target string.
        int len = Integer.MAX_VALUE; 
        
        //loop at the begining of the source string
        while(end < s.length()){
            
            char c = s.charAt(end);//get a character
            
            if( map.containsKey(c) ){
                map.put(c, map.get(c)-1);// plus or minus one
                if(map.get(c) == 0) counter--;//modify the counter according the requirement(different condition).
            }
            end++;
            
            //increase begin pointer to make it invalid/valid again
            while(counter == 0 /* counter condition. different question may have different condition */){
                
                /* save / update(min/max) the result if find a target*/

                char tempc = s.charAt(begin);//***be careful here: choose the char at begin pointer, NOT the end pointer
                if(map.containsKey(tempc)){
                    map.put(tempc, map.get(tempc) + 1);//plus or minus one
                    if(map.get(tempc) > 0) counter++;//modify the counter according the requirement(different condition).
                }
                
                // result collections or result int value
                
                begin++;
            }
        }
        return result;
    }
}

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

How do you develop the intuition for recursive parameters?
- Don't start by asking: "What parameters should my recursive function have?"

- Instead ask: "What information do I need to remember to describe where I am in the problem?", "What is changing on every recursive call?"



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


5) Binary Search

TC = log base 2 of n represents the power to which the number 2 must be raised to get n. In simpler terms, it answers the question: "How many times do I have to divide n by 2 before I get down to 1?"

For overflow cases(range b/w low and high is INT_MAX) - use bigInt. Can use formula = low + (high-low)/2


6) Linked List

JavaScript doesn't have a built-in LinkedList data structure like some languages do. We normally create a Node ourselves:

class ListNode {                        // Singly linked list
    constructor(val) {                  // Each node points forward
        this.val = val;                 // 10 → 20 → 30 → null
        this.next = null;
    }
}

class ListNode {                        // Doubly linked list
    constructor(val) {                  // Each node points both directions
        this.val = val;                 // null ← 10 ⇄ 20 ⇄ 30 → null
        this.next = null;
        this.prev = null;
    }
}

`Basic Traversal - 

    let curr = head;

    while (curr !== null) {
        // do something with curr.val

        curr = curr.next;
    }

`Slow and fast pointers

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

`Detect a cycle

1 → 2 → 3 → 4
        ↑     ↓
        ← ← ←

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
` Reverse linked list

Given:
1 → 2 → 3 → 4 → null

Produce:
4 → 3 → 2 → 1 → null // null <- 1 <- 2 <- 3 <- 4

    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;       // save future

        curr.next = prev;           // reverse link

        prev = curr;                // advance prev
        curr = next;                // advance curr
    }

State before loop lines: current is at 1, prev is null.

let nextTemp = current.next;

    What it does: We are about to break the link between 1 and 2. To avoid losing the rest of the list (2 -> 3), we save node 2 in nextTemp.

    State: nextTemp points to 2.

current.next = prev;

    What it does: We reverse the pointer. Node 1 now points backward to null (instead of pointing to 2).

    State: List looks like null <- 1 (and 2 -> 3 is floating safely in nextTemp).

prev = current;

    What it does: We slide our prev pointer forward so it catches up to where current is.

    State: prev is now at 1.

current = nextTemp;

    What it does: We slide our current pointer forward to the next node we saved earlier.

    State: current is now at 2



For a typical singly linked list:

Operation	                Complexity
Access kth element	        O(n)
Search	                    O(n)
Insert at head	            O(1)
Delete at head	            O(1)
Insert after known node	    O(1)
Delete after known node	    O(1)
Insert at tail	            O(n)*
Delete at tail	            O(n)
* If you maintain a tail pointer, insertion at the tail can be O(1)