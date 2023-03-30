const menuItems = document.querySelectorAll('.header-menu a');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  const element  = event.target;
  const id = element.getAtribute('href');
  const section = document.querySelector(id);
  console.log(section.offset);
}