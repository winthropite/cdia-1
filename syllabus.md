Must read
WD110 -- Web Interactivity 1
Day 1
Day 2
Day 3
Day 4
Day 5
Day 6
Day 7
Day 8
WD111 -- Web Interactivity 2
Day 9
Day 10
Day 11
Day 12
Day 13
Day 14
Day 15
Day 16
Final Project Requirements
WD111 -- Web Interactivity 3
Day 4
Resources

# Code examples

https://github.com/jessebeach/cdia
WD110 -- Web Interactivity 1

## Day 1


+ CSS selector exercise in a GDoc
+ compound selectors using element, class, and IDs; attribute selectors
+ Review of doctype, html element, head element, body element, link element and inclusion of stylesheets with the <link> tag
+ Review of HTML form elements
+ type, name and value attributes
+ Start building the portfolio viewer, CSS version
+ https://github.com/jessebeach/cdia/tree/gh-pages/portfolio-viewer
+ Build an HTML form with 2 columns

## Day 2


+ Advanced CSS selector exercise in a GDoc
+ :hover, :first-child, :last-child, :nth-child
+ Build a simple content/sidebar layout
+ discuss collapsing containers with floated content
+ build a clearfix
+ JavaScript variables and functions; introduction to the browser console
+ var statement, variable types: number, string
+ function statement and the return statement
+
+ Finish building the portfolio viewer, CSS version
+ https://github.com/jessebeach/cdia/tree/gh-pages/portfolio-viewer
+
+ Including fonts with Google Fonts.
+ Resources
+ http://jqfundamentals.com/chapter/javascript-basics

## Day 3


+ Advanced CSS selector exercise in a GDoc
+ next sibling selector, all following siblings selector, ::before, ::after
+ Review of inclusion of scripts with the <script> tag
+ Select elements from the DOM
+ document.getElementById, document.getElementByClassName
+ Inspecting DOM elements and JavaScript variables
+ console.log
+ Introduction to objects
+ Object literals, properties, dot notation, index notation
+ Changing properties of DOM elements

## Day 4

+ Building HTML elements with JavaScript
+ Function writing exercise in a GDoc
+ Write a function that adds two numbers together and returns the sum
+ Write a function that multiplies two numbers and returns the answer
+ Write a function that divides two numbers and returns answer
+ Write a function that concatenates two strings
+ Write a function that takes any dom element, extracts the text content, and returns that content wrapped in a div element.
+ Write a function that will change the font color of any dom element to red
+ Create an object
+ Create an object with the property ‘date’ and the value of today’s date
+ Introduction of arrays
+ What is an array and how do I visualize it?
+ Looping through an array
+ fun with loops! we’ll work on exercises in class.

## Day 5

Selector, Variable, Function, Object and Array building exercises in a GDoc
Select any element that follows an h2 tag
Select all anchor tags that are children of level 2 lis
Create a variable foo and assign it the value “5”.

+ Write a function that adds two numbers together and returns the sum
+ Write a function that multiplies two numbers and returns the answer
+ Write a function that divides two numbers and returns answer
+ Write a function that concatenates two strings
+ Write a function that takes any dom element, extracts the text content, and returns that content wrapped in a div element.
+ Write a function that will change the font color of any dom element to red
+ Create an object
+ Create an object with the property ‘date’ and the value of today’s date
+ Create the variable foo and assign it the function multiply () {}
+ Invoke the function foo

Introduction to jQuery!
What is jQuery, what do we use it for?
It’s a library
We use it to avoid the inconsistencies between JavaScript implementations across browsers and to speed up our development.
John Resig started the jQuery project in 2006 (here in Boston), but since then many many developers have contributed to it.
Do other libraries exist?
How do I get jQuery on my site?
CDN
File include
What’s the minified vs. the development file?
Troubleshooting common problems.
Is jQuery loaded? What version is loaded? Is jQuery loaded before scripts that require it?
Selecting HTML elements in the DOM
finally, all our CSS selector writing exercises make sense!
jQuery selector Duckhunt!
HTML objects and jQuery objects, what’s the difference?
HTML objects are native browser objects
jQuery objects are arrays of HTML objects with additional information and methods to interact with the objects.
Using jQuery API documentation

