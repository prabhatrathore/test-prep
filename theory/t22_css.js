/**
 --------------------------------------------------------
 
 display: grid;
 it tells the browser to arrange the children of that element in a row-and-column layout.
 
 Example:
 Without display: grid; → items appear one below another (normal flow).
 With display: grid; → you can control rows, columns, spacing, etc.
 
 --------------------------------------------------------
 grid-template-columns: repeat(2, 1fr);  
 fr stands for fraction unit in CSS Grid.
1fr means: take up one part of the available space.

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

--------------------------------------------------------

width: 100%;	Container takes full width of the page.

--------------------------------------------------------

height: 100vh;	Height equals full screen height.

vh stands for viewport height.
1vh = 1% of the height of the browser window / screen.
100vh = full screen height.
--------------------------------------------------------
padding: 10px
Adds inner space between the content and the border of the element.

Example:
If you put text inside a box, padding makes some breathing room around the text inside the box.

--------------------------------------------------------
.grid-item {
  border: 2px solid #333;         /* Adds a border around the box */
//   padding: 20px;                  /* Adds space inside the box (around the text) */
//   background-color: #f3dcdc;      /* Gives a light background color to the box */
//   display: flex;                  /* Allows easy alignment of content inside the box */
//   justify-content: center;        /* Centers content horizontally */
//   align-items: center;            /* Centers content vertically */
//   font-weight: bold;              /* Makes the text bold */
// }

/*
--------------------------------------------------------


 */