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

    let slow = head;                                        // head instead of head.next bcoz helps handling edge cases like list of single node. also
    let fast = head;                                        // ensures math of catching up predictably regardless of length

    while (fast !== null && fast.next !== null) {           // if only check fast !== null, fast could be last node thus fast.next will be null and so 
        slow = slow.next;                                   // fast.next.next will run as null.next which crashes the code. if fast.next is a val, then
        fast = fast.next.next;                              // even if fast.next.next = null, it wont crash as fast = null will exit the loop

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


`Remove Node(use dummy)

    const dummy = new ListNode(0);                  // use dummy to avoid head being the node to be removed 
    dummy.next = head;                              // since prev.next = pre.next.next is safe and std practice due to simplicity,
                                                    // dummy handles this edge case just like normal logic
    let prev = dummy;

    while (prev.next !== null) {
        if (/* delete prev.next */) {
            prev.next = prev.next.next;             // doesnt cr8 duplicates, rather removes linkage from the node we want to remove
        } else {
            prev = prev.next;
        }
    }

    return dummy.next;                              // bcoz of .next method on each node, the entire linkage is returned


`Pointers with gap

    let slow = head;
    let fast = head;

    // Create a gap of k
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // Move together
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }


`Merge sorted lists

    function mergeTwoLists(list1, list2) {                  // list1/2 point to the first node of the list
        const dummy = new ListNode(0);
        let current = dummy;

        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {                   
                current.next = list1;                       // list1 instead of list1.val bcoz we compare the val of node but physically link the entire
                list1 = list1.next;                         // node object to the list
            } else {
                current.next = list2;
                list2 = list2.next;
            }

            current = current.next;
        }

        // Attach whatever remains
        if (list1 !== null) {                               // prev.next = list1 attaches that current node and everything connected behind it to your 
            current.next = list1;                           // merged list. don't need to increment list1 = list1.next
        } else {
            current.next = list2;
        }

        return dummy.next;
    }

- DLL

`Delete a node 

node.prev.next = node.next;
node.next.prev = node.prev;

`Insert a node

function insertAfter(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;

    node.next.prev = newNode;
    node.next = newNode;
}

`Sentinel/dummy nodes                                       // Use sentinel nodes to turn boundary cases into normal cases.

const head = new ListNode(0);
const tail = new ListNode(0);

head.next = tail;
tail.prev = head;           // HEAD ⇄ TAIL

`Forward + backward traversal

A ⇄ B ⇄ C ⇄ D ⇄ E
↑                 ↑
left            right

left = left.next;
right = right.prev;

`LRU Cache skeleton                                     // teaches huge amt of dll operations. Design problems are a mix of DS + OOPS

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insertAtEnd(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);

        this.remove(node);
        this.insertAtEnd(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);

            node.value = value;

            this.remove(node);
            this.insertAtEnd(node);

            return;
        }

        const node = new Node(key, value);

        this.map.set(key, node);
        this.insertAtEnd(node);

        if (this.map.size > this.capacity) {
            const lru = this.head.next;

            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}


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


# Stacks 

useful for DFS

Monotonic stack - A monotonic stack is a specialized stack data structure that keeps its elements in a strictly sorted order—either continuously increasing or decreasing

`Basic syntax 

const stack = [];

stack.push(x);

const top = stack[stack.length - 1];

const removed = stack.pop();

if (stack.length === 0) {
    // empty
}

`Next greater element                                           // similar pattern for previous smaller/gr8er element.

function nextGreater(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums.length; i++) {

        while (
            stack.length > 0 &&
            nums[i] > nums[stack[stack.length - 1]]             // < for next smaller
        ) {
            const index = stack.pop();
            result[index] = nums[i];
        }

        stack.push(i);
    }

    return result;
}

`Greedy + Stack (eg. "Remove some elements to make the result smallest/largest.")

function removeKdigits(num, k) {
    const stack = [];

    for (const digit of num) {

        while (
            k > 0 &&
            stack.length &&
            stack[stack.length - 1] > digit
        ) {
            stack.pop();
            k--;
        }

        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    const result = stack.join("").replace(/^0+/, "");

    return result || "0";
}

`Universal monotonic stack template 

const stack = [];

for (let i = 0; i < n; i++) {

    while (
        stack.length &&
        CONDITION
    ) {
        const j = stack.pop();

        // Resolve answer for j
    }

    stack.push(i);
}


# Queue

useful for BFS

enqueue — add an element to the back

dequeue — remove an element from the front

`Basic syntax

const queue = [];
let front = 0;

queue.push(value);       // enqueue

const value = queue[front++]; // dequeue(O(1)); value references to the element at the front of queue                // shift() uses O(n)

const size = queue.length - front;
const isEmpty = front === queue.length;

`Monotonic Queue or deque

normal queue : 
                add → back
                remove → front

deque(double-ended queue) : 
                add/remove ← front
                add/remove → back


function maxSlidingWindow(nums, k) {
    const deque = [];
    let front = 0;

    const result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove elements outside the window
        while (
            front < deque.length &&
            deque[front] <= i - k
        ) {
            front++;
        }

        // Remove smaller elements
        while (
            front < deque.length &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        deque.push(i);

        // Window is ready
        if (i >= k - 1) {
            result.push(nums[deque[front]]);
        }
    }

    return result;
}



Operation	    Complexity
Enqueue	        O(1)
Dequeue	        O(1)
Peek front	    O(1)
Search	        O(n)
Space	        O(n)
