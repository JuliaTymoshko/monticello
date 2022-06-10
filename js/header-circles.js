const DOM = document;

const circles = DOM.getElementsByClassName('circle');
const navItems = DOM.getElementsByClassName('navigation__item');

for (const item of navItems) {
  item.addEventListener('mouseover', () =>
    item.childNodes[0].childNodes[0]?.nextSibling?.classList.add(
      'circle--active'
    )
  );

  item.addEventListener('mouseout', (e) => {
    for (const circle of circles) {
      circle.classList.remove('circle--active');
    }
  });
}

// __________ My old variant ___________;
// const DOM = document;

// const circles = DOM.getElementsByClassName('circle');
// const navItems = DOM.getElementsByClassName('navigation__item');

// const aboutUsCircle = DOM.getElementById('js-about-us');
// const newsCircle = DOM.getElementById('js-news');
// const contactsCircle = DOM.getElementById('js-contacts');
// const projectsCircle = DOM.getElementById('js-projects');

// const NAV_TYPES = {
//   ABOUT US
// };

// for (const item of navItems) {
//   item.addEventListener('mouseover', (e) => {
//     for (const circle of circles) {
//       switch (item.innerText) {
//         case 'ABOUT US':
//           aboutUsCircle.classList.add('circle--active');
//           break;
//         case 'NEWS':
//           newsCircle.classList.add('circle--active');
//           break;
//         case 'CONTACT':
//           contactsCircle.classList.add('circle--active');
//           break;
//         case 'PROJECTS':
//           projectsCircle.classList.add('circle--active');
//           break;
//       }
//     }
//   });

//   item.addEventListener('mouseout', (e) => {
//     for (const circle of circles) {
//       circle.classList.remove('circle--active');
//     }
//   });
// }
