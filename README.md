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
  - border: 10px~thickness solid~style black~color; (border property projects outwards and your element remains unchanged)
  - border-top: 0px;
  - border-width: 0px-top 10px-right 20px-bottom 30px-left; 
- Content division element:
  ```
  <div></div>
  ```
