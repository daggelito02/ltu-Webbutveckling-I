// Hämtar element och gör till variabler
const dropdownToggle = document.getElementById('menu-toggle');
const buttonText = document.getElementById('button-text');
const dropdownMenu = document.querySelector('.menu-dropdown');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open'); // Växlar öppet/stängt läge på menypanelen
  dropdownToggle.classList.toggle('selected'); // Växlar mellan selected läge eller ej
  const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
  dropdownToggle.setAttribute('aria-expanded', !expanded); // Växla aria-expanded
  
  // Växla text tillhörande knappen
  buttonText.textContent = expanded ? 'Öppna' : 'Stäng';
});