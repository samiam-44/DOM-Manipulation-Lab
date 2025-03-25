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