// DOM : data representation of the objects that comprises the structure and content of a document on the web.
//  is a programming interface for web documents.

// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn, name, css);

// window object = browser api
// document
// console.dir;
// alert('hello');
// console.log(window);
// console.log(document);
// console.dir(document);

// getElementById('element'): returns and element object representing the element whose id property matches the specific string

// const h1 = document.getElementById('title');
// h1.style.color = 'red';
// // console.log(h1);

// // document.getElementById('btn').style.backgroundColor = 'blue';
// // document.getElementById('btn').style.color = 'white';

// const button = document.getElementById('btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

// getElementsByTagNAme('tagname')
// HTML collection = arrray-like objects
// //index, length property but not array methods like forEach
// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// // console.log(headings.length);

// const items = document.getElementsByTagName('li');
// // items.forEach(function (item) {});
// items[2].style.color = 'orange';
// // queryselectorAll() in most cases
// //Nodelist = objects are collections of nodes
// // can run forEach
// // turn them into array--spread operator [...]
// // after that we can use array properties and methods

// const betterItems = [...items];

// betterItems.forEach(function (item) {
//   console.log(item);
// });

// console.log(betterItems);
// console.log(items);

// getElemetsByClassName: HTML collection

// const items = document.getElementsByClassName('special');
// // console.log(items);
// const workitems = [...items];
// // console.log(workitems);
// workitems.forEach(function (item) {
//   console.log(item);
// });
// console.log(workitems);
// console.log(items);

// querySelector- selects single  can pass any css elements
// querySelectorAll - selects all

// const unordered = document.querySelector('#result');
// // console.log(unordered);

// unordered.style.backgroundColor = 'blue';

// // const items = document.querySelector('.special');
// // console.log(items);

// const lastItem = document.querySelector('li:last-child');
// // console.log(lastItem);

// const items = document.querySelectorAll('.special');
// items.forEach(function (item) {
//   console.log(item);
//   item.style.color = 'yellow';
// });

// Navigating the DOM:
// childNodes - returns all childNodes including whitespaces which is treated as a text node

// children
// first child
// last child

// const result = document.querySelector('#result');
// const allChildren = result.childNodes;
// // console.log(allChildren);

// const children = result.children;
// console.log(children);

// console.log(result.firstChild, result.lastChild);

//parentElement:

// const heading = document.querySelector('h2');
// const parent = heading.parentElement;
// parent.style.color = 'red';

// previousSiblings
// nextSiblings
// return whitespaces

// const first = document.querySelector('.first');
// // console.log(first);
// const second = (first.nextSibling.nextSibling.style.color = 'red');
// // console.log(second);

// const last = document.querySelector('#last');
// const fourth = last.previousSibling.previousSibling;
// console.log(fourth);
// console.log(last.nextSibling.nextSibling);

//previousElementSibling
// nextElementSibling

// const first = document.querySelector('.first');
// // console.log(first);

// first.nextElementSibling.style.color = 'red';
// const last = document.querySelector('#last');
// last.previousElementSibling.previousElementSibling.style.color = 'green';

//node value
// textContent

// const item = document.getElementById('special');
// // console.log(item);
// const value = item.firstChild.nodeValue;
// // console.log(value);
// // console.log(item.childNodes[0].nodeValue);
// // console.log(item.firstChild.nodeValue);

// const easyValue = item.textContent;
// console.log(easyValue);

// getAttribute
// setAttribute

// const first = document.querySelector('.first');
// // const classValue = first.getAttribute('class');
// const idValue = first.getAttribute('id');
// const links = document.querySelectorAll('.first');
// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'I also have a class of first';

// console.log(last);
// // console.log(idValue);

// // console.log(classValue);
// console.log(links);

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');
// // const classValue = first.className;
// // console.log(classValue);

// //
// second.className = 'colors text';
// // third.classList.add('colors');
// // third.classList.add('text');

// third.classList.add('text', 'colors');
// third.classList.remove('text');