jQuery object manipulation
addClass, removeClass, toggleClass, attr, removeAttr

Let’s build something!
Image gallery zoomer
Day 6


Exercises
Select all of the images on the page and save them to var $img
How many images are on the page?
Add an attribute
Remove an attribute
hide elements
show elements
slide elements up; slide elements down
chain the up/down sliding
traversing: next, prev, parent, children, siblings
manipulation: attr, class
Creating elements with $()
Continue building our gallery zoomer
Wrap each image in a link
Select all elements with a src attribute
Set the href of the link to the src of the image
Set the width and height of the images to a constant size
Wrap the images in a div
Center the images in the div
Crop the overflow
On hover, zoom the image; on hover out, return the image to its original scale
Put a description under each image
make the description visible on hover of the image
Positioning and floating
float
position: static, relative, absolute, fixed
What are ems?
How do we calculate them?
What is a rem?
What is an ex?
Further study
http://learnjquery.tutsplus.com/
Day 7


Magical code snippets to copy and paste
jQuery $(document).ready() and the onload event of a page load
Immediately Invoking Function Expression (IIFE)
(function ($) {}( /* code */));

Final project check-in
Build the front page of your final project in a wireframe using a grid system
Review of the prior classes before jumping into jQuery and plugins.
Day 8

WD111 -- Web Interactivity 2

Day 9


jQuery methods

css
append, appendTo
insertBefore, insertAfter
hide, show
Build a disclosure FAQ
simple clicking on the question
Extend to be more like a widget
Insert a span element and style it as a twisty
Build a stylizer pane
Simple clicks with hard-coded styles
Form elements to supply styling values
Build a click-capture example with a moving box.
Day 10


Animation with jQuery
slideUp, slideDown
animate()
Day 11


Building DOM elements with jQuery
$(‘<div>’)
Day 12


Introduction to plugins
What is modularity (superficial overview)
How do we use a plugin on a page?
What can go wrong?
Loading the plugin before jQuery is loaded.
Webform validation
Ketchup plugin
http://demos.usejquery.com/ketchup-plugin/
Day 13


Plugins continued
Image rotator, cycle plugin
http://jquery.malsup.com/cycle/
Day 14


Plugins continued
Creatin a lightbox, jQuery lightbox plugin
http://leandrovieira.com/projects/jquery/lightbox/
http://www.woothemes.com/flexslider/
Day 15


Architecting your JavaScript file
How to play well with other developers

Special Bonus!!
Getting your github account set up. This is your online portfolio.
Get git.
Loops, loops and loops

Project time
Day 16


Responsive web design
Final project review session

Final Project Requirements


3 HTML pages
At least 1 external CSS file that you wrote
At least 1 external JS file that you wrote
Use 2 jQuery plugins, for example
Gallerific
Lightbox
jCarousel
FlexSlider
1 HTML Form with simple validation
You’ll just need to use jQuery to validate that the form elements have values when the form is submitted. Indicate to the user the elements of the form that violate the validation by making them stand out visually.
Use a grid-base layout like 960.gs
Design is important but not critical. A site with well-formatted, thought-out code and a simple design will do much better than a flashy site with messy code for this class.
WD111 -- Web Interactivity 3

Day 4


Building an accordion
jQuery UI
IIFE - Immediately invoking function expressions
http://benalman.com/news/2010/11/immediately-invoked-function-expression/
Custom
Turn it into a jQuery plugin
Resources


http://api.jquery.com
http://jqfundamentals.com/
http://jqfundamentals.com/chapter/javascript-basics
