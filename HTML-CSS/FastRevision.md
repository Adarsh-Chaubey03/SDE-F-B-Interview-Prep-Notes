# HTML + CSS — Quick Revision Notes

## 1. HTML

### What is HTML?

HTML (HyperText Markup Language) is used to **structure content on a web page**.

HTML defines elements such as:

- Headings
- Paragraphs
- Links
- Images
- Forms
- Lists
- Tables

### Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Important HTML Tags

| Tag           | Purpose                       |
| ------------- | ----------------------------- |
| `<html>`      | Root element                  |
| `<head>`      | Metadata and page information |
| `<title>`     | Browser-tab title             |
| `<body>`      | Visible page content          |
| `<h1>`–`<h6>` | Headings                      |
| `<p>`         | Paragraph                     |
| `<a>`         | Hyperlink                     |
| `<img>`       | Image                         |
| `<div>`       | Generic block container       |
| `<span>`      | Generic inline container      |
| `<ul>`        | Unordered list                |
| `<ol>`        | Ordered list                  |
| `<li>`        | List item                     |
| `<form>`      | Form                          |
| `<input>`     | Input field                   |
| `<button>`    | Button                        |

### Attributes

Attributes provide additional information about an HTML element.

```html
<a href="https://example.com">Visit</a>

<img src="image.jpg" alt="Profile image">
```

Common attributes:

```text
id
class
src
href
alt
name
value
type
```

### `id` vs `class`

```html
<div id="header"></div>

<div class="card"></div>
```

- `id` should identify a unique element.
- `class` can be reused on multiple elements.

### Semantic HTML

Semantic elements describe their meaning clearly.

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Example:

```html
<header>Website Header</header>

<nav>Navigation</nav>

<main>
    <section>
        <h1>Products</h1>
    </section>
</main>

<footer>Footer</footer>
```

Semantic HTML improves:

- Accessibility
- SEO
- Code readability
- Maintainability

# 2. CSS

## What is CSS?

CSS (Cascading Style Sheets) is used to **style and visually design HTML elements**.

CSS controls:

- Colors
- Fonts
- Spacing
- Size
- Layout
- Position
- Responsive design
- Animations

### Basic CSS Syntax

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: blue;
    font-size: 30px;
}
```

### Ways to Add CSS

#### 1. Inline CSS

```html
<p style="color: red;">Hello</p>
```

#### 2. Internal CSS

```html
<style>
    p {
        color: red;
    }
</style>
```

#### 3. External CSS

```html
<link rel="stylesheet" href="style.css">
```

External CSS is generally preferred for maintainability.

# 3. CSS Selectors

### Element Selector

```css
p {
    color: red;
}
```

Selects all `<p>` elements.

### Class Selector

```css
.card {
    background: white;
}
```

HTML:

```html
<div class="card">Content</div>
```

### ID Selector

```css
#header {
    height: 60px;
}
```

HTML:

```html
<div id="header"></div>
```

### Multiple Selectors

```css
h1, h2, p {
    font-family: Arial;
}
```

### Descendant Selector

```css
.container p {
    color: blue;
}
```

Selects `<p>` elements inside `.container`.

# 4. CSS Box Model

Every HTML element is represented using the CSS box model:

```text
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  |  +-----------+ |  |  |
|  |  |  |  Content  | |  |  |
|  |  |  +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

Order:

```text
Content → Padding → Border → Margin
```

### Example

```css
.box {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

### `box-sizing`

```css
* {
    box-sizing: border-box;
}
```

With `border-box`, the declared width/height includes padding and border.

# 5. CSS Display

### Block

```css
display: block;
```

Examples:

- `div`
- `p`
- `h1`

Block elements generally take the available width and start on a new line.

### Inline

```css
display: inline;
```

Examples:

- `span`
- `a`

Inline elements generally occupy only the space required by their content.

### Inline-block

```css
display: inline-block;
```

Combines characteristics of inline and block elements.

# 6. Flexbox

Flexbox is mainly used for **one-dimensional layouts**.

```css
.container {
    display: flex;
}
```

Important properties:

```css
flex-direction
justify-content
align-items
flex-wrap
gap
```

Example:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

### Main Axis vs Cross Axis

For:

```css
flex-direction: row;
```

- Main axis → horizontal
- Cross axis → vertical

For:

```css
flex-direction: column;
```

- Main axis → vertical
- Cross axis → horizontal

`justify-content` controls alignment along the **main axis**.

`align-items` controls alignment along the **cross axis**.

# 7. CSS Grid

Grid is useful for **two-dimensional layouts** involving rows and columns.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
```

Example:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

# 8. Position

CSS provides different positioning modes:

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

### Relative

```css
.box {
    position: relative;
    top: 10px;
}
```

The element remains in the normal document flow.

### Absolute

```css
.box {
    position: absolute;
    top: 0;
    right: 0;
}
```

The element is positioned relative to an appropriate positioned ancestor.

### Fixed

```css
position: fixed;
```

The element is positioned relative to the viewport and remains fixed while scrolling.

### Sticky

```css
position: sticky;
top: 0;
```

The element behaves normally until a specified scrolling threshold is reached.

# 9. CSS Units

Common units:

```text
px
%
em
rem
vh
vw
```

### `px`

Fixed CSS pixel unit.

```css
font-size: 16px;
```

### `%`

Relative to the relevant parent/container dimension.

```css
width: 50%;
```

### `rem`

Relative to the root (`html`) font size.

```css
font-size: 2rem;
```

### `em`

Relative to the font size of the relevant element/parent context.

### `vh` and `vw`

```css
height: 100vh;
width: 100vw;
```

- `vh` → viewport height
- `vw` → viewport width

# 10. Responsive Design

Responsive design allows a website to adapt to different screen sizes.

Media queries are commonly used:

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

This applies the styles when the viewport width is `768px` or less.

# 11. CSS Cascade and Specificity

When multiple CSS rules target the same element, the browser determines which rule wins using the cascade, including specificity and source order.

General specificity ranking:

```text
Inline styles
    ↓
ID selector
    ↓
Class / attribute / pseudo-class
    ↓
Element / pseudo-element
```

Example:

```css
p {
    color: blue;
}

.text {
    color: green;
}

#para {
    color: red;
}
```

For the same element, the `#para` rule has higher specificity than `.text` and `p`.

# 12. Interview Quick Revision

### HTML

**What is HTML?**\
HTML is a markup language used to structure web-page content.

**What is semantic HTML?**\
HTML elements that convey the meaning/role of their content, such as `<header>`, `<nav>`, `<main>`, and `<article>`.

**Difference between ****`id`**** and ****`class`****?**\
`id` identifies an element; `class` is reusable across multiple elements.

**What is an attribute?**\
Additional information provided inside an HTML opening tag.

---

### CSS

**What is CSS?**\
CSS is used to style and lay out HTML elements.

**What is the box model?**\
Content + Padding + Border + Margin.

**Flexbox vs Grid?**

```text
Flexbox → primarily one-dimensional
Grid    → two-dimensional
```

**`justify-content`**** vs ****`align-items`**** in a row flex container?**

```text
justify-content → main axis
align-items     → cross axis
```

**What is responsive design?**\
Designing a website so its layout adapts to different screen sizes.

**What is CSS specificity?**\
A mechanism used by the browser to determine which competing CSS rule has higher priority.

# Final 2-Minute Revision

```text
HTML
  ↓
Structure

CSS
  ↓
Presentation + Layout

HTML
  ├── Elements
  ├── Attributes
  ├── Semantic tags
  └── Formswrite the links only


CSS
  ├── Selectors
  ├── Box Model
  ├── Display
  ├── Flexbox
  ├── Grid
  ├── Position
  ├── Responsive Design
  └── Specificity
```

**Core interview points to memorize:**

1. HTML structures the page.
2. CSS styles and lays out the page.
3. Semantic HTML improves meaning, accessibility, and SEO.
4. `id` is for identification; `class` is reusable.
5. Box model = content + padding + border + margin.
6. Flexbox is primarily one-dimensional.
7. Grid is two-dimensional.
8. `justify-content` works on the main axis.
9. `align-items` works on the cross axis.
10. Specificity determines which competing CSS rule gets priority.
