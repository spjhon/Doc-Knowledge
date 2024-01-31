---
sidebar_position: 1
---

# Overview CSS

Lenguage de estilizado

## **Cascade**

### Specificity

Inline styles have the highest specificity.
IDs (#) have higher specificity than classes (.).
Elements and pseudo-elements have lower specificity.
Adding !important to a rule makes it highest priority.

- The last rule defined takes precedence if specificity is equal.
- Styles defined later in the stylesheet override previous styles.

- Origin of Styles:
User Agent Stylesheets: Default browser styles.
Author Stylesheets: Styles defined in your CSS.
User Stylesheets: Styles applied by users.

- Some properties are inherited by child elements, like font or color.

- < !important > Inline Styles > IDs > Classes/Attributes > Elements.
The more specific selector wins.

- Use initial and do NOT use auto to reset styles.

- Shorthand properties override all the properties that shorthand.

### Pseudo-Clases

:autofill

- Note: The user agent style sheets of many browsers use !important in their :-webkit-autofill style declarations, making them non-overridable. For the best browser compatibility use both :-webkit-autofill and :autofill.
*Extracted from: [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill)*

- CSS Float Layouts are deprecated the current standards are CSS grid layout and CSS flexbox

- Existe valid e invalid para los input desde CSS

- UI or User Interface is the visual representation of a digital
product. Its obvious use cases are apps and websites.

- UX or User Experience de"nes and studies how easy it is to
use the product.

- CX or Customer Experience is o#en confused as being another
name for UX. The truth is that CX is a top-level process that
de"nes not only how your product works, but how your entire
company operates.

### Box Sizing

- Applying box-sizing: border-box lo que hace es que cuando se refiere al height y al width, lo que hace es que coge content, padding y border y deja suelto el margin, por eso se le llama content-box (por que agarra solo el content) y border-box (donde la caja se cuenta desde el border)
- Esto se aplica cuando se le da un height y un width al elemento entonces la forma en que se calcula esto es donde cambia si es content-box o box-sizing

- USE THIS IN ALL SHEETS

```css
:root {
      box-sizing: border-box;
    }

    *,
    ::before,
    ::after {
      box-sizing: inherit;
    }
```

- Never give a fixed heigh to an element, let the flow of the document take charge. Use min-height and max-height ot do it.

- A vertical-align declaration only affects inline and table-cell elements. Its usefull with tables though.

- Collapsing: Margin collapsing only occurs with top and bottom margins. Left and right margins don’t collapse.

- margins of flexbox items don’t collapse

- margins c can’t be applied to table-cell elements.

- Inline Elements: Margins and padding applied to inline elements only affect the left and right sides, not the top and bottom.

### Especificity and cascade

- Check the chapter 1 of the book CSS in Deep the manning publications, including specificity notation like (1,1,0), (IDs,Classes,Tags)

- La mejor estrategia con la especividad es que sea lo mas neutral posible con respecto a las otras.

### **Units**, most advice come from CSS in Depth

- Pixel is a slightly misleading name—a CSS pixel does not strictly equate to a monitor’s pixel.

- Values declared using relative units are evaluated by the browser to an absolute value, called the computed value.

- Using ems can be convenient when setting properties like padding, height, width, or border-radius because these will scale evenly with the element if it inherits different font sizes, or if the user changes the font settings.

- browser’s default font size is 16 px

- By pressing Ctrl-plus (+) or Ctrl-minus (–), this setting does not resize fonts defined using pixels or other absolute units. (USE relative units or percentages.)

- My default is to use rems for font sizes, pixels for borders, and ems for most other measures, especially paddings, margins, and border radius (though I favor the use of percentages for container widths when necessary). Keep a calculator close.

Example: Let’s say you want your default font size to be 14 px. Instead of setting a 10 px default then overriding it throughout the page, set that value at the root. The desired value divided by the inherited value—in this case, the browser’s default—is 14/16, which equals 0.875.

- You can use some media queries to change the base font size, depending on the screen size.

- If you are disciplined enough to style your entire page in relative units like this, the entire page will scale up and down based on the viewport size.

CSS (Cascading Style Sheets) supports various units for specifying lengths, sizes, and other measurements. Here is a list of CSS units:

#### Absolute Length Units

cm: Centimeters
mm: Millimeters
in: Inches
px: Pixels
pt: Points (1 point is approximately 1/72 of an inch)
pc: Picas (1 pica is 12 points)

#### Relative Length Units

em: Relative to the font-size of the element.
ex: Relative to the x-height of the font of the element.
ch: Relative to the width of the "0" (zero) glyph in the font.
rem: Relative to the font-size of the root element.
vw: Relative to 1% of the width of the viewport.
vh: Relative to 1% of the height of the viewport.
vmin: Relative to 1% of the minimum viewport dimension.
vmax: Relative to 1% of the maximum viewport dimension.

#### Percentage Units

%: Percentage relative to the parent element.

#### Viewport Percentage Units (for length)

vi: 1% of the viewport's initial containing block width.
vb: 1% of the viewport's initial containing block height.
vw: 1% of the viewport's width.
vh: 1% of the viewport's height.
vmin: 1% of the viewport's smaller dimension.
vmax: 1% of the viewport's larger dimension.

#### Angle Units

deg: Degrees
rad: Radians
grad: Gradients
turn: Turns

#### Time Units

s: Seconds
ms: Milliseconds

#### Frequency Units

Hz: Hertz (cycles per second)
kHz: Kilohertz (thousands of cycles per second)

#### Resolution Units

dpi: Dots per inch
dpcm: Dots per centimeter
dppx: Dots per pixel unit for resolution media queries

These units provide flexibility when styling web pages, allowing developers to create designs that adapt to different screen sizes and devices.

### viewport

The framed area in the browser window where the web page is visible. This excludes the browser’s address bar, toolbars, and status bar, if present.

- W3C means (World Wide Web Consortium)

- The var() function accepts a second parameter, which specifies a fallback value. If the variable specified in the first parameter is not defined, then the second value is used instead.

### Floats

- A float pulls an element (often an image) to one side of its container, allowing the document flow to wrap around it

- pseudo-element

Special selectors that target certain parts of the document. These begin with a double-colon (::) syntax, though most browsers also support a single-colon syntax for backward compatibility. The most common pseudo-elements are ::before and ::after, which are used to insert content at the beginning or end of an element.
