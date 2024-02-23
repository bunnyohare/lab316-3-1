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
subMenuEl.style.top = 0;

const topMenuLinks = document.querySelectorAll('a');

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName.toLowerCase() != 'a'){ return;
  }
  // if target element clicked add active to it
  event.target.classList.add("active");

  topMenuLinks.forEach(link => link.classList.remove('active'));

  console.log(event.target.classList.add("active"));
  topMenuEl.classList.toggle("active");
  

  console.log(topMenuEl)

});