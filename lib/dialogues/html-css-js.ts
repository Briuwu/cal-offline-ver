export const HTMLCSSJS_DIALOGUES = [
  {
    name: "Sunfire Guardian",
    text: "Traveler, your brother is held captive by the monsters of this isle. To rescue him, you must master the art of web development - HTML, CSS, and JavaScript. These are the tools to forge your path to victory.",
  },
  {
    name: "player",
    text: "I'm ready to learn, guardian. Show me the way.",
  },
  {
    name: "Sunfire Guardian",
    text: "Good. Let us begin.",
  },
  {
    name: "Sunfire Guardian",
    text: "The Document Object Model (DOM) is like a blueprint of a webpage, allowing JavaScript to interact with its structure and content.",
  },
  {
    name: "Sunfire Guardian",
    text: "Imagine the webpage as a living organism, with each element representing a part of its body. The DOM is like a map of this organism, allowing you to navigate and interact with its different parts.",
  },
  {
    name: "Sunfire Guardian",
    text: "There are different ways to find specific elements on the webpage.",
  },
  {
    name: "Sunfire Guardian",
    text: "document.getElementById('elementId'): This is like finding a specific part of the body by its unique name.",
    image: "html_css_js_stage5/DOMExamples.png",
  },
  {
    name: "Sunfire Guardian",
    text: "document.getElementsByTagName('tagName'): This is like finding all parts of the same type (e.g., p, a, div and other tags).",
    image: "html_css_js_stage5/DOMExamples.png",
  },
  {
    name: "Sunfire Guardian",
    text: "document.querySelector('selector'): This is like finding an element based on its appearance or location.",
    image: "html_css_js_stage5/DOMExamples.png",
  },
  {
    name: "Sunfire Guardian",
    text: "document.querySelectorAll('selector'): This is like finding multiple elements based on a specific description.",
    image: "html_css_js_stage5/DOMExamples.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code creates a basic HTML structure and corresponding JavaScript variables to interact with those elements.",
    image: "html_css_js_stage5/DOM.png",
  },
  {
    name: "Sunfire Guardian",
    text: "The HTML portion defines a webpage with a heading, a paragraph, a button within a container. The JavaScript part then selects these elements and assigns them to variables for later manipulation.",
  },
  {
    name: "Sunfire Guardian",
    text: "Once you've found an element, you can change its appearance or content.",
  },
  {
    name: "Sunfire Guardian",
    text: "element.textContent: This changes the text content of an element.",
    image: "html_css_js_stage5/modifyElements.png",
  },
  {
    name: "Sunfire Guardian",
    text: "element.innerHTML: This changes the entire HTML content within an element.",
    image: "html_css_js_stage5/modifyElements.png",
  },
  {
    name: "Sunfire Guardian",
    text: "element.style: This allows you to change the style of an element (like color, size, etc.).",
    image: "html_css_js_stage5/modifyElements.png",
  },
  {
    name: "Sunfire Guardian",
    text: "element.classList: This helps you manage the classes of an element.",
    image: "html_css_js_stage5/modifyElements.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code modifies the previously selected HTML elements using the assigned JavaScript variables.",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "heading.textContent = 'Your Adventure Begins!';: This line changes the text content of the element referenced by the heading variable (which targets the element with the ID 'mainHeading') to 'Your Adventure Begins!'.",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "paragraphs[0].innerHTML = '<p>This paragraph has been modified!</p>'; This line modifies the inner HTML content of the first element retrieved using paragraphs[0] (which selects all paragraphs using getElementsByTagName).",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "It replaces the original content with a new paragraph element containing the text 'This paragraph has been modified!'",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "container.style.backgroundColor = 'yellow';: This line sets the background color of the element referenced by the container variable (which targets the element with the ID 'container') to yellow.",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "It modifies the element's style directly.",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "changeButton.classList.add('important');: This line manipulates the class list of the button referenced by the changeButton variable (which targets the element with the ID 'changeButton').",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "It adds a new class named 'important' to the button's existing classes (if any). This likely modifies the button's appearance based on a CSS definition for the 'important' class.",
    image: "html_css_js_stage5/modifyElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Creating Elements: You can create new elements and add them to the webpage.",
  },
  {
    name: "Sunfire Guardian",
    text: "document.createElement('elementName'): This creates a new element.",
    image: "html_css_js_stage5/createElements.png",
  },
  {
    name: "Sunfire Guardian",
    text: "element.appendChild(childElement): This adds a new element as a child of another element.",
    image: "html_css_js_stage5/createElements.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code dynamically creates a new paragraph element and appends it to an existing container.",
    image: "html_css_js_stage5/createElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "const newParagraph = document.createElement('p');: This line creates a new paragraph element and stores it in the newParagraph variable.",
    image: "html_css_js_stage5/createElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "newParagraph.textContent = 'This is a new paragraph!';: This line sets the text content of the newly created paragraph to 'This is a new paragraph!'.",
    image: "html_css_js_stage5/createElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "container.appendChild(newParagraph);: This line adds the newly created paragraph element as a child of the element referenced by the container variable (which is the element with the ID 'container').",
    image: "html_css_js_stage5/createElements2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Forms allow user input, and event listeners make your webpage interactive.",
  },
  {
    name: "Sunfire Guardian",
    text: "<form>: Defines a form for user input.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<input>: Creates different types of input fields (text, password, email, checkbox, radio, etc.).",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<textarea>: Creates a multi-line text input area.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<select>: Creates a dropdown list.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<label>: Provides a user-friendly description for form elements.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code creates a basic HTML form with a single text input field and a submit button.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<form id='myForm'>: This tag defines a form element with the ID 'myForm'. Forms are used to collect user input.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<label for='name'>Name:</label>: This creates a label for the input field. The for attribute links the label to the input field with the ID 'name'.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<input type='text' id='name' name='name'>: This creates a text input field for the user to enter their name. The id and name attributes are both set to 'name' for consistency.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "<button type='submit'>Submit</button>: This creates a submit button that, when clicked, will send the form data.",
    image: "html_css_js_stage5/forms.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Internal JavaScript: You can embed JavaScript directly within an HTML file using the ‘<script>’ tag.",
  },
  {
    name: "Sunfire Guardian",
    text: "This code creates a simple HTML page with interactive functionality.",
    image: "html_css_js_stage5/internalJS.png",
  },
  {
    name: "Sunfire Guardian",
    text: "HTML Structure: Defines a basic HTML structure with a head and body section.Includes a paragraph with the id 'demo' and a button with an onclick event handler.",
    image: "html_css_js_stage5/internalJS.png",
  },
  {
    name: "Sunfire Guardian",
    text: "JavaScript Functionality: Creates a JavaScript function named changeText(). When the button is clicked, the onclick attribute calls the changeText() function. Inside the changeText() function, the text content of the paragraph with the id 'demo' is changed to 'Text changed!'.",
    image: "html_css_js_stage5/internalJS.png",
  },
  {
    name: "Sunfire Guardian",
    text: "addEventListener(event, function): Attaches an event listener to an element.",
  },
  {
    name: "Sunfire Guardian",
    text: "This code demonstrates how to handle form submission using JavaScript",
    image: "html_css_js_stage5/eventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: `const form = document.getElementById('myForm');: This line selects the form element with the ID "myForm" and stores it in the form variable.`,
    image: "html_css_js_stage5/eventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "form.addEventListener('submit', function(event) { ... });: This line adds an event listener to the form element. The event listener is triggered when the form is submitted (e.g., when the user clicks the submit button). The function passed as an argument to addEventListener will be executed when the event occurs.",
    image: "html_css_js_stage5/eventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "event.preventDefault();: This line prevents the default behavior of the form submission, which would normally send the form data to the server. By preventing the default behavior, we can handle the form data in JavaScript before submitting it or performing other actions.",
    image: "html_css_js_stage5/eventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "// Handle form data here: This comment indicates where you would typically write the code to process the form data. This might involve extracting values from input fields, validating the data, or updating the page content based on the form data.",
    image: "html_css_js_stage5/eventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code creates a simple HTML page with a button that displays an alert message when clicked.",
    image: "html_css_js_stage5/clickEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Selects the button element using document.getElementById('myButton') and stores it in the button variable then adds an event listener to the button using addEventListener('click', function() { ... }).",
    image: "html_css_js_stage5/clickEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: `Defines an anonymous function that will be executed when the button is clicked and triggers the function when the button is clicked (click event) an inside the function, an alert box is displayed with the message "Button clicked!".`,
    image: "html_css_js_stage5/clickEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code demonstrates how to change the color of a paragraph element when the user hovers over it with the mouse",
    image: "html_css_js_stage5/mouseEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: `Selects the paragraph element with the ID "myParagraph" using document.getElementById('myParagraph') and stores it in the paragraph variable and adds an event listener to the paragraph using addEventListener('mouseover', function() { ... }).`,
    image: "html_css_js_stage5/mouseEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "The event listener triggers the anonymous function when the mouse hovers over the paragraph (mouseover event) and inside the function, the style.color property of the paragraph element is set to 'red', changing its text color.",
    image: "html_css_js_stage5/mouseEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code demonstrates how to change the background color of a div element back to white when the mouse cursor leaves the element (mouseout event).",
    image: "html_css_js_stage5/mouseEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: `Selects the div element with the ID "myDiv" using document.getElementById('myDiv') and stores it in the div variable and adds an event listener to the div using addEventListener('mouseout', function() { ... }).`,
    image: "html_css_js_stage5/mouseEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "The event listener triggers the anonymous function when the mouse cursor leaves the element (mouseout event) and inside the function, the style.backgroundColor property of the div element is set to 'white', resetting its background color.",
    image: "html_css_js_stage5/mouseEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code demonstrates how to detect when a user presses a key while an input field is focused.",
    image: "html_css_js_stage5/keyEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Selects the input element using document.getElementById('myInput') and stores it in the input variable and adds an event listener to the input using addEventListener('keydown', function(event) { ... }).",
    image: "html_css_js_stage5/keyEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: `The event listener triggers the anonymous function when a key is pressed while the input field is focused (keydown event) and inside the function, it checks if the pressed key is the "Enter" key using event.key === 'Enter'. If the pressed key is "Enter", an alert box is displayed with the message "You pressed Enter!".`,
    image: "html_css_js_stage5/keyEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "event.key: The ‘event.key’ property provides information about the key that was pressed during a keyboard event.",
  },
  {
    name: "Sunfire Guardian",
    text: "This code listens for any key pressed on the entire document and performs specific actions based on the key.",
    image: "html_css_js_stage5/keyEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Event Listener: document.addEventListener('keydown', function(event) { ... }) adds an event listener to the entire document. This means that whenever a key is pressed anywhere on the page, the provided function will be executed.",
    image: "html_css_js_stage5/keyEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: `Key Detection: if (event.key === 'Enter') { ... } checks if the pressed key is the "Enter" key. The event.key property provides information about the key that was pressed.`,
    image: "html_css_js_stage5/keyEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: `Action for Enter Key: If the pressed key is "Enter", an alert box is displayed with the message "You pressed Enter!".`,
    image: "html_css_js_stage5/keyEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Logging Key Pressed: console.log('Pressed key:', event.key); logs the pressed key to the browser's console for debugging or informational purposes.",
    image: "html_css_js_stage5/keyEventListeners2.png",
  },
  {
    name: "Sunfire Guardian",
    text: "There are a wide range of keyboard keys that can be detected using the 'event.key' property, including:",
  },
  {
    name: "Sunfire Guardian",
    text: "Enter: Enter key, Space: Spacebar Backspace: Backspace key Tab: Tab key ArrowLeft, ArrowRight, ArrowUp, ArrowDown: Arrow keys Control, Alt, Shift: Control, Alt, and Shift keys Escape: Escape key Delete: Delete key",
  },
  {
    name: "Sunfire Guardian",
    text: "This code displays the pressed key in a paragraph element when a key is released.",
    image: "html_css_js_stage5/keyEventListeners3.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Selects the input element and the output paragraph using their IDs and stores them in input and output variables respectively and it adds an event listener to the input element using addEventListener('keyup', function(event) { ... }).",
    image: "html_css_js_stage5/keyEventListeners3.png",
  },
  {
    name: "Sunfire Guardian",
    text: "The event listener triggers the anonymous function when a key is released (keyup event)and Inside the function, the output.textContent property is set to display the pressed key using event.key",
    image: "html_css_js_stage5/keyEventListeners3.png",
  },
  {
    name: "Sunfire Guardian",
    text: "This code demonstrates how to handle form submission using JavaScript.",
    image: "html_css_js_stage5/submitEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Selects the form element using document.getElementById('myForm') and stores it in the form variable and adds an event listener to the form using addEventListener('submit', function(event) { ... }). The event listener triggers the anonymous function when the form is submitted",
    image: "html_css_js_stage5/submitEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Inside the function: event.preventDefault() prevents the default form submission behaviorand gets the value of the name input field then handles form data (in this case, just logs the name to the console, but you would typically send data to a server).",
    image: "html_css_js_stage5/submitEventListeners.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Inline Event Handlers: You can also attach event handlers directly to HTML elements using attributes like onclick, onsubmit, onmouseover, etc.",
    image: "html_css_js_stage5/inlineEventHandlers.png",
  },
  {
    name: "Sunfire Guardian",
    text: "Are you ready to save your brother using the knowledge you've learned?",
  },
  {
    name: "player",
    text: "Yes, I’m ready!",
  },
  {
    name: "Sunfire Guardian",
    text: "Be careful Traveler those monsters are really strong and dangerous...",
  },
];
