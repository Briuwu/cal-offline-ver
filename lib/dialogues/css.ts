export const CSS_DIALOGUES = [
  {
    name: "Wanderer",
    text: "Welcome, weary traveler. I am a wanderer of these sands, a keeper of ancient knowledge. Your quest for your brother will be arduous, but I can offer guidance.",
  },
  {
    name: "player",
    text: "I seek my brother, lost in this desolate land. Any information would be invaluable.",
  },
  {
    name: "Wanderer",
    text: "To find your brother, you must first learn to navigate the digital realm. For in this world of shadows, knowledge is power. You must master the art of CSS, the language that shapes the web.",
  },
  {
    name: "player",
    text: "CSS? How will that help me find my brother?",
  },
  {
    name: "Wanderer",
    text: "The clues you seek are woven into the fabric of the digital world. To decipher them, you must understand how to style and position elements. CSS is the key to unlocking these secrets.",
  },
  {
    name: "Wanderer",
    text: "Let's begin your training. Imagine the digital world as a vast desert landscape. The elements on a webpage are like the scattered settlements within it. CSS allows you to control their appearance, just as builders use tools to shape their structures.",
  },
  {
    name: "Wanderer",
    text: "We can change the color, font size, and other visual aspects of elements using CSS.This code transforms all paragraph elements (<p>) on the page. It sets their text color to blue and increases the font size to 24 pixels.",
    image: "css_stage2/cssBasicStyling.png",
  },
  {
    name: "Wanderer",
    text: " Now, let's explore how to target specific elements. Imagine each element has a unique identifier, like a landmark in the desert. CSS lets you use these identifiers to style them individually.",
  },
  {
    name: "Wanderer",
    text: "There are three main ways to target elements with CSS:",
    image: "css_stage2/cssSelectors.png",
  },
  {
    name: "Wanderer",
    text: "Type selectors: Select elements based on their HTML tag name.",
    image: "css_stage2/cssTypeSelector.png",
  },
  {
    name: "Wanderer",
    text: "This code makes all paragraph elements red.",
    image: "css_stage2/cssTypeSelector.png",
  },
  {
    name: "Wanderer",
    text: "Class selectors: Select elements with a specific class attribute. Imagine marking buildings with a class to denote their function.",
    image: "css_stage2/cssClassSelector.png",
  },
  {
    name: "Wanderer",
    text: "This code styles any element with the class 'error' to have red text.",
    image: "css_stage2/cssClassSelector.png",
  },
  {
    name: "Wanderer",
    text: "ID selectors: Select a single element with a unique ID, like the grand palace in the desert capital.",
    image: "css_stage2/cssIDSelector.png",
  },
  {
    name: "Wanderer",
    text: "This code increases the font size of the element with the ID 'heading.'",
    image: "cssIDSelector.png",
  },
  {
    name: "Wanderer",
    text: "Now that you can target elements, let's control their position on the page. Imagine arranging buildings within a settlement. CSS offers tools for precise positioning.",
  },
  {
    name: "Wanderer",
    text: "Every element in CSS can be considered a box. This box model consists of content, padding, border, and margin",
  },
  {
    name: "Wanderer",
    text: "Content: The actual content of the element.",
  },
  {
    name: "Wanderer",
    text: "Padding: Clear space within the element, around the content.",
  },
  {
    name: "Wanderer",
    text: "Border: A line around the element",
  },
  {
    name: "Wanderer",
    text: "This code adds 20 pixels of padding, a 2 pixel solid black border, and a 10-pixel margin to all paragraphs.",
    image: "css_stage2/cssBoxModel.png",
  },
  {
    name: "Wanderer",
    text: "You can use CSS to position elements absolutely or relatively. Absolute positioning removes elements from the normal document flow, allowing them to be placed anywhere on the page.",
  },
  {
    name: "Wanderer",
    text: "This code positions an element with the class 'element' absolutely, placing it 20 pixels from the top and 30 pixels from the left of its container",
    image: "css_stage2/cssAbsolutePosition.png",
  },
  {
    name: "Wanderer",
    text: "To truly master the digital landscape, you must understand advanced layout techniques. Imagine crafting intricate city plans. CSS offers powerful tools for this.",
  },
  {
    name: "Wanderer",
    text: "Flexbox: Creates flexible layouts where elements can resize and rearrange based on available space",
  },
  {
    name: "Wanderer",
    text: "This code turns a container into a flex container, allowing its child elements to be arranged horizontally or vertically.",
    image: "css_stage2/cssFlexbox.png",
  },
  {
    name: "Wanderer",
    text: "Grid: Creates complex, grid-based layouts, similar to a city grid with rows and columns",
  },
  {
    name: "Wanderer",
    text: "This code creates a grid container with two columns (one twice as wide as the other) and three rows, each 100 pixels high.",
    image: "css_stage2/cssGrid.png",
  },
  {
    name: "Wanderer",
    text: "Grid Layout Explained:",
    image: "css_stage2/cssGrid.png",
  },
  {
    name: "Wanderer",
    text: "Imagine a grid as a matrix with rows and columns. The grid-template-columns property defines the structure of columns, and grid-template-rows defines the rows. You can use units like px, em, fr (fractional units), or percentages.",
    image: "css_stage2/cssGrid.png",
  },
  {
    name: "Wanderer",
    text: "To place items within the grid, you can use properties like grid-column and grid-row. ",
  },
  {
    name: "Wanderer",
    text: "This code positions the element with the class 'item' in the second column and spans across the first and second rows of the grid.",
    image: "css_stage2/cssGrid2.png",
  },
  {
    name: "Wanderer",
    text: "grid-column and grid-row: properties determine the starting and ending positions of an item in a grid.",
    image: "css_stage2/cssGrid2.png",
  },
  {
    name: "Wanderer",
    text: "grid-column: 2 / 3: This part specifies that the element should start at the beginning of the second column and end at the beginning of the third column. So, it occupies the entire second column.",
    image: "css_stage2/cssGrid2.png",
  },
  {
    name: "Wanderer",
    text: "grid-row: 1 / span 2: This part indicates that the element should start at the beginning of the first row and span across two rows. Therefore, it occupies the first and second rows.",
    image: "css_stage2/cssGrid2.png",
  },
  {
    name: "Wanderer",
    text: "You can also use grid areas to name specific regions within the grid and place items within those areas.",
    image: "css_stage2/cssGrid2.png",
  },
  {
    name: "Wanderer",
    text: "To enhance the visual appeal of your digital landscapes, you can use CSS to style the background of elements.",
  },
  {
    name: "Wanderer",
    text: "This code sets a light gray background color, adds a desert image that doesn't repeat, covers the entire viewport, and prevents the image from scrolling with the page.",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "Explanation of background properties:",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "background-color: Sets the background color of an element.",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "background-image: Adds an image as background.",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "background-repeat: Controls how the background image is repeated.",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "background-size: Sets the size of the background image.",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "background-attachment: Determines whether the background image scrolls with the page or stays fixed.",
    image: "css_stage2/cssBackground.png",
  },
  {
    name: "Wanderer",
    text: "CSS offers properties to align elements within their containers:",
  },
  {
    name: "Wanderer",
    text: "Text alignment:",
    image: "css_stage2/cssAlignment.png",
  },
  {
    name: "Wanderer",
    text: "text-align: property aligns text within an element (left, right, center, justify).",
    image: "css_stage2/cssAlignment.png",
  },
  {
    name: "Wanderer",
    text: "Element alignment:",
    image: "css_stage2/cssAlignmentExamples.png",
  },
  {
    name: "Wanderer",
    text: "align-items: aligns items along the cross-axis/ vertically in a flex container.",
    image: "css_stage2/cssAlignmentExamples.png",
  },
  {
    name: "Wanderer",
    text: "justify-content: aligns items along the main axis/horizontally in a flex container.",
    image: "css_stage2/cssAlignmentExamples.png",
  },
  {
    name: "Wanderer",
    text: "align-self: aligns an individual item within its flex container.",
    image: "css_stage2/cssAlignmentExamples.png",
  },
  {
    name: "Wanderer",
    text: "justify-self: aligns an individual item within its grid container.",
    image: "css_stage2/cssAlignmentExamples.png",
  },
  {
    name: "Wanderer",
    text: "This code creates a flex container where items are spaced evenly and centered vertically",
    image: "css_stage2/cssElementAlignment.png",
  },
  {
    name: "Wanderer",
    text: "These allow you to style elements based on their state or condition:",
  },
  {
    name: "Wanderer",
    text: ":hover: Styles an element when the mouse hovers over it.",
    image: "css_stage2/cssPseudoClassesHover.png",
  },
  {
    name: "Wanderer",
    text: "This code hovers if the mouse is over the element",
    image: "css_stage2/cssPseudoClassesHover.png",
  },
  {
    name: "Wanderer",
    text: ":active: Styles an element when it's being activated (e.g., clicked)",
    image: "css_stage2/cssPseudoClassesActive.png",
  },
  {
    name: "Wanderer",
    text: "This code actives if the button is clicked",
    image: "css_stage2/cssPseudoClassesActive.png",
  },
  {
    name: "Wanderer",
    text: ":focus: Styles an element when it has focus (e.g., when a form element is selected).",
    image: "css_stage2/cssPseudoClassesFocus.png",
  },
  {
    name: "Wanderer",
    text: "This code focuses if the input is selected",
    image: "css_stage2/cssPseudoClassesFocus.png",
  },
  {
    name: "Wanderer",
    text: "Wanderer: With these tools, you can build intricate digital structures. Remember, practice is key to mastering these skills.",
  },
  {
    name: "Wanderer",
    text: "There's much more to discover, young traveler. Are you ready to continue your journey?",
  },
];
