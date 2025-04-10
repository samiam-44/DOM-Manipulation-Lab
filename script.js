// Menu data structure
var menuLinks = [
  {text: 'About', href: '/about'},
  {text: 'Catalog', href: '#', subLinks: [
    {text: 'All', href: '/catalog/all'},
    {text: 'Top selling', href: '/catalog/top'},
    {text: 'Search', href: '/catalog/search'},
  ]},
  {text: 'Orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'Account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
  
// PART 1: GETTING STARTED----------------
// 1. Select and cache the <main> element in a variable named mainEl.
// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// 4. Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.

//Select main element
let mainE1 = document.querySelector('main');
// set BckGrnd color to mainE1 using the --main-bg css property
mainE1.style.backgroundColor = 'var(--main-bg)';
// Set content of mainE1 to the H1
mainE1.innerHTML = '<h1>DOM Manipulation</h1>';
// Add class flex to mainE1
mainE1.classList.add('flex-ctr');

//PART 2: CREATING A MENU BAR------------------------
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// 2. Set the height of the topMenuEl element to be 100%.
// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// 4. Add a class of flex-around to topMenuEl.
 
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
let topMenuEl = document.querySelector('#top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');


// PART 3: ADDING MENU BUTTONS  -------------------------------------------
// 1. Iterate over the entire menuLinks array and for each "link" object:
// 2. Create an <a> element.
// 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
// 4. Set the new element's content to the value of the text property of the "link" object.
// 5. Append the new element to the topMenuEl element.


  // Iterate over the menuLinks array
  menuLinks.forEach((link) => {
    console.log(link)
    // Create a new <a> element
    let newAnchor = document.createElement('a');
    
    // Set the href attribute to the link's href property
    newAnchor.setAttribute('href', link.href);
    
    // Set the content of the <a> element to the link's text property
    newAnchor.textContent = link.text;
    
    // Append the <a> element to the topMenuEl element
    topMenuEl.appendChild(newAnchor);
  });
  
  //DOM MANPULATION PART 2------------------------------

  // ----------CREATING THE SUB MENU


  // Step 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  let subMenuEl = document.getElementById('sub-menu');

  //Step 2. Set the height subMenuEl element to be "100%".
  subMenuEl.style.height = "100%";

  //Step 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Step 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

//Hide subMenu
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

//Set the CSS top property of subMenuEl to '0'
subMenuEl.style.top = '0'

//-------------------------ADDING MENU INTERACTION

//Step 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a');

//HELPER FUNCTION TO BUILD SUB MENU DYNAMICALLY
function buildSubmenu(subLinks) {
  //Clear current contents of sub menuEl
  subMenuEl.innerHTML = '';
  //Iterate over sublinks array
  subLinks.forEach(function(link) {
    //Create new a element
    let newAnchor = document.createElement('a');
    //Add the href attribute to a element
    newAnchor.setAttribute('href', link.href);
    //Set the content of the a element to the text of the link
    newAnchor.textContent = link.text;
    //Append the new a element to the subMenuEl
    subMenuEl.appendChild(newAnchor);
  });
}

//Step 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
  // ---The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
// ---The second line of code of the function should immediately return if the element clicked was not an <a> element.
if (event.target.tagName !== 'A') {
return;
}
// // ---Log the content of the <a> to verify the handler is working
console.log(event.target.textContent);

subMenuEl.style.top = '0';

// Remove the 'active' class from each <a> element in topMenuLinks
topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});

// Update the contents of mainEl inside an <h1> with the content of the clicked <a>
  mainE1.innerHTML = `<h1>${event.target.textContent}</h1>`;

// Add 'active' class to the clicked <a> element
event.target.classList.add('active');

const clickedLinkObject = menuLinks.find(link => link.text === event.target.textContent);

// Check if the clicked link has subLinks (submenu)
if (clickedLinkObject.subLinks) {
  // Build the submenu dynamically
  buildSubmenu(clickedLinkObject.subLinks);
  // Toggle the submenu
  if (subMenuEl.style.top === '100%') {
    subMenuEl.style.top = '0';
  } else {
    subMenuEl.style.top = '100%';
  }
} else {
  // Hide the submenu if no sublinks exist
  subMenuEl.style.top = '0';
}
});
// // Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
// //---- The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// // ----The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// // >Hint: Removing a non-existent class from an element does not cause an error!

// // Remove the 'active' class from all <a> elements
// topMenuLinks.forEach(function(link){
//   link.classList.remove('active');
// });
// //log clicked links from menu links
// const clickedLinkObject = menuLinks.find(link => link.text === event.target.textContent)
// //Toggle the 'active' class on the clicked <a> element
// if (event.target.classList.contains('active')) {
//   event.target.classList.remove('active');
//   subMenuEl.style.top = '0'; //Hide submenu if link is inactive
// } else {
//   event.target.classList.add('active');


// // //Log to verify handler is working
// // console.log(event.target.textContent);

// //--Part 5 ADDING SUBMENU INTERACTION--
// // Show submenu if if clicked link has sub links
// if (clickedLinkObject.subLinks) {
//   buildSubmenu(clickedLinkObject.subLinks)
//   if (subMenuEl.style.top === '100%') {
//     subMenuEl.style.top = '0';
//   } else {
//     subMenuEl.style.top = '100%'
//   }
// } else {
//   subMenuEl.style.top = '0';
// }
// }
// console.log(event.target.textContent);
// });

// // HELPER FUNCTION TO FACILITATE MAKING THE SUBMENU DYNAMIC BASED ON THE CLICKED LINK ADDED ^^^











