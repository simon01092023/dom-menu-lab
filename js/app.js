// Menu data structure (see Task 3.0 & 5.0)
const menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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

//const topMenuEl = document.querySelector('#top-menu');

const topMenuEl = document.getElementById('top-menu');

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
// See top of app.js 
// // Menu data structure
// const menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];
// Task 3.1

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function (link) {
    // Create an <a> element.
    const a = document.createElement('a');
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.href = link.href;
    // Set the new element's content to the value of the text property of the "link" object. 
    a.textContent = link.text;
    // Append the new element to the topMenuEl element. 
    topMenuEl.appendChild(a);
});

// Final Progess Check for Part 1!
// Verify with solution, resolve errors, or try advance 

// Task 4.0

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

//const subMenuEl = document.querySelector('#sub-menu');

const subMenuEl = document.getElementById('sub-menu');

// Task 4.1

// Set the height subMenuEl element to be 100%.

subMenuEl.style.height = '100%';

// Task 4.2

// Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3

// Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add('flex-around');

// Do Progress Check!

// Task 4.4

// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = 'absolute';

// Task 4.5

// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = '0';

// Task 5.0

// Replace the menuLinks array in script.js with this version that adds sub-menu data:

// const menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#' , subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text: 'sign out', href: '/account/signout'},
//   ]},
// ];
// Task 5.1

// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

//const topMenuLinks = topMenuEl.querySelectorAll('a');

const topMenuLinks = document.querySelectorAll('#top-menu a');

// Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false;

// Task 5.2

// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// topMenuEl.addEventListener('click', function (e) {
//     e.preventDefault();
// The second line of code function should immediately return if the element clicked was not an <a> element.
//     if (e.target.tagName !== 'A') Strict on letter casing has to be UpperCase A
//         return;
// console.log the content of the <a> to verify the handler is working.
//     console.log(e.target.textContent);
// });

// Progress Check only clicking ABOUT, CATALOG, etc. logs out the same when a link is clicked. Clicking anywhere else should do nothing.

// Task 5.3

// This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.

// Next in the event listener, if the clicked <a> link has a class of active:

// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return; from the event listener function.
topMenuEl.addEventListener('click', function (e) {
    e.preventDefault();
    const link = e.target;
    if (link.tagName !== 'A')
        return;
    console.log(link.textContent);
    //Task 5.3
    if (link.classList.contains('active')) {
        link.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
    // Task 5.4 Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.
    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    // Task 5.5 add a class name of active to the <a> element that was clicked.
    link.classList.add('active');
    console.log(link.textContent);
    // Task 5.6 add a event listener that sets showingSubMenu to true if the clicked, otherwise, set it to false.
    const showSub = menuLinks.find(function (linkObj) {
        return linkObj.text === link.textContent;
    });
    showingSubMenu = 'subLinks' in showSub;
    //Task 6.4
    // if (showSub && showSub.subLinks) {
    //     showingSubMenu = true;
    // } else {
    //     showingSubMenu = false;
    // }

    if (showingSubMenu) {
        // Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
        buildSubMenu(showSub.subLinks);
        // Set the CSS top property of subMenuEl to 100%.
        subMenuEl.style.top = '100%';
    } else {
        // Set the CSS top property of subMenuEl to 0.
        subMenuEl.style.top = '0';
        // Task 5.7 A link has been clicked, set mainEl.innerHTML to link name.
        mainEl.innerHTML = `<h1>about</h1>`;
    }

});

//Do Progress Check!
// Task 5.8

// Code the buildSubMenu function so that it:

// Clears the contents of subMenuEl.
// Iterates over the subLinks array passed as an argument; and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the subMenuEl element.

function buildSubMenu(subLinks) {
    // Clear the contents of subMenuEl.
    subMenuEl.innerHTML = '';

    // Iterate over the subLinks array passed as an argument.
    subLinks.forEach(function (link) {
        // Create a new <a> element.
        const a = document.createElement('a');

        // Add an href attribute with its value set to the href property of the "link" object.
        a.href = link.href;

        // Set the new element's content to the value of the text property of the "link" object.
        a.textContent = link.text;

        // Append the new element to the subMenuEl element.
        subMenuEl.appendChild(a);
    });
}

// Do a Progress Check!

// Take the menu for a test drive!

// Task 6.0

subMenuEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName !== 'A')
        return;
    console.log(e.target.textContent);
    // Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    // Task 6.2
    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    // Task 6.3
    mainEl.innerHTML = `<h1>${e.textContent}</h1>`;
});


// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// console.log the content of the <a> to verify the handler is working.

// Task 6.1

// Next, subMenuEl's event listener should:

// Set showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// Task 6.2

// Next, subMenuEl's event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.

// Task 6.3

// Next, subMenuEl's event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.

// Last check clicking any link other than About is showing undefined not sure how to fix it at the moment.