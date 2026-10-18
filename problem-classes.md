# Complexity classes

1) P(polynomial time) - set of problems that can be solved efficiently by a computer in polynomial time; algorithm runs in polynomial time if the time it takes to complete is upper-bounded by a polynomial expression of the input size n(like O(n^k) where n is the size of the input and k is a positive constant)

2) NP(non-deterministic polynomial time) - set of dcsn problems for which a proposed soln can be verified in polynomial time; Example: Sudoku- finding a solution might take a long time for a difficult puzzle but given a completed sudoku grid, checking whether it satisfies the rules is relatively easy

3) NP-hard - an np hard problem is as hard as every other np problem and may not be a dcsn problem and thus not an np(diff b/w nph and npc below); if we could solve an NP-hard problem efficiently, we could use that solution to solve every problem in NP efficiently (assuming the reductions are polynomial-time)

4) NP-complete - satify conditions of belonging to an np and being an np-hard; 

- diff b/w nph and npc - eg. a TSP - visit 100 cities and find shortest route; it has two versions - Is there a route with total distance less than 500km? this is a dcsn problem and thus comes under np-complete; find the shortest route thru all 100 cities - this doesnt req dcsn making and thus isnt np; here both versions are closely rel8d but their reqmts differ 