/**
 --------------------------------------------------------
 
 display: grid;
 ((it tells the browser to)) arrange the children of the element in a row-and-column layout.
 
 Example:
 Without display: grid; → items appear one below another (normal flow).
 With display: grid; → we can control rows, columns, spacing, etc.
 
 --------------------------------------------------------
 grid-template-columns: repeat(2, 1fr);  
 fr stands for fraction unit in CSS Grid.
1fr means: take (up) one part of the available space.

**********************************************

Creates 2 equal-width columns.
Divide the available width into 2 equal parts, each part is 1fr (one fraction). 
==================================

If it was 1fr 2fr → first column gets 1 part, second gets 2 parts (second is double the width)

--------------------------------------------------------
 
grid-template-rows: repeat(2, 1fr);	Creates 2 equal-height rows.

--------------------------------------------------------

gap: 10px;	Adds space between the grid items.

grid = the layout structure of rows & columns that holds those items

------------------------------------------------------------

width: 100%;	Container takes full width of the page.

-------------------------------------------------------------

height: 100vh;	Height equals full screen height.

vh stands for viewport height.
1vh = 1% of the height of the browser window / screen.
100vh = full screen height.
--------------------------------------------------------
padding: 10px
 Add inner space between the content and the border of the element.

Example:
If you put text inside a box, padding makes some breathing room around the text inside the box.

--------------------------------------------------------
px means pixel — the smallest unit of measurement on the screen.

.grid-item {
  border: 2px solid #333;         /* Adds a border around the box,  */
//   padding: 20px;                  /* Adds space inside the box (around the text) */
//   background-color: #f3dcdc;      /* Gives a light background color to the box */
//   display: flex;                  /* Allows easy alignment of content inside the box */
//   justify-content: center;        /* Centers the content horizontally */
//   align-items: center;            /* Centers the content vertically */
//   font-weight: bold;              /* Makes the text bold */
// }

/*
--------------------------------------------------------
what is pseudo-class ?
A pseudo-class is used to style an element when something happens to it.
example 
button:hover {
  background-color: blue;
}

Here :hover is a pseudo-class, and it applies style when the mouse is over the button.

So pseudo-classes style elements based on actions or conditions, like:
when the mouse is over it (:hover)
when it’s clicked (:active)
when an input is selected (:focus)
--------------------------------------------------------

What does box-sizing: border-box do?
Keeps the element size fixed even if padding or border is added.
--------------------------------------------------------

Example (without border-box):
width: 200px
padding: 20px
Actual size becomes 240px (200 + 20 + 20)

"With border-box" :
width stays 200px, padding fits inside it.
--------------------------------------------------------

explanation of BFS and DFS in a graph
✅ BFS (Breadth-First Search)

BFS explores a graph level by level (layer by layer). It starts at a node → visits all its neighbors first
Then goes to neighbors of neighbors

🎯 Think of it like spreading outward in waves.
📌 Uses "Queue" (FIFO) → First In, First Out

Real-life example:
Finding the shortest path in Google Maps — BFS checks all nearby places first.

Example order (Graph traversal):
   A
  / \
 B   C
/ \
D  E
--------------------------------------------------------
✅ DFS (Depth-First Search)

DFS explores as deep as possible along one path before backtracking.
Start at a node → go deep into one direction

If stuck, go back (backtrack) and try another path
📌 Uses "Stack" (LIFO) or recursion
🎯 Think of it like going down one path until dead-end.

Example order (same graph):
➡️ A → B → D → E → C

--------------------------------------------------------
--------------------------------------------------------





 */