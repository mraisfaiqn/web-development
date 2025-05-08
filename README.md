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
    - Align Content property: Position of the item on its cross-axis, applied to the container with flex-wrap set to wrap and given a viewport height (height: 70vh;)
  - Flex sizing:
    -
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
