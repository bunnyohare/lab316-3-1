// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Lab1 Part 1:
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add("flex-ctr");

// Lab 1 Part 2:
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

// Lab 1 Part 3:

const nav = document.querySelector('nav')

menuLinks.forEach((item) => {
    menuItem = document.createElement('a');
    menuItem.textContent = item.text;
    menuItem.href = item.href;
    nav.appendChild(menuItem);
    console.log(menuItem)
})


const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll('a');

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  // Check if the clicked element is an <a> tag and does not have class "active"
  if (event.target.tagName.toLowerCase() === 'a' && !event.target.classList.contains('active')) {
    // Remove "active" class from all links
    topMenuLinks.forEach(link => link.classList.remove('active'));

    // Add "active" class to the clicked link
    event.target.classList.add("active");

    // Check if the corresponding item in menuLinks has subLinks
    const index = Array.from(topMenuLinks).indexOf(event.target);
    if (index >= 0 && menuLinks[index].subLinks) {
      // Set the CSS top property of subMenuEl to 100%
      subMenuEl.style.top = "100%";

        // Build submenu based on the clicked link's subLinks
        buildSubmenu(menuLinks[index].subLinks);

     }
  }
  else {
    // If there are no subLinks, hide the sub menu
    subMenuEl.style.top = "0";
  }
});

function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array
  subLinks.forEach(link => {
    // Create an <a> element
    const subMenuItem = document.createElement('a');
    
    // Add an href attribute
    subMenuItem.href = link.href;
    
    // Set the element's content
    subMenuItem.textContent = link.text;
    
    // Append the new element to subMenuEl
    subMenuEl.appendChild(subMenuItem);
  });
}
