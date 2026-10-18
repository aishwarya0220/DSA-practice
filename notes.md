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



5) Hashmap

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

- In a js object, an array is not a good object key bcoz js converts the array[3,4] into a string['3,4']

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

`LRU Cache skeleton                                     // teaches lot of dll operations

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


# Trees

- Creating a tree node -

        class TreeNode {
            constructor(val, left = null, right = null) {
                this.val = val;
                this.left = left;
                this.right = right;
            }
        }

- Creating a tree -- 

        const root = new TreeNode(10);

        root.left = new TreeNode(5);
        root.right = new TreeNode(20);

        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(7);

This creates - 

        10
       /  \
      5    20
     / \
    2   7

- 4 Fundamental traversal patterns -- 

        DFS
        ├── Preorder
        ├── Inorder
        └── Postorder

        BFS
        └── Level Order

- DFS template -- 

    function dfs(root) {
        if (root === null) {
            return;
        }

        // Process current node

        dfs(root.left);
        dfs(root.right);
    }


- Preorder traversal -- root -> left -> right

    function preorder(root) {
        if (root === null) return;

        console.log(root.val);

        preorder(root.left);
        preorder(root.right);
    }


- Inorder traversal -- left -> root -> right (for a bst, this produces values in sorted order)

    function inorder(root) {
        if (root === null) return;

        inorder(root.left);

        console.log(root.val);

        inorder(root.right);
    }

- Postorder traversal -- left -> right -> root

    function postorder(root) {
        if (root === null) return;

        postorder(root.left);
        postorder(root.right);

        console.log(root.val);
    }

- Complexities 

Traversal - TC = O(n) & SC = O(h);      h = height

SC = O(log n) for balanced tree, O(n) for skewed tree

- BFS --

- Level order traversal - goes level by level

    function levelOrder(root) {
        if (root === null) {
            return [];
        }

        const queue = [root];
        const result = [];

        let i = 0;

        while (i < queue.length) {
            const node = queue[i++];            // postfix increment operator follows a specific rule: use the current value right now for the operation
                                                // and increment it as a side effect afterward. thus node acquires value of queue[0] then i++ is performed
            result.push(node.val);              // thus root node is pushed first

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }

- Complexities 

Traversal - TC = O(n) & SC = O(w);      w = width


- Tree recursion patterns

- - Return something(eg. max/min depth, sum of nodes, number of nodes)

    function maxDepth(root) {
        if (root === null) {
            return 0;
        }

        const left = maxDepth(root.left);
        const right = maxDepth(root.right);

        return 1 + Math.max(left, right);
    }

    how the call stack works: it dives deep into the left side first(depends on sequence of function calls; in above code left is called first), pauses, handles the base cases, pops back up to check the right side of that subtree, finishes the node, and then finally moves to the root's right side. That is the exact definition of a Depth-First Search (DFS).

    About 1 + Math.max(left, right) - Math.max(0,0) only happens at the bottom: The 0 values only come into play when a node points to null (i.e., it has no children). Higher nodes use the results of their children: As the recursion climbs back up, the left and right variables hold the actual depths returned by the subtrees below them, not 0. for eg. [1,2,3,4,5] 2 receives 1 from its leaf node 4(1 + (0,0)) and thus node 2 = (1 + (1,0)) and root receives 1+2 = 3 from left subtree.

    - Do I Need a Helper?
    Ask yourself these two quick questions when looking at a new problem:

    Does the main function give me enough parameters?

    If it only gives you root, but you need to compare two things (like in Symmetric Tree) or track extra state (like a path sum or min/max), you usually need a helper function that takes extra arguments.

    Does the final output type match what recursion needs to calculate?

    If the problem wants a boolean at the very end, but your recursive steps need to crunch numbers (like heights, depths, or sums), you use a helper function to do the heavy math and let the main function wrap up the final boolean answer.

3 Steps for recursive tree problems - 
(1)base case, 
(2)decide the direction - Do I need to carry state down the tree, or collect answers from the bottom up?

    Carrying down (like Path Sum): You need an extra parameter in your helper function (like currSum). You update it right at the start of the function: currSum += node.val;

    Pulling up (like Same Tree / Max Depth): You don't need extra parameters. You just immediately dive into the children.

(3)What do I need from my left child and right child, and how do I glue their answers together?Do both need to be true? -> Use && (like Same Tree); Can either be true? -> Use || (like Path Sum); Do I need to find the max of both? -> Use Math.max()

- When you get stuck, don't ask "What's the solution?"

    Ask:

    "What should dfs(node) return to its parent?"

    eg. path sum -> dfs(node) → whether required sum exists below node?
        lca -> dfs(node) → whether target/LCA node found in subtree


- - Pass information downward / Top-down recursion

    function hasPathSum(root, targetSum) {
        if (root === null) {
            return false;
        }

        // Leaf node
        if (root.left === null && root.right === null) {
            return root.val === targetSum;
        }

        const remaining = targetSum - root.val;

        return (
            hasPathSum(root.left, remaining) ||
            hasPathSum(root.right, remaining)
        );
    }

- - Maintain an answer while traversing

    function maxValue(root) {
        let answer = -Infinity;

        function dfs(node) {
            if (node === null) {
                return;
            }

            answer = Math.max(answer, node.val);

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return answer;
    }

- - Carry state along the path

    function maxPathSum(root) {
        let answer = -Infinity;

        function dfs(node, currentSum) {
            if (node === null) {
                return;
            }

            currentSum += node.val;

            // Leaf
            if (node.left === null && node.right === null) {
                answer = Math.max(answer, currentSum);
                return;
            }

            dfs(node.left, currentSum);
            dfs(node.right, currentSum);
        }

        dfs(root, 0);

        return answer;
    }

- - #BST

- Validate a bst

    function isValidBST(root) {
        function dfs(node, min, max) {
            if (node === null) {
                return true;
            }

            if (node.val <= min || node.val >= max) {
                return false;
            }

            return (
                dfs(node.left, min, node.val) &&
                dfs(node.right, node.val, max)
            );
        }

        return dfs(root, -Infinity, Infinity);
    }

- Search

    function searchBST(root, target) {
        if (root === null) {
            return null;
        }

        if (root.val === target) {
            return root;
        }

        if (target < root.val) {
            return searchBST(root.left, target);
        }

        return searchBST(root.right, target);
    }

- Insert

    function insert(root, val) {
        if (root === null) {
            return new TreeNode(val);
        }

        if (val < root.val) {
            root.left = insert(root.left, val);
        } else {
            root.right = insert(root.right, val);
        }

        return root;
    }

- Delete

    function deleteNode(root, key) {
        if (root === null) {
            return null;
        }

        if (key < root.val) {
            root.left = deleteNode(root.left, key);
        } else if (key > root.val) {                                // if has no children then simply remove
            root.right = deleteNode(root.right, key);
        } else {
            
            if (root.left === null) {                               // if has one child, then replace
                return root.right;
            }

            if (root.right === null) {
                return root.left;
            }

            
            let successor = root.right;                             // if has two children, find replacement(commonly smallest value in right subtree)

            while (successor.left !== null) {
                successor = successor.left;
            }

            root.val = successor.val;

            root.right = deleteNode(root.right, successor.val);
        }

        return root;
    }

- Complexities

For balanced BST

Search   O(log n)
Insert   O(log n)
Delete   O(log n)

For non-balanced(eg 1->2->3->4   )

Search = O(n)
Insert = O(n)
Delete = O(n)

- N-ary tree - binary tree has at most 2 children, while an N-ary tree can have any number of children.

you cant do dfs(node.children); // ❌ bcoz node.children is an array of nodes

instead we do 

for (const child of node.children) {
    dfs(child);
}

thus for DFS -- 

function dfs(node) {
    if (!node) return;

    for (const child of node.children) {
        dfs(child);
    }
}

for BFS -- 

while (queue.length > 0) {
    const node = queue.shift();

    for (const child of node.children) {
        queue.push(child);
    }
}



# Heaps

- tree like ds that helps efficiently access smallest(min-heap) or largest(max-heap) element

- Min Heap -- parent(not just root) <= children

        1
      /   \
     3     5
    / \
   7   4

- Max heap -- parent >= children

        9
      /   \
     7     8
    / \
   3   4

heap is not fully sorted. only the parent-child relation is guaranteed

- in sorted array, getting minimum is O(1) but insertion costs O(n); for min-heap, 

        Operation	    Complexity
        peek min/max	O(1)
        insert	        O(log n)
        remove min/max	O(log n)
        build heap	    O(n)

basic formulae -- 

parent = Math.floor((i - 1) / 2);
left   = 2 * i + 1;
right  = 2 * i + 2;

- fundamental operations -- 

1) bubble up - conducted immdtly after inserting new element; it works like ->

Place the new element at the last index of the array.

Compare its value with its parent using the formula parent = Math.floor((i - 1) / 2).

If the heap property is violated (e.g., in a Min-Heap, if the child is smaller than its parent), swap them.

Update index i to the parent's index and repeat the process until the heap property is restored or the element reaches the root (i = 0)

2) bubble down - conducted after extractg/removing root element; to fill the removed position, we place the last element of array to root's position then check for the validity of heap by starting the operation from root as follows -- 

Start at the root index (i = 0).

Find its children using left = 2 * i + 1 and right = 2 * i + 2.

Compare the current node with its children. In a Min-Heap, find the smaller of the two children.

If the current node violates the heap property (i.e., it is larger than that smaller child), swap them.

Update index i to the child's index and repeat the loop downward until the node is smaller than both children or becomes a leaf node


- Min heap template

        class MinHeap {
        constructor() {
            this.heap = [];
        }

        peek() {
            return this.heap[0];
        }

        size() {
            return this.heap.length;
        }

        push(value) {
            this.heap.push(value);
            this.bubbleUp();
        }

        pop() {
            if (this.heap.length === 0) return undefined;
            if (this.heap.length === 1) return this.heap.pop();

            const root = this.heap[0];                              // saves the root

            this.heap[0] = this.heap.pop();                         // overwriting 0th index by popped value
            this.bubbleDown();

            return root;                                            // returns 0th element which was earlier saved
        }

        bubbleUp() {
            let i = this.heap.length - 1;

            while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
            }
        }

        bubbleDown() {
            let i = 0;
            const n = this.heap.length;

            while (true) {                                                  // cr8s an infinite loop which has to be stopped by adding a return or break
            let smallest = i;                                               // line in the loop

            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
            }
        }
        }

- Heap with custom comparator

class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(x) {
    this.heap.push(x);

    let i = this.heap.length - 1;

    while (i > 0) {
      const p = Math.floor((i - 1) / 2);

      if (this.compare(this.heap[p], this.heap[i]) <= 0) break;

      [this.heap[p], this.heap[i]] =
        [this.heap[i], this.heap[p]];

      i = p;
    }
  }

  pop() {
    if (!this.heap.length) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const result = this.heap[0];

    this.heap[0] = this.heap.pop();

    let i = 0;

    while (true) {
      let best = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (
        left < this.heap.length &&
        this.compare(this.heap[left], this.heap[best]) < 0
      ) {
        best = left;
      }

      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[best]) < 0
      ) {
        best = right;
      }

      if (best === i) break;

      [this.heap[i], this.heap[best]] =
        [this.heap[best], this.heap[i]];

      i = best;
    }

    return result;
  }
}

JavaScript's Array.prototype.sort((a, b) => a - b), the comparison function works like this:

If the result is negative, it means a should come before b.

If the result is positive, it means b should come before a.

In our Heap class, we use the compare function to decide when we need to swap elements.

Now we can simply -- 

const minHeap = new Heap((a, b) => a - b);

const maxHeap = new Heap((a, b) => b - a);

const pq = new Heap((a, b) => a.priority - b.priority);

const heap = new Heap((a, b) => a.distance - b.distance);

    heap.push({ node: "A", distance: 10 });
    heap.push({ node: "B", distance: 3 });
    heap.push({ node: "C", distance: 7 });

    console.log(heap.pop());
    // { node: "B", distance: 3 }


- Top K elements

        const heap = new MinHeap();                                         // the minHeap class works in the background; thus push and pop also
                                                                            // implement bubble up and down operations
        for (const num of nums) {
        heap.push(num);

        if (heap.size() > k) {
            heap.pop();
        }
        }

        console.log(heap.heap); // k largest elements

- - Quickselect algo (solves top k type Qs in O(n) and O(1) rather than O(n log k) and O(k))

function quickSelect(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const pivotIndex = partition(nums, left, right);

        if (pivotIndex === target) {
            return nums[pivotIndex];
        }

        if (pivotIndex > target) {
            right = pivotIndex - 1;
        } else {
            left = pivotIndex + 1;
        }
    }
}

function partition(nums, left, right) {
    const pivot = nums[right];                                      // another approach will includes using math.random is used for
    let i = left;                                                   // avoiding O(n^2) in worst cases(wherein work done reduces in 
                                                                    // manner of n, n-1, n-2 instead of n, n/2, n/4...)
    for (let j = left; j < right; j++) {                            // randomization doesnt eliminate O(n^2) but makes it unlikely
        if (nums[j] <= pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];                // this is lomuto partitioning; easy but struggles with duplicates(tle); better to
            i++;                                                    // use dutch flag
        }
    }

    [nums[i], nums[right]] = [nums[right], nums[i]];

    return i;
}

// kth smallest
function kthSmallest(nums, k) {
    return quickSelect(nums, k - 1);
}

// kth largest
function kthLargest(nums, k) {
    return quickSelect(nums, nums.length - k);
}


# Trie

- tree like ds used to store and search strings; useful for prefix-related operations like autocomplete, dictionary, search suggestions, etc

class TrieNode {
    constructor() {
        this.children = new Map();                      // can use array if characters are lowercase(new Array(26).fill(null)); map is convenient when
        this.isEnd = false;                             // char set isnt fixed and is cleaner and helps in O(1) lookups
    }
}

- basic template:

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;

        for (const ch of word) {
            if (!curr.children.has(ch)) {
                curr.children.set(ch, new TrieNode());
            }

            curr = curr.children.get(ch);
        }

        curr.isEnd = true;
    }

    search(word) {
        let curr = this.root;

        for (const ch of word) {
            if (!curr.children.has(ch)) {
                return false;
            }

            curr = curr.children.get(ch);
        }

        return curr.isEnd;                              // if isEnd = false then even though the char exist. it doesnt exist as a word in the trie
    }

    startsWith(prefix) {
        let curr = this.root;

        for (const ch of prefix) {
            if (!curr.children.has(ch)) {
                return false;
            }

            curr = curr.children.get(ch);
        }

        return true;
    }

    delete(word) {
        if (!this.search(word)) {
            return false;
        }

        let curr = this.root;

        for (const ch of word) {
            curr = curr.children.get(ch);
        }

        curr.isEnd = false;                     // node aint physically removed. isEnd = false means the word is no longer registered

        return true;
    }
}

- Prefix count:

can store a counter at each node as per reqmts

class TrieNode {
    constructor() {
        this.children = new Map();
        this.prefixCount = 0;
        this.wordCount = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;

        for (const ch of word) {
            if (!curr.children.has(ch)) {
                curr.children.set(ch, new TrieNode());
            }

            curr = curr.children.get(ch);
            curr.prefixCount++;
        }

        curr.wordCount++;
    }

    countWordsStartingWith(prefix) {
        let curr = this.root;

        for (const ch of prefix) {
            if (!curr.children.has(ch)) {
                return 0;
            }

            curr = curr.children.get(ch);
        }

        return curr.prefixCount;
    }

    countExactWord(word) {
        let curr = this.root;

        for (const ch of word) {
            if (!curr.children.has(ch)) {
                return 0;
            }

            curr = curr.children.get(ch);
        }

        return curr.wordCount;
    }
}

- Trie + DFS + backtracking

class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

function findWords(board, words) {
    const root = new TrieNode();

    // Build trie
    for (const word of words) {
        let curr = root;

        for (const ch of word) {
            if (!curr.children.has(ch)) {
                curr.children.set(ch, new TrieNode());
            }

            curr = curr.children.get(ch);
        }

        curr.word = word;
    }

    const result = [];
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, node) {
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols
        ) {
            return;
        }

        const ch = board[r][c];                     // undo                     this is the backtracking part

        if (!node.children.has(ch)) {               // pruning
            return;
        }

        const next = node.children.get(ch);         // explore

        if (next.word !== null) {
            result.push(next.word);
            next.word = null;
        }

        board[r][c] = '#';                          // mark

        dfs(r + 1, c, next);
        dfs(r - 1, c, next);
        dfs(r, c + 1, next);
        dfs(r, c - 1, next);

        board[r][c] = ch;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
}

# Graphs

- graphs look like trees when you first see them, but the code must account for something trees usually don't have: a node can be reached through multiple paths, and cycles can bring you back to a node you've already seen

    grid = [                            // referred as adjacency matrix; 1 represents an edge exists b/w them
    [1, 1, 0],                          // ez but consumes v^2 space thus adjacency list is preferred
    [1, 0, 0],
    [0, 0, 1]
    ]

- DFS

function dfs(node, graph, visited) {            // adjacency node
    // Already visited?
    if (visited.has(node)) {                    // to avoid infinite loop in a cyclical graph
        return;                                 // backtracks
    }

    // Mark current node as visited
    visited.add(node);

    // Do something with node
    console.log(node);

    // Visit neighbors
    for (const neighbor of graph[node]) {
        dfs(neighbor, graph, visited);
    }
}

function dfs(node, adj, visited) {              // adjacency list
    visited[node] = true;

    console.log(node); // Process the current node

    for (let neighbor of adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}

const edges = [[1, 2], [1, 3], [2, 3]];

// Build adjacency list                         // from i/p of an array of edges
const adj = {};

for (let [u, v] of edges) {
    if (!adj[u]) adj[u] = [];
    if (!adj[v]) adj[v] = [];

    adj[u].push(v);
    adj[v].push(u); // Undirected graph
}

const visited = {};
dfs(1, adj, visited);

function dfs(grid, row, col, visited) {         // DFS on 2d grid
    const rows = grid.length;
    const cols = grid[0].length;

    // 1. Check boundaries
    if (
        row < 0 ||
        col < 0 ||
        row >= rows ||
        col >= cols
    ) {
        return;
    }

    // 2. Check if already visited
    if (visited[row][col]) {
        return;
    }

    // 3. Check if the cell is not traversable
    if (grid[row][col] === 0) {
        return;
    }

    // 4. Mark visited
    visited[row][col] = true;

    // 5. Explore all four neighbors
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for (const [dr, dc] of directions) {
        dfs(grid, row + dr, col + dc, visited);
    }
}

function dfs(graph, start, visited, result) {           // adjacency matrix
    visited[start] = true;
    result.push(start);

    for (let neighbor = 0; neighbor < graph.length; neighbor++) {
        if (graph[start][neighbor] === 1 &&
            !visited[neighbor]) {
            dfs(graph, neighbor, visited, result);
        }
    }
}

const visited = Array(graph.length).fill(false);
const result = [];

dfs(graph, 0, visited, result);


- BFS                                   // commonly used for shortest path in unweighted graphs

function bfs(start, graph) {                // adjacency node
    const queue = [start];                          
    const visited = new Set([start]);

    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];

        // Process node
        console.log(node);

        for (const neighbor of graph[node]) {
            if (visited.has(neighbor)) {
                continue;
            }

            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
}

function bfs(graph, start) {                    // adjacency matrix
    const n = graph.length;
    const visited = Array(n).fill(false);
    const queue = [];
    const result = [];
    let head = 0;

    queue.push(start);
    visited[start] = true;

    while (head < queue.length) {
        const node = queue[head++];

        result.push(node);

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graph[node][neighbor] === 1 &&
                !visited[neighbor]) {

                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return result;
}

function bfs(grid, startRow, startCol) {
    const rows = grid.length;                   // 2d grids
    const cols = grid[0].length;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    const visited = Array.from(
        { length: rows },
        () => Array(cols).fill(false)
    );

    const queue = [[startRow, startCol]];
    let head = 0;

    visited[startRow][startCol] = true;

    while (head < queue.length) {
        const [row, col] = queue[head++];

        // Process the current cell here.

        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;

            // 1. Check boundaries
            if (
                nr < 0 ||
                nc < 0 ||
                nr >= rows ||
                nc >= cols
            ) {
                continue;
            }

            // 2. Check visited
            if (visited[nr][nc]) {
                continue;
            }

            // 3. Check traversability
            if (grid[nr][nc] === 0) {
                continue;
            }

            // 4. Mark and enqueue
            visited[nr][nc] = true;
            queue.push([nr, nc]);
        }
    }
}

- shortest path

function shortestPath(start, graph) {
    const queue = [start];
    const visited = new Set([start]);

    let head = 0;
    let distance = 0;

    while (head < queue.length) {
        const levelSize = queue.length - head;

        for (let i = 0; i < levelSize; i++) {
            const node = queue[head++];

            if (node === target) {
                return distance;
            }

            for (const neighbor of graph[node]) {
                if (visited.has(neighbor)) {
                    continue;
                }

                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

        distance++;
    }

    return -1;
}

- multisource bfs(start processing from multiple starting nodes instead of just one)

function multiSourceBFS(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );

    const queue = [];

    // 1. Add all source cells
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (/* is a source */) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    const directions = [
        [-1, 0], [1, 0],
        [0, -1], [0, 1]
    ];

    // 2. BFS
    let head = 0;

    while (head < queue.length) {
        const [r, c] = queue[head++];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // 3. Bounds check
            if (
                nr < 0 || nr >= m ||
                nc < 0 || nc >= n
            ) continue;

            // 4. Skip visited cells
            if (dist[nr][nc] !== -1) continue;

            // 5. Update and enqueue
            dist[nr][nc] = dist[r][c] + 1;
            queue.push([nr, nc]);
        }
    }

    return dist;
}

- count components

function countComponents(graph) {
    const visited = new Set();
    let count = 0;

    for (let node = 0; node < graph.length; node++) {
        if (visited.has(node)) {
            continue;
        }

        count++;

        dfs(node, graph, visited);
    }

    return count;
}

function dfs(node, graph, visited) {
    visited.add(node);

    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, graph, visited);
        }
    }
}

Both usually take O(V+E) time and O(V) auxiliary space for an adjacency-list graph


- bidirectional search - search simultaneously from the source and the destination until the two searches meet

function bidirectionalBFS(graph, start, target) {           // this template is used to get shortest distance rather than the actual path
    // Same start and target: zero edges needed             // while this pattern is more repetitive, path pattern is required for xtrm hard problems
    if (start === target) return 0;                         // like word ladder-II which requires a diff template

    // Frontiers: nodes at the current BFS layer
    let frontA = new Set([start]);
    let frontB = new Set([target]);

    // Distance from each search's own starting node
    let distA = new Map([[start, 0]]);
    let distB = new Map([[target, 0]]);

    while (frontA.size > 0 && frontB.size > 0) {
        // Always expand the smaller frontier
        if (frontA.size > frontB.size) {
            [frontA, frontB] = [frontB, frontA];
            [distA, distB] = [distB, distA];
        }

        const nextFront = new Set();        // holds the next bfs layer for side we're currently expanding

        // Expand one complete BFS layer
        for (const node of frontA) {
            for (const neighbor of graph.get(node) ?? []) {
                // The searches have connected
                if (distB.has(neighbor)) {
                    return distA.get(node) + 1 + distB.get(neighbor);
                }

                // Don't revisit nodes on this side
                if (!distA.has(neighbor)) {
                    distA.set(neighbor, distA.get(node) + 1);
                    nextFront.add(neighbor);
                }
            }
        }

        // Move to the next layer
        frontA = nextFront;
    }

    return -1; // No path exists
}


- Topological sort(Kahn's algorithm)

    function topologicalSort(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    const indegree = Array(n).fill(0);

    // edges = [[u, v], ...], meaning u -> v
    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;                                  // counts no of incoming edges to v
    }

    const queue = [];

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);           // vertices with indegree zero have no remaining prerequisites
    }

    const order = [];
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];                        // remove one node from queue and process its outgoing edges
        order.push(u);

        for (const v of graph[u]) {
        indegree[v]--;                                // each processed edge decreases its destination's indegree

        if (indegree[v] === 0) {
            queue.push(v);
        }
        }
    }

    // A cycle exists if some vertices remain.
    if (order.length !== n) return [];

    return order;                                     // tc = O(V+E) ; sc = O(V+E)
    }

- DSU

    let n = accounts.length

    let parent = Array.from(
        { length: n},
        (_,i) => i
    )

    let size = Array(n).fill(1)

    function find(x){
        if(parent[x] !== x){
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    function union(x,y){
        let rootX = find(x)
        let rootY = find(y)

        if(rootX === rootY) return false

        if(size[rootX] < size[rootY]){
            [rootX, rootY] = [rootY, rootX]
        }

        parent[rootY] = rootX

        size[rootX] += size[rootY]

        return true
    }

- Dijkstra

    function dijkstra(graph, source) {
        const n = graph.length;
        const dist = Array(n).fill(Infinity);

        const heap = new MinHeap();

        dist[source] = 0;
        heap.push([0, source]); // [distance, node]

        while (!heap.isEmpty()) {
            const [distance, node] = heap.pop();

            // Ignore outdated entries.
            if (distance > dist[node]) continue;

            for (const [neighbor, weight] of graph[node]) {
                const newDist = distance + weight;

                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                    heap.push([newDist, neighbor]);
                }
            }
        }

        return dist;
    }

- bellman ford

    function bellmanFord(n, edges, source) {
        const dist = Array(n).fill(Infinity);
        dist[source] = 0;

        // Relax all edges up to n - 1 times.
        for (let i = 0; i < n - 1; i++) {       // iterates thru each node; works where i/p edge are not in ordered manner
            let changed = false;

            for (const [u, v, weight] of edges) {
                // Cannot travel from an unreachable node.
                if (dist[u] === Infinity) continue;

                const newDist = dist[u] + weight;

                if (newDist < dist[v]) {
                    dist[v] = newDist;
                    changed = true;
                }
            }

            // No improvement means we're done.
            if (!changed) break;
        }

        // Detect a reachable negative-weight cycle.        // its an issue bcoz can keep travellg around cycle forever making path smaller with
        for (const [u, v, weight] of edges) {               // each iteration. thus theres no finite shortest to the affected nodes
            if (dist[u] === Infinity) continue;

            if (dist[u] + weight < dist[v]) {
                return null;
            }
        }

        return dist;
    }


- 0-1 BFS

    class Deque {
        constructor() {
            this.items = [];
            this.head = 0;
            this.tail = 0;
        }

        isEmpty() {
            return this.head === this.tail;
        }

        pushFront(value) {
            this.items[--this.head] = value;
        }

        pushBack(value) {
            this.items[this.tail++] = value;
        }

        popFront() {
            if (this.isEmpty()) return undefined;

            const value = this.items[this.head];
            delete this.items[this.head++];
            return value;
        }
    }

    function zeroOneBFS(graph, source) {
        const n = graph.length;
        const dist = Array(n).fill(Infinity);
        const deque = new Deque();

        dist[source] = 0;
        deque.pushBack(source);

        while (!deque.isEmpty()) {
            const node = deque.popFront();

            for (const [neighbor, weight] of graph[node]) {
                const newDist = dist[node] + weight;

                if (newDist >= dist[neighbor]) continue;

                dist[neighbor] = newDist;

                if (weight === 0) {
                    deque.pushFront(neighbor);
                } else {
                    deque.pushBack(neighbor);
                }
            }
        }

        return dist;
    }

- MST refers to the subset of edges in a connected,weighted,undirected graph that connects all vertices together w/o any cycles while keeping sum of edges as small as possible; if all edge weights in the graph are unique, the MST is one-of-a-kind; if weights repeat, multiple valid MSTs may exist

- - Prims


    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(item) {
            const h = this.heap;
            h.push(item);

            let i = h.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);

                if (h[p][0] <= h[i][0]) break;

                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        }

        pop() {
            const h = this.heap;
            if (h.length === 0) return null;

            const result = h[0];
            const last = h.pop();

            if (h.length > 0) {
                h[0] = last;
                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (
                        left < h.length &&
                        h[left][0] < h[smallest][0]
                    ) smallest = left;

                    if (
                        right < h.length &&
                        h[right][0] < h[smallest][0]
                    ) smallest = right;

                    if (smallest === i) break;

                    [h[i], h[smallest]] =
                        [h[smallest], h[i]];

                    i = smallest;
                }
            }

            return result;
        }

        get size() {
            return this.heap.length;
        }
    }

    function primHeap(graph) {
        const n = graph.length;
        if (n === 0) return 0;

        const visited = new Array(n).fill(false);
        const pq = new MinHeap();

        // [edgeWeight, vertex]
        pq.push([0, 0]);

        let totalCost = 0;
        let verticesUsed = 0;

        while (pq.size > 0) {
            const [weight, u] = pq.pop();

            if (visited[u]) continue;

            visited[u] = true;
            totalCost += weight;
            verticesUsed++;

            for (const [v, edgeWeight] of graph[u]) {
                if (!visited[v]) {
                    pq.push([edgeWeight, v]);
                }
            }
        }

        // If not every vertex was reached, no spanning tree exists
        return verticesUsed === n ? totalCost : -1;
    }

- - Kruskal 

    function kruskal(n, edges) {
        // Sort edges by ascending weight
        edges.sort((a, b) => a[2] - b[2]);              // input is an edge list: [u, v, weight]

        const dsu = new DSU(n);                         // unlike prim, kruskal uses dsu

        let totalCost = 0;
        let edgesUsed = 0;

        for (const [u, v, weight] of edges) {
            // Only accept edges joining different components
            if (dsu.union(u, v)) {
                totalCost += weight;
                edgesUsed++;

                // A spanning tree has exactly n - 1 edges
                if (edgesUsed === n - 1) {
                    return totalCost;
                }
            }
        }

        // Not enough edges were accepted: graph is disconnected
        return n <= 1 || edgesUsed === n - 1
            ? totalCost
            : -1;
    }


- Floyd warshall

    function floydWarshall(n, edges) {
    // Step 1: Initialize distance matrix
    const dist = Array.from(
        { length: n },
        () => Array(n).fill(Infinity)
    );

    // Distance from each node to itself is 0
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    // Step 2: Build initial distances from edges
    for (const [u, v, weight] of edges) {
        dist[u][v] = Math.min(dist[u][v], weight);

        // For an undirected graph, also add:
        // dist[v][u] = Math.min(dist[v][u], weight);
    }

    // Step 3: Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (
            dist[i][k] === Infinity ||
            dist[k][j] === Infinity
            ) {
            continue;
            }

            dist[i][j] = Math.min(
            dist[i][j],
            dist[i][k] + dist[k][j]
            );
        }
        }
    }

    // Step 4: Return all-pairs shortest distances
    return dist;
    }

    // Example: directed graph
    const n = 4;
    const edges = [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1]
    ];
