// Menu data structure (see Task 3.0)
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Task 1.0

// Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");

// Task 1.1

// Set the background color of mainEl using the --main-bg CSS custom property.

mainEl.style.backgroundColor = "var(--main-bg)";

// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

// Task 1.2

// Set the content of mainEl to <h1>SEI Rocks!</h1>.


mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3

// Add a class of flex-ctr to mainEl.

mainEl.classList.add('flex-ctr')

//Do Progress Check! 

// Task 2.0

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.querySelector('#top-menu');

// Task 2.1

// Set the height topMenuEl element to be 100%.

topMenuEl.style.height = '100%';

// Task 2.2

// Set the background color of topMenuEl using the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3

// Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');

// Do Progress Check! 

// Task 3.0

// Copy the following data structure to the top of script.js:

// // Menu data structure
// const menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];
// Task 3.1

menuLinks.forEach(function(link) {
    // Iterate over the entire menuLinks array and for each "link" object:
    const a = document.createElement('a');
    // Create an <a> element.
    a.href = link.href;
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.textContent = link.text;
    // Set the new element's content to the value of the text property of the "link" object. 
    topMenuEl.appendChild(a);
    // Append the new element to the topMenuEl element.
});


makeMenu();


// Final Progess Check Congrats!
// Verify with solution, resolve errors, or try advance 

