Mini Assignment
React and JavaScript

Goal
The goal of this assignment is to get comfortable using React and more experience with JavaScript.  You will be creating a 2X2 grid, where each square on that grid can be turned “on” or “off”.  Additionally, each time you select a cell on this grid, a counter at the top will increment or decrement to show the current number of “on” cells.  A demo of this can be seen below.  You will work on this assignment alone.

Rubric:
Child Component - 10 points
Parent Component - 10 points
Clean and readable code - 5 points


Task 1: Child Component
The first part of this assignment is to create the individual cell components.  You must use functional components for this.  You should style this component so that it is a 100px X 100px square, with a 1px solid grey border.  By default, the background color should be white.  When a user clicks on the square, it should change the background color to black; clicking on it again should turn it back to white.  The “state” of the child component can be set in the child component or in the parent component (see below).

Task 2: Parent Component
The second part of this assignment is to create a parent component that creates a 2X2 grid of the child components.  Additionally, there should be a counter at the top of this component that shows how many cells are “on” (i.e., have a black background color.)  The parent component should provide at least one attribute to the child component via props, whether this is a boolean, class name, or function.

Task 3: Clean and readable code
The focus of this assignment is to get practice writing code in React and JavaScript.  You should make sure that your code is clean, concise and readable and follows patterns established in other courses.

Extra Points 3: Use Context
Instead of passing data or functions between the parent and child component, use Context to handle all the data.  

Deliverables
For this assignment, create a new Github repo and push there. Make sure to add the TAs as contributors if your repo is private.  Please indicate if you did the extra credit iin your comments.
