// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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
  
  //DOM MANPULATION PART 2

  // CREATING THE SUB MENU

  // Step 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  let subMenuEl = document.getElementById('sub-menu');

  //Step 2. Set the height subMenuEl element to be "100%".
  subMenuEl.style.height = "100%";

  //Step 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Step 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

