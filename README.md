# web-development
This repo is for strengthening my full-stack web development skills and showcasing my project builds.
- Using Sublime text editor
- Installed JsPrettier
-----------------------------
Section 2:
- Heading Element:
```html
<h1></h1> .... <h6></h6>
```
- Paragraph Element:
```html
<p></p>
```
- Self Closing Tags: Void Elements*
  - Horizontal Rule ~
    ```html
    <hr/>
    ```
  - Single Line Break ~
    ```html
    <br/>
    ```

Section 3:
- Unordered List:
```html
<ul> <li></li> </ul>
```
- Ordered List:
```html
<ol> <li></li> </ol>
```
- Nested List: Indentation is important*
- Anchor Element:
```html
<a href="insert URL">Title</a>
<tag [attribute1] [attribute2]></tag>
```
- Image Element:
```html
<img src="URL" alt="Description"/> ~ Void Elements*
```

Section 4:
- Absolute File Paths: /home/morafa/Desktop/Web Development Projects/Resources/Section 4
- Relative File Paths: ../Section 3 ~ Search a level up | ./Section 2 ~ Search within the same directory
- Interesting find: Nested tags?
```html
<a><img/></a>
```
- HTML Boilerplate:
```html
<!DOCTYPE html> ~ File version declaration | HTML5
<html lang="en"> ~ Opening tag with an english language attribute
  <head> ~ Head element to help website render behind the scene
    <meta charset="UTF-8"> ~ Character set to display (meta) in the website
    <title>My Website</title> ~ Title to display in tab
  </head>

  <body> ~ Content container
    <h1>Hello World!</h1> ~ Insert website content
  </body>
</html> ~ Closing tag
```

Section 5:
- HTML: Hypertext Markup Language*
- CSS: Cascading Style Sheets*
- SASS: Synthetically Awesome Style Sheets
- LESS: Leaner Cascading Style Sheets
```
  - Inline: <tag style="css" />
    - <html style="background: blue"></html> ~ Applied to a single element (Not recommended overall, only use it for specific)
  - Internal: <style>css</style> ~ Can be applied to to multiple targets within a single HTML page
    - <html>
        <head>
          <style>
            html{ ~ Selector (html: entire page; h1: ONLY h1 tags; )
              background:red; ~ CSS Code
            }
          </style>
        </head>
      </html>
  - External: <link href="style.css"/>
    - Separate file imported into multiple HTML pages
    - <html>
        <head>
          <link 
            rel="stylesheet" ~ Relationship
            href="./styles.css" ~ Location
          />
        </head>
      </html>
    - html{
        background: green;
      }
```
- Selectors:
  - tag ~ h1, p, a etc.
  - class ~ .class etc. ~ Can be applied to multiple elements
  - id ~ #id etc. ~ Can only be applied to one element in a single HTML file
  - Attribute selector
    - <tag id=value class=value draggable=value src=value href=value alt=value></tag>
    - p[draggable] { color:red; } ~ Only draggable paragraphs will be affected
    - p[draggable="false"]{ color:red; } ~ Only false draggable paragraphs will be affected
    - *{ color:red; } ~ Universal selector applies to all elements
  - Note image height/width attribute, HTML value = "200"; CSS value : 200px

Section 6:
- Color properties: Name colors ~ Antiquewhite; Hex code ~ #FAF8F1
- Font size: 1px ~ Pixel (1/96th inch|0.26mm); 1pt ~ Point (1/72nd inch|0.35mm; 1em ~ M (100% of parent); 1rem ~ Relative (100% of root); xx-large
- Font weight: normal/bold ~ Keywords; lighter(-100)/bolder(+100) ~ Relative to parent; 100-900 ~ number
- Font family: Helvetica(Typeface), sans-serif(backup generic font type); "Times New Roman", serif
- Text alignment: text-align: left, right, center, justify
- Important CSS Concept ~ Box Model: height, width, margin, padding, border
- Margin properties: Affects elements externally (4 values - clockwise) ... 0px-top/bottom 20px-left/right (2 values)
  - margin: 10px ~pushes outward from the border
- Padding properties: Affects elements internally (4 values - clockwise) ... 0px-top/bottom 20px-left/right (2 values)
  - padding: 20px ~pushes outward between the element and the border
- Border properties: (4 values - clockwise) ... 0px-top/bottom 20px-left/right (2 values)
  - border: 10px-thickness solid-style black-color; (border property projects outwards and your element remains unchanged)
  - border-top: 0px;
  - border-width: 0px-top 10px-right 20px-bottom 30px-left; 
- Content division element:
  ```
  <div></div>
  ```

Section 7:
- Internal styling cascades into inline styling, hence inline has the last position*
- Position (in code) > Specificity (element>class>attribute>id) > Type (external>internal>inline) > Importance (keyword: !important;)
- Combine CSS Selectors:
  - Group rule:
    ```
    selector,selector {
      color:blueviolet;
    }
    ```
  - Child rule: 1 generation deep*
    ```
    selector > selector {
      color: firebrick;
    }
    ```
  - Descendant rule:
    ```
    selector selector {
      color: blue;
    }
    ```
  - Chaining rule:
    ```
    selectorselector {
      color: seagreen;
    }
    ```
  - Combining rules:
    ```
    selector selectorselector {
      fonts-size: 0.5rem;
    }
    ```
- Positioning: (top,left,right,bottom)
  - Static: HTML default flow
  - Relative: Position relative to default position
  - Absolute: Postion relative to nearest positioned ancestor or top left corner of webpage (Z-index: This is to determine which element layers ontop or below with initial default value being 0
  - Fixed: Position relative to top left corner of browser window

Notes: 
- Inspect > Three dots > More tools > CCS Overview > Obtain colour palettes
- Inspect > Search for the element > Right-click on the element > Copy selector > Obtain selector combination

Section 8:
- Display properties:
  - By default the element takes up the entire width web page
  - Another type of element is called Span
    - Span element by default has a different value for its display property: inline
    ```
      <p>Hello<span> Beautiful</span> World</p>
    ```
  - Block: By default most elements are set to this value - Full-width of the webpage
    ```
      h2 {display: block;}
    ```
  - Inline: Elements will display inline with each other
    - Can't set the width and height becasue default is size of content
    ```
      h2 {display: inline;}
    ```
  - Inline-block: Hybrid element which allows a mixture of inline and block
    - Ability to set height and width of elements
    ```
      h2 {display: inline-block;}
    ```
  - None: This makes any element on the screen dissapear e.g Checklist or button dynamics
    ```
      h2 {display: none;}
    ```
- Float property: Allows us to format images wrap text around an element
  ```
    img {float: left;} OR img {float: right;}
  ```
  - To leave space between body and footer:
    ```
      footer {clear: left;} OR footer: {clear: right;} OR footer: {clear: both;}
    ```
- Webpage Responsiveness: 4 ways to achieve similar results
  Note:
  ** I've noticed that when responsiveness is needed, another meta tag is added
  ** Test resposiveness; Inspect > CSS overview > Top left second widow tab > Manipulate window sizes based on real products
  ```
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">
  ```
  - Media Queries:
    ```
      @media (max-width: 600px) { /*CSS for screens below or equal to 600px wide*/}
      OR
      @media (min-width: 600px) { /*CSS for screens above or equal to 600px wide*/}
      OR
      @media (max-width: 600px) and @media (min-width: 900px) { /*CSS for screens above or equal to 600px wide*/}
      OR
      @media screen(orientation: landscape){ /*Styles for landscape orientation*/}
      OR
      @media print(orientation: landscape){ /*Styles for landscape orientation*/}
      ...
      Refer to docs for more types of media queries
    ``` 
  - CSS Grid: 2D Layout - Columns AND Rows
    ```
      <div class="grid-container">
        <div class="first card"></div>
        <div class="card"></div>
        ...
      </div>

      .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr; - fraction or pixels: flexible way to create equal widths essentially 2 columns
        grid-template-rows: 100px 200px 200px:
        gap: 30px; - between columns and rows
      }

      .first {
        grid-column: span 2; - full width of the this 2 column grid
      }

      .card {
        background-color: blue;
      }
    ```
  - CSS Flexbox: 1D Layout - Horizontal OR Vertical plane
    ```
      <div class="flex-container">
        <div class="first card"></div>
        <div class="second card"></div>
        <div class="card"></div>
        ...
      </div>

      .flex-container {
        display: flex;
        flex-driection: column; OR flex-direction: row;
      }
    
      .card {
        background: blue;
        border: 30px solid white;
        height: 100px;
        flex: 1; - divide each of the cards into equal width
      }
    
      .first {
        flex: 2; - twice the width of normal card classes
      }

      .second {
        flex: 0.5; - half the width of normal card classes
      }
      
    ```
  - External Framework i.e Bootstrap: Not built-in to CSS, integrated into code (Built ontop of Flexbox)
    - 12 division system
    - Full width of a webpage divided into 12 equal portion: col-6 equals to half of the page etc.
    - Styling can be brought in easily into CSS using some of the pre-build bootstrap components
    ```
      <div class="container">
        <div class="row">
          <div class="card col-6">
            Card
          </div>
          <div class="card col-2">
            Card
          </div>
          <div class="card col-4">
            Card
          </div>
        </div>
      </div>
    ```

Section 9:
- Create a table in HTML: Only use when semantically creating a table e.g. Represent tabular data like "How many car tyres have you sold" OR "How many visitors you had in May"
- Do not use this when styling your web page in a table layout, there are much better tools
  ```
    <table>
      <tr class="row"> - Table row
        <td class="col1"></td> - Table data
      </tr>
    </table>
  ```
- You can use display inline-blocks, but can cause some issues
- You can use position absolute, but its inflexible layout as soon as another element is not absolute
- MOST RELIED ON, is the float tool but its also kind of hacky
  - Only use float when wrapping text around an image
- Use tools like FlexBox, Grid OR Bootstrap when laying out an OVERALL PAGE STRUCTURE.
- FlexBox:
  - It does not abide by the same rules as the other display set {inline, inline-block, block}
  - Flex display: Flex (Full width of webpage) / Inline-flex (Follows size of content)
  - Flex direction: Row (Default: main-axis -left/right; cross-axis -top/bottom) / Column (main-axis -top/bottom; cross-axis -left/right)
  - Flex basis: Setting the width/height based on the axis its on
  - Flex layout: Align, Justify and Wrap
    - Order property: Order of the child item (Default - order: 0;)
    - Wrap property: Useful when you run out of space on the HORIZONTAL (Default - flex-wrap: nowrap;)
      - nowrap
      - wrap
      - wrap-reverse
    - Justify Content property: Justify content sets the distribution in the container along the main-axis
      - flex-start
      - flex-end
      - center
      - space-between
      - space-around
      - space-evenly
    - Align Items property: Position of the item on its cross-axis, applied to the container with flex-wrap set to nowrap and given a viewport height (height: 70vh;)
      - flex-start
      - flex-end
      - center
      - baseline
      - stretch
    - Note:
      - You can access individual items and align it individually using the align-self property (align-self: flex-start;)
      - Flex-direction and Flex-wrap combined becomes Flex-flow: column/row wrap/nowrap/wrap-reverse
    - Align Content property: Position of the item on its cross-axis, applied to the container with flex-wrap set to wrap and given a viewport height (height: 70vh;)
      - flex-start
      - flex-end
      - center
      - space-between
      - space-around
      - stretch
  - Flex sizing: Shrinking and Growing
    - Content width (Default) < Width (Set) < flex-basis (Default: auto) < min-width/max-width (Default: Width of the longest word/Width for all text to display on a sigle line)
    - flex-grow/flex-shrink (Default: 0/1)
      ```
      display: flex;
      gap: 10px;

      item 1 {
        width: 100px;
        flex-basis: 200px;
        max-width: 100px;
        min-width: 300px;
        flex-grow: 1;
        flex-shrink: 1;
        flex: 1 1 0; OR flex: 1 [grow shrink basis]
      }
      ``` 
  ```
    <div class="container">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>

    .container {
      display: flex; OR display: inline-flex;
      flex-direction: row; OR column;
      flex-wrap: nowrap; OR flex-wrap: wrap; Or flex-wrap: wrap-reverse;
      justify-content: flex-start;
      alignt-items: flex-start;
      height: 70vh;
      gap: 10px;
    }

    * {
      flex-basis: 100px - Only applied to the children of the container
    }

    .one {
      order: 1; - Brings this element to end of the container as its the highest value to all other defaulting to zero
      align-self: flex-start;
    }
  ```

Section 10:
- CSS Grid allow us to create complex a 2D Layout System
- Difference between Flexbox AND Grid:
  - Flexbox is a tool that helps align content along a 1D line
  - Grid is a tool to align content along a 2D grid
  - It is possible to combine both Flexbox + Grid together vice-versa Grid + Flexbox
  - Grids take up the whole width of the page but only uses the max amount of height based on the content to fit
  ```
    <div class="container">
      <p>...</p>
      <p>...</p>
      <p>...</p>
    </div>

    .container {
      display: grid;
      grid-template-columns: 1fr 2fr; - Fractional ratio 1:2
      grid-template-rows: 1fr 1fr; - Fractional ratio 1:1 (Equal height)
      gap: 10px;
    }
  ```
- Grid Sizing: Size of columsn and rows
  - Note if you create a larger grid than the amount of items specified, the items will be fitted from top-left to bottom-right
  - Note if you create a smaller grid that the amount of items specified, the extra item will follow the existing column width and will fit to row content
  - Note you can set the sizing for future items to control styling in the container, eg. grid-auto-rows: 300px
  - We can use chrome dev tools to inspect the grid in more detail: F12 > Elements > Grid container > Layout tab
  ```
    <div class="container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>

    .container {
      display: grid;
      grid-template-columns: 400px 800px; - Fixed sized grid is not responsive
      grid-template-rows: 100px 200px; OR 100pc auto; - Auto is going to be slightly resposive (Each column is going to fit 100% width to its available space, Each row is going to fit to content)
      grid-template: 100px 200px / 400px 800px; - Rows / Columns [SHORTHAND]
      grid-template-columns: 1fr 2fr; - Fractional sizing (Best*)
      grid-template-columns: 200px minmax(400px,800px); - MinMax sizing
      grid-template-columns: repeat(2, 200px); - Repeat sizing (How many columns, Size of each columns)
      grid-auto-rows: 300px;
    }
  ```
- Grid Placement: How to layout items in the grid
  - Items created in rows and columsn are called Tracks
  - Grid cells are the smallest unit that sit between the columsn and rows
  - Grid lines are the separations between tracks (controlled using the gap property)
  - Attributes that contribute to a grid placement:
    - Lines
    - Tracks
    - Cells
    - Container
    - Items
  - Properties:
    - grid-column: span 2; - Span 2 columns horizontally
      - Shorthand for grid-column-start: 1; grid-column-end: -1;
    - grid-cow: span 3; - Span 3 rows vertically
      - Shorthand for grid-row-start: 1; grid-row-end: -1;
    - order: 1; - Shifts item to furthest end of the grid
    - You can also just define all its start and end instead of using order
      - grid-area: 2 / 1 / 3 / 3 (grid-row-start / grid-column-start / grid-row-end / grid-column-end
  - Note Grid allows you to overlay items ontop of each other

Section 11:
- Bootstrap is one of many CSS External Layout Systems, most popular
- Simple class pre-built codes, with a 12 column layout system built ontop of Flexbox
- Mobile first approach > Desktop
```
  <ul class="[nav nav-pills]">
    <li>
      <button class="[nav-link active rounded-5]">Home</button>
    </li>
  </ul>
```
- Opensource CSS Framework:
  - Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/
  - Foundation
  - MUI
  - Tailwind
- Use Bootstrap when creating:
  - Mobile first responsive websites
  - Simple quick websites
  - NOT complex full control projects
- To use it:
  - Include the CDN link (Content Delivery Network) into <head>
  ```
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
  ```
  - Include the Script for functionality just before </body>
  ```
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
  ```
  - Note: If you want to use your OWN stylesheet make sure to add it after the bootstrap link in the header
  ```
    <link rel="stylesheet" href="./css/style.css">
  ```
- Bootstrap Layout: 12 column layout system
  - 3 components: div of class container > div of class row > div items laid out using the column class system
  - Auto spacing distribution, spans the width of the entire container
  ```
    <div class="container">
      <div class="row">
        <div class="col">Hello</div>
      </div>
    </div>
  ```
  - Screen size class and their breakpoints:
    - .container | < 576px (Foldable phone/Narrow phone screens)
    - .container-sm | >= 576px (Mobile)
    - .container-md | >= 768px (Tablets/IPads)
    - .container-lg | >= 992px (Laptop)
    - .container-xl | >= 1200px (Desktop)
    - .container-xxl | >= 1400px (TV)
    - .container-fluid | All sizes
    - Most popular: .container (nice margins) & .container-fluid (edge-edge behaviour)
  - Sized columns: col-2 | col-4 | col-6 OR col-2 | col-10
  ```
    <div class="container">
      <div class="row">
        <div class="col-2">Hello</div>
        <div class="col-4">Hello</div>
        <div class="col-6">Hello</div>
      </div>
    </div>
  ```
  - In a div you can also have multiple breakpoints:
    - col-sm-12 col-md-8 col-lg-4 |:
      - Large device and above, take up 4/12 of the width
      - Medium device, take up 8/12 of the width
      - Small device, take up 12/12 full width
  - Mix and Match:
    - col-2 | col-4 | col
    - col-6 col-md-4 col-6 |
  - Note: When working with responsiveness, use Chrome Inspector > Toggle device toolbar (Ctrl+Shift+M)
- Bootstrap Components: Pre-built and pre-styled components by adding a bootstrap class
  - Bootstrap examples | https://getbootstrap.com/docs/5.3/examples/
  - Bootstrap icons | https://icons.getbootstrap.com/
  - Easily build well thought out designed websites
- Bootstrap Spacing:
  - {property}{sides}-{size} for xs
  - {property}{sides}-{breakpoint}-{size} for sm, md, lg, xl and xxl
  - Property:
    - m - margin
    - p - padding
  - Sides:
    - t - top
    - b - bottom
    - s - start ?
    - e - end ?
    - x - left/right ?
    - y - top/bottom ?
  - Size:
    - 0 ... 5
    - auto
- Bootstrap Darkmode:
  ```
    <html lang="en" data-bs-theme="dark">
  ```
- Note: Google has lots of FREE Bootstrap Themes

Section 12:
- Web Design:
  - You only have 3seconds to set a good impression
  - Web Design Principles:
    - Colour Theory
      - Art/Science of creating the perfect colour palette for your website
      - Consistency
      - Mood (Red:Love|Energy|Intensity; Yellow:Joy|Intellect|Attention; Green:Freshness|Growth|Safety; Blue:Stability|Trust|Serenity; Purple:Royalty|Wealth|Femininity)
      - Combining Colours: Use Adobe Colour Wheel / Colour Hunt
        - Analogous Colours: Selecting 2 colours next to each other on the colour wheel
        - Complementary Colours: Selecting 2 colours opposite of each other on the colour wheel
        - Triadic colour palette
        - Perfect square
        - etc.
    - Typography: Readibility & Legibility (Open shapes | Ample intercharacter spacing | Unambiguous forms | Varying proportions)
      - Serif | Stable(Minion Pro)/Authoritative(Trajan)/Respectable(Baskerville)
        - Old Style/Traditional/Modern
      - San-Serifs | Sensible(Helvetica)/Simple(Avenir)/Straighforward(Din)
      - Script | Personal(Freestyle Script)/Creative(Adios Script Pro)/Elegant(Snell Roundhand)
      - Display | Friendly(Vag Rounded)/Loud(Gin)/Amusing(Thirsty Rough)
      - Modern | Stylish(Snackers Gothic)/Chic(Gotham)/Smart(Futura)
      - Note: Stick to 2 fonts per design with similar Mood and Time Era OR Contrast between heading and body by changing Serif-ness or Weights
    - User Interface Design
      - Hierarchy: More important information is displayed first
        - Colours
        - Size
        - Font weights
      - Layout
        - Optimal line length: 40-60 chars per line
      - Alignment:
        - Positioning of elements on the screen
        - Reduce the number of alignment points
      - White Space: Empty space around your element or text
        - Adding more white space elevates your design for that minimalist look
      - Audience: Design based on your audience
    - User Experience Design: Invisible, effortless
      - Simplicity
      - Consistency
      - Readibility: F-layout/Z-layout
      - All-platform design: Mobile responsive
      - Reduce banners/warnings/cookies
      - Reduce scrolling effort
      - Test > Test > Test
      - Dont use powers of evil: Dark Patterns (Tricking your customers to do an action)

Section 13: Build my own personal website
- Still need to strengthen positioning techniques and colour gradient application

Section 14: 
- Javascript > ECMA Script standard
- Interpreted languages: Javascript | Python | Ruby
- Compiled languages: Java | c/c++ | Swift
- Data type:
  - String
  - Numbers
  - Boolean
- Popup:
  ```
  alert("Hello");
  ```
- Type Of:
  ```
  typeof(123); > Number
  ```
- Prompt:
  ```
  prompt("What is my name?");
  ```
- Variables:
  ```
  var myname = "Faiq";
  ```
- Console Log:
  ```
  console.log(var);
  ```
- Naming Conventions:
  - Give variables meaningful names
  - Avoid keywords
  - No leading numbers
  - No spaces
  - Allowed char symbols: $ | _
  - Camel casing: myName | camelCasing | userScoreFinal
- String Concatenation:
  - Combining chars together to create a string > "a" + "b" = ab | "a " + "b" = a b
- String Length and Number of chars:
  ```
  var.length;
  ```
- Slice Function:
  ```
  var.slice(x,y);
  ```
- Format Casing:
  ```
  var.toUpperCase();
  var.toLowerCase();
  ```
- Arithmetic and Modulo Operator
  ```
  Add +
  Subtract -
  Divide /
  Multiply *
  Modulo %
  ```
- Increment and Decrement Expressions:
  ```
  var x = 5;
  x = x + 1; OR x += 1; OR x ++; (-=|*=|/=|%=)

  Note:
  var x = 3;
  var y = x++; - y = 3 NOT 4
  ```
- Functions and Parameters and Arguments:
  ```
  function robotMove(direction){
    alert(direction);
  }
- Round down and up:
  ```
  Math.floor(number);
  Math.ceil(number);
  ```
- Output and Return values:
  ```
  function robotMove (direction){
    location += direction;
    return (location);
  }
  ```

Section 15:
- Random number generator
```
var n = Math.random()
```
- Love calculator example:
```
prompt("Enter your name:");
prompt("Enter your partners name:");
function love_calculator (name1, name2) {
    var loveScore = Math.random();
    loveScore = Math.floor((loveScore * 100)+1);
    return loveScore
}

var y = love_calculator("M","B");
console.log(y);
alert("Your love score is " + y + "%");
```
- Relational statements: (>, <, >=, <=)
- Conditional statements: (===, !==)
  - Note: === - Strict equality; == - Loose equality; && - AND Operator; || - OR Operator; ! - NOT Operator
```
if (y === 100) {
    alert("Your love score is " + y + "% " + "~ WOOWWZERS!");
} else if (y > 70 && y < 100){
    alert("Your love score is " + y + "% " + "~ Amazing!");
} else if (y > 40 && y < 70){
    alert("Your love score is " + y + "% " + "~ MEHHH!");
}else {
    alert("Your love score is " + y + "% " + "~ Ouchh!");
}
```
- Arrays:
  - output.push(): Insert element into array;
  - output.pop(): Remove element form array;
```
var guessName = prompt("What are you");
var guessList = ["A", "B", "C", "D", "E", "F"];
var quantity = guessList.length;
var including = guessList.includes(guessName);
if (including === true) {
    alert("Welcome")
} else {
    alert("Sorry, next time")
}
```
- Control statements:
  - While loop
  ```
  var i = 1;
  while (i < 2) {
    console.og(i);
    i++;
  }
  ```
  - For Loop
  ```
  for (let i = 0; i < 10; i++) {
    console.og(i);
  }
  ```
- Fibonacci Sequencing:
```
function fib(n) {
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        var output = [0,1];
        for (var i = 2; i < n; i++) {
            output.push(output[i-2] + output[i-1]);
        }
    }
    return output;
}
```

Section 16:
- Adding Javascript:
  - In-line:
  ```
  <body onload="alert('Hello');">
  </body>
  ```
  - Internal:
  ```
  <body>
    <h1>Hello</h1>

    <script type="text/javascript">
      alert("Hello");
    </script>
  </body>
  ```
  - External:
  ```
  <body>
    <h1>Hello</h1>
    <script src="./index.js" charset="UTF-8"></script>
  </body>
  ```
- Document Object Model (DOM):
  - HTML code mapped out into a tree diagram
  - Example object: Car
    - Properties: Describes something about an object
      - Setting a property: car.numberOfDoors = 0;
      - Getting a property: car.colour; //red
    - Methods: An action the object can do
      - Calling method: car.drive();
      - Note: Method is something an object can do
  - Example object: Button
    - Properties: innerHTML | style | firstChild
    - Methods: click() | appenchild() | setAttribute()
- Separation of concerns:
  - HTML > Content only
  - CSS > Styling only
  - Javascript > Behaviour/Actions
  ```
  > document;
  > document.firstElementchild;
  > document.firstElementchild.firstElementchild;
  > document.firstElementchild.lastElementchild;
  > document.firstElementchild.lastElementchild.firstElementchild;

  var heading = document.firstElementchild.lastElementchild.firstElementchild;
  heading.innerHTML = "Good Bye";
  heading.style.color = "red;

  document.getElementsByTagName("li")[2].style.color = "purple";
  document.getElementsByTagName("li").length;
  document.getElementsByClassName("btn")[0];
  
  document.getElementById("title").innerHTML = "<em>Good Bye</em>"; - Gives you the exactly what between the selectors
  document.getElementById("title").textContent = "Good Bye"; - Gives you only the text within the element

  document.querySelector("input").click();
  document.querySelector("h1");
  document.querySelector("#title");
  document.querySelector(".btn");
  document.querySelector("li a");
  document.querySelector("li.item");
  document.querySelector("#list .item"); - first element in an array
  document.querySelectorAll("#list .item"); - full array

  document.querySelector("h1").style.fontSize = "10rem";
  document.querySelector("button").classList.add("invisible");
  document.querySelector("button").classList.remove("invisible");
  document.querySelector("button").classList.toggle("invisible");

  document.querySelector("a").getAttribute("href");
  document.querySelector("a").setAttribute("href", "https://www.bing.com");
  ```

  
  