// let result = third.classList.contains('colors');
// if (result) {
//   console.log('hello world');
// } else {
//   console.log('does not have class');
// }
// const classValue = third.classList;
// console.log(classValue);

// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore ('element', 'location')
// replaceChild('new', 'old')

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');
// // create empty element

// const bodyDiv = document.createElement('div');
// //create textnode
// const text = document.createTextNode('a simple body div');

// bodyDiv.appendChild(text);
// // document.body.appendChild(bodyDiv);
// document.body.insertBefore(bodyDiv, result); // result element

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// // result.appendChild(heading);
// result.insertBefore(heading, first);

// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`I am small heading text`);
// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);
// // result.insertBefore(heading);
// // console.log(result.children);

//prepend
// innerText

// const heading = document.createElement('h2');

// heading.innerText = `I am a dynamic heading`;

// document.body.prepend(heading);

//remove
// removeChild

// const result = document.querySelector('#result');
// // result.remove();

// const heading = result.querySelector('h1');
// result.removeChild(heading);
// console.log(heading);

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// // console.log(div.textContent);
// // console.log(list.innerHTML);
// // console.log(list.textContent);

// const randomVar = 'random value';
// const ul = document.createElement('ul');
// ul.innerHTML = `<li class = 'item'> ${randomVar}</li>
// <li>list item</li><li>list item</li>`;
// document.body.appendChild(ul);

// div.textContent = 'hello world';
// div.innerHTML = 'hello world';

// const random = document.querySelector('.random');

// // console.log(random.style);

// // random.style.backgroundColor = 'blue';

// random.classList.add('title');

// events

// const btn = document.querySelector('.btn');
// const heading2 = document.querySelector('h2');
// // console.log(heading2);

// function changeColors() {
//   //   console.log('hello');
//   let hasClass = heading2.classList.contains('red');
//   // if(heading2.classList.contains('red')){

//   // }
//   if (hasClass) {
//     heading2.classList.remove('red');
//   } else {
//     heading2.classList.add('red');
//   }
// }
// btn.addEventListener('click', changeColors);
// //   console.log('you clicked ');
// //   heading2.classList.add('red');

//click -fires after full action occurs
//mousedown - button is pressed
// mouseup- button is released
//mouseenter- move onto an element
// mouse leave- moved out of an element

// const heading = document.querySelector('h1');
// const button = document.querySelector('.btn');

// button.addEventListener('click', function () {
//   console.log('you clicked me');
// });
// button.addEventListener('mousedown', function () {
//   console.log('down');
// });

// button.addEventListener('mouseup', function () {
//   console.log('up');
// });
// heading.addEventListener('mouseenter', function () {
//   heading.classList.add('blue');
// });
// heading.addEventListener('mouseleave', function () {
//   heading.classList.remove('blue');
// });

// const nameInput = document.getElementById('name');
// // nameInput.addEventListener('keypress', function () {
// //   console.log('you pressed a key ');
// // });
// // nameInput.addEventListener('keydown', function () {
// //   console.log('you pressed a key ');
// // });

// nameInput.addEventListener('keyup', function () {
//   //   console.log('you pressed a key ');
//   console.dir(nameInput.value);
// });

// event object argument e, event
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault()= prevent default behavior

// const heading = document.querySelector('h2');
// const button = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', function (event) {
//   //   heading.classList.add('blue');
//   console.log(event.currentTarget);
// });

// button.addEventListener('click', function (event) {
//   //   console.log(event.currentTarget);
//   event.currentTarget.classList.add('blue');
//   console.log(event.type);
// });

// function someFunc(e) {
//   e.preventDefault();
// }

// link.addEventListener('click', someFunc);

// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

// const btns = document.querySelectorAll('.btn');
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = 'green';

//     console.log('target', e.target);
//     e.target.style.color = 'green';
//   });
// });

// Event Propagation: order the events are fired
// Event Bubbling: clicked element first then bubbles up --default
// Event Capturing : fires at the root and fires until reaches target

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('current target', e.currentTarget);
//   //   console.log('target', e.target);
//   //   if (e.target.classList.contains('link')) {
//   //     console.log('you clicked on link');
//   //   }
// }

// function stopPropagation(e) {
//   console.log('you cliked a list');
//   e.stopPropagation();
// }

// // list.addEventListener('click', stopPropagation);
// list.addEventListener('click', showBubbling, { capture: true });
// container.addEventListener('click', showBubbling, { capture: true });

// Form : submit event listener, prevent default, how to get value

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   //   console.log('submitted');
//   console.log(name.value, password.value);
// });

//web storage API - provided by browser
//session storage - local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'shankar');
// sessionStorage.setItem('name', 'shankar');

// localStorage.setItem('name', 'shankar');
// localStorage.setItem('friend', 'sear');
// localStorage.setItem('job', 'developer');

// const name = localStorage.getItem('name');
// console.log(name);
// localStorage.removeItem('friend');
// localStorage.clear();

// JSON.stringify(), JSON.parse()
// const friends = ['john', 'bobo', 'peter'];
// localStorage.setItem('friends', JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[0]);

// let fruits;
// if (localStorage.getItem('fruits')) {
//   fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//   fruits = [];
// }

// console.log(fruits);
// // fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits));

// setTimeout -runs function once after specific time
// - pass function by reference
// - duration in ms(1000ms=1second)
// - default 0,
// returns unique identifier
// cleartTimeout to cancel
// - on window object

// function sayHello() {
//   console.log('Hello Shankar');
// }
// // setTimeout(sayHello, 1000);

// // setTimeout(function () {
// //   console.log('hello john');
// // }, 2000);

// //pass arguments
// function showScore(name, score) {
//   console.log(`hello ${name}, your score is ${score}`);
// }

// // setTimeout(showScore, 1000, 'shankar', 90);
// const firstId = setTimeout(showScore, 100, 'shankar', 90);
// const secondId = setTimeout(showScore, 100, 'john', 86);
// console.log(firstId);
// console.log(secondId);
// clearTimeout(firstId);

// setInterval:runs function repeatedly, at specific intervals
// -pass function by reference
// - duration in ms (1000ms = 1 second)
// default 0,
// returns unique identifier
// clearInterval to cancel

// function showScore(name, score) {
//   console.log(`hello ${name}, your score is ${score}`);
// }

// const firstId = setInterval(showScore, 2000, 'bobo', 50);
// const secondId = setInterval(showScore, 2000, 'susan', 58);

// clearInterval(firstId);

// DOMContentLoaded event fires when initial HTML document has been
// completely loaded and parsed, without waiting for
// stylesheets, images, and subframes to finish loading

// window.addEventListener('DOMContentLoaded', function () {
//   const heading = document.querySelector('h1');
//   heading.style.color = 'red';
//   //   console.log('hello');
// });

// load event is fired when the whole page has loaded including all dependent resources such as stylesheets and images.
// This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading
// window.addEventListener('load', function () {
//   console.log('I will run second');
//   const img = document.querySelector('img');
//   console.log(img);
//   console.log(img.width);
// });

// window.addEventListener('DOMContentLoaded', function () {
//   console.log('DOMContentLoaded I will run first');

//   const img = document.querySelector('img');
//   console.log(img);
//   console.log(img.width);
// });

// Scroll Event - on element or document

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY + 'px');
//   console.log(window.scrollX + 'px');
// });

// document
// scrollY: returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)

// scrollX: returns the number of pixels scrolled along the horizantal axis(pageXOffset)

// innerWidth - The read only window property the interior width of the windows in pixels
// innerHeight - The read only property of the window interface returns the interior height of the window in pixels
// The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport

// console.log('heihgt : ' + window.innerHeight);
// console.log('width : ' + window.innerWidth);

// const btn = document.querySelector('.btn');
// const box = document.querySelector('.box');

// btn.addEventListener('click', function () {
//   const values = box.getBoundingClientRect();
//   console.log(values);
// });

// The resize event fires whenthe document view (window) has been resized

// window.addEventListener('resize', function () {
//   console.log(window.innerWidth);
// });
