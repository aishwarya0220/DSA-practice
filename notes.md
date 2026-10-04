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


