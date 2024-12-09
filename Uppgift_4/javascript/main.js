const dropdownToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.querySelector('.menu-dropdown');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open'); // Växlar öppet/stängt läge
  dropdownToggle.classList.toggle('selected'); // Växlar öppet/stängt läge
});