# web-development
This repo is for strengthening my full-stack web development skills.
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

Section 17:
- Built my own dice roll animation with element manipulation using Javascript.

Section 18:
- Anonymous function:
```
document.querySelectorAll("button").addEventListener("click", function {
	alert("Click");
})
```
- Named function:
```
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
	alert("Click");
}
```
- Higher order functions:
```
function add(num1, num2) {
	return num1 + num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function calculate(num1, num2, operator) {
	return operator(num1, num2);
}
```
- Note: Chrome Inspect Debugger
```
debugger; -> Shift+Enter
callbackFunciton(); -> Enter
Enter Debug Mode
```
- Switch case to target individual button clicks
```
function handleClick() {
	var buttonInnerHTML = this.innerHTML;
	switch (buttonInnerHTML) {
		case 'w':
			var tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
		break;
    default: console.log(buttonInnerHTML);
  }
```
- Object properties:
```
var houseKeeper1 = {
	yearsOfExperience: 12,
	name: Jane,
	cleaningRepertoire: ["batroom", "lobby", "bedroom"]
}
```
- Contructor function:
```
function BellBoy (name, age, hasWorkPermit, languages) { - First letter of function name is CAPITALISED
	this.name = name;
	this.age = age;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
```
- Methods are functions in association to an Object
```
var bellBoy1 = {
	name: "Timmy",
	age: 19,
	hasWorkPermit: true,
	languages: ["French", "English"],
	moveSuitcase: function() {
		alert("May I take your suitcase?");
		pickUpSuitcase();
		move();
	}
}

bellBoy1.moveSuitcase(); 
```
- Keyboard triggers:
```
document.addEventListener("keydown", function(event){
	var keyBoard = event.key;
	console.log(keyBoard);
}
```
- Callback functions:
```
document.addEventListener("keydown", respondToKey(event);
> "keydown" - Event type is crucial for detecting specific events
> addEventListener() - High order function: Takes a function as an input
> respondToKey() - Callback function that is the input
```
- Timeout function
```
setTimeout(function() {
	activeButton.classList.remove("pressed");
}, 100);
```

Section 19:
- jQuery Library: Boostrap for HTML vs jQuery for Javascript
  - Manipulate elements in Javascript by using methods fromt he jQuery library
- Downloadable: https://jquery.com/ OR
- CDN (Content Delivery Network) via Google Hosted Libraries: https://developers.google.com/speed/libraries#jquery
```
> document.querySelector("h1");
> jQuery("h1"); OR $("h1");
```
- Placement of jQuery CDN script tag is IMPORTANT!
```
(PREFERRED METHOD)

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <h1>Hello World!</h1>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./index.js" charset="UTF-8"></script>
  </body>
</html>

$("h1").css("color", "black"); - Ability to start coding JS file without having the document ready check

OR

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./index.js" charset="UTF-8"></script>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>

$(document).ready(function() { - Required to have this document ready check to only load JS file to when entire document is ready
	$("h1").css("color", "black");
})
```
- Note: Minify Javascript or CSS to allow users to load the browser faster, saving space in cache
- Getting and Setting values using jQuery
```
$("h1").css("color"); - Getting the value
$("h1").css("color", "black"); - Setting the value
```
- Note:
  - Javascript: Behaviour
  - CSS: Appearance
  - HTML: Content
- Manipulating style using jQuery
```
$("body").addClass("reset-border");
$("h1").addClass("big-title set-font");

.reset-border {
  margin: 0;
  padding: 0;
}

.big-title {
  color: #DBEDF3;
  text-align: center;
  text-shadow: 3px 0 #DA0463;
}

.set-font {
  font-size: 5rem;
  font-family: "Arvo", cursive;
}
```
- Test using jQuery if classes has bee added to the element
```
$("h1").hasClass("set-font");
```
- Manipulating text using jQuery
```
$("h1").text("This is my Website"); - Manipulating only its text
$("button").text("Don't Click!");

$("button").html("<em>Dont Click!</em>"); - Manipulating its innerHTML property as well as text
```
- Manipulating attributes using jQuery
```
<img src="./images/image1.png" alt="image1">
$("img").attr("src", "./images/image2.png");

<a href="https://www.google.com">Search</a>
$("a").attr("href", "https://www.yahoo.com");

$("h1").attr("class"); - Get the class attached to this element
```
- Adding Event Listeners using jQuery
```
$("h1").click(function() {
	$("h1").css("color", "black");
})
--------------------------------
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
	document.querySelectorAll("button")[i].addEventListener("click", function() {
		document.querySelector("h1").style.color = "purple";
	});
}

$("button").click(function() { - A for loop is not required as the .click method binds to all button classes it finds
	$("h1").css("color", "purple");
})
--------------------------------
<input type="text" name="" value="">

$("input").keydown(function(event) {
	console.log(event.key);
})
--------------------------------
$("body"/document).keydown(function(event) { - To add a keydown listener method to the entire page
	console.log(event.key);
--------------------------------
$("h1").on("mouseover", function() { - Using a universal event listener method that takes in specific event listener as an input
	$("h1").html("<s>This is my Website</s>");
})
})
```
- Adding/Removing elements using jQuery
```
$("h1").before("<button>New</button");
$("h1").after("<button>New</button");
$("h1").prepend("<button>New</button");
$("h1").append("<button>New</button");
--------------------------------
$("button").remove();
```
- Animate using jQuery
```
$("button").on("click", function() {
	$("h1").hide();
})

$("button").on("click", function() {
	$("h1").show();
})

$("button").on("click", function() {
	$("h1").toggle();
})

$("h1").on("click", function() {
	$("h1").fadeOut();
})

$("button").on("click", function() {
	$("h1").fadeIn();
})

$("button").on("click", function() {
	$("h1").fadeToggle();
})

$("button").on("click", function() {
	$("h1").slideUp();
})

$("button").on("click", function() {
	$("h1").slideDown();
})

$("button").on("click", function() {
	$("h1").animate({opacity: 0.5}); - Note that only properties with numerical value can be used
})
--------------------------------
$("button").on("click", function() {
	$("h1").slideUp().slideDown().animate({opacity: 0.5}); - Changing the animations together
})
```

Section 20:
- Creating my own Simon game, colour and sound pattern recognition.

Section 21: The Unix Command Line
- Download GitBash for Windows > https://gitforwindows.org/
- Install and open VSCode to setup terminal via View > Command Pallete > Select Default Profile > Bash
- Note: You can also run GitBash from Windows terminal
  ```
  start "" "C:\Program Files\Git\git-bash.exe"
  ```
- We want to more speed and control over our hardware via command line
- Common commands:
  ```
  ls - List contents of current directory
  cd - Change directory to destination
  mkdir - Create a new directory folder
  touch - Create a file within the directory
  start - Open file with default app
  code - Open file with VSCode
  rm - Removes files from directory
  pwd - Print working directory
  rm * - Remove all files from directory
  rm -r - Remove directory
  ```
  Note:
  - Hold Alt key allows you to copy and drag terminal command text
  - Hold Ctrl + A key to go to the beginning of the cmd line
  - Hold Ctrl + E key to go to the end of the cmd line
  - Hold Ctrl + U key to clear the entire cmd line
 
Section 22: Backend Web Development
- Server
  - Operating 24/7 
- Application
  - Logic that handles user interaction and responds to requests from client
  - Status codes are put in place to specify responses
- Database
  - Stores user data
  - Web pages requested from browser to server, server responds with serving the HTML files
  - Web applications are dynamic and not static web pages
- Frontend Tools:
  - HTML/CSS/Javascript
  - React/Angular/Vue (Frameworks)
- Backend Tools:
  - Any programming language Java/php/Ruby/C/Python/Javascript
  - Rails/Spring/ASP.NET/Laravel/Flask&Django/Node (Frameworks)

Section 23: Node.js
- Javascript framework
- Frameworks is a suite of pre-built components and structures top build an application
- Node is actually an Asynchronous event-driven JavaScript runtime designed to build scalable network applications
- A runtime environment built on a V8 chromium engine using C, C++
- Asynchronous and Event-driven code that doesnt have to run in sequence, fast and non-blocking of resources
- Allows us to build an application on a server using JavaScript, large ecosystem to easily add functionality
- Install Node.js > https://nodejs.org/en/download
- Node REPL: Read Eval Print Loop (computer environment where user inputs are read, evaluated and results retruned
  ```
  node
  .help
  .break    Sometimes you get stuck, this gets you out
  .clear    Alias for .break
  .editor   Enter editor mode
  .exit     Exit the REPL
  .help     Print this help message
  .load     Load JS from a file into the REPL session
  .save     Save all evaluated commands in this REPL session to a file
  ```
  - Node is like running python in terminal > node index.js
  - Native node modules: Imagine it as games pre-bundled with your operating system
    - File system: Allows us to access local storage
      ```
      Write File
      const fs = require("fs");

      fs.writeFile("message.txt", "Hello world!",(err) => {
      	if (err) throw err;
      	console.log('The file has been saved!');
      });
      
      Read File
      const fs = require("fs");

      fs.readFile("message.txt", "UTF-8", (err, data) => {
      	if (err) throw err;
      	console.log(data);
      });
      ```
	- Install Node Package Manager (NPM)
      - Community resource library
      ```
      npm init		Initialise package.json
      npm install <package> OR npm i <package>

      Note: console.log(`${variable}`);

      package.json types: commonjs OR module
      commonjs method
      var generateName = require('sillyname');
      var sillyName = generateName();
      console.log(`My silly name will be ${sillyName}.`);

      module method
      import generateName from 'sillyname';
      var sillyName = generateName();
      console.log(`My silly name will be ${sillyName}.`);

      Note: Javascript Objects syntax
      var prompt = {
      	message: "Type in your URL: ",
      	name: "URL",
      };

      QR Image Generation
      import qr from "qr-image";
      
      const url = answers.URL;
      var qr_png = qr.image(url);
      qr_png.pipe(fs.createWriteStream("qr_imgx.png"));
      ```

Section 24: Express.js with Node.js
- Improved readability, less code, ability to add middleware
- Server-side application build using node
- Note: Terminal doesnt like gaps in string use double quotes eg. mkdir "3.1 Express Server"
- Listening to ports on server cmd: netstat -ano | findstr "LISTENING"
- HTTP Requests
  - GET: Request a resource, HTML, text, data
  - POST: Sending a resource, information, form, email, password, signup
  - PUT: Update methnods. Replace a resource completely
  - PATCH: Update methods. Patch up a resource specific
  - DELETE: Delete a resource
  - Note: A request from the browser holds key value pairs about the system its running on
    ```
    app.get("/", (req, res) => {
    	console.log(req.rawHeaders)
    });
    OR

	import { dirname } from "path";
    import { fileURLToPath } from "url";

    const __dirname = dirname(fileURLToPath(import.meta.url));
    
    app.get("/", (req, res) => {
    	res.sendFile(__dirname + "/public/index.html");
    aa});
    ```
  - Install nodemon to allow my localhost browser to automatically refresh the server upon changes to the script
    ```
    npm i -g nodemon (-g tag for Global use)
    ```
  - URL endpoints: /homepage
  - HTTP Status Codes: MDN Web Docs
    - 100-199: Informational responses
    - 200- 299: Successful responses
    - 300-399: Redirectional responses (Diff location)
    - 400-499: Client Error responses
    - 500-599: Server Error reponses
  - Postman App allows you to test the backend request and reponse status code (API Testing)
  - Middleware (body-parser):
    - Pre process the request (body-parser package)
    - Logging and monitoring requests (morgan package)
    - Authenticate all requests
    - Error identification
    - Note:
      - With body-parser middleware, now the reques object has a body while prviously it was undefined
      - Make sure to properly sequence the middleware callbacks
      ```
      app.use(bodyParser.urlencoded({extended: true}));
      app.post("/submit", (req, res) => {
      	console.log(req.body);
      });
      ```
    - Build our own middleware:
      ```
      import express from "express";
      const app = express();
      const port = 3000;

      app.use((req, res, next) => {
      	console.log("Request method: ", req.method);
      	next(); *** VERY IMPORTANT TO PREVENT INFINITE LOOP ***
      });
      ```
    - Note: Middleware body-parser is already part of express
      ```
      app.use(express.urlencoded({extended: true}));
      ```
      
