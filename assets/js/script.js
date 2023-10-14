/**
 * SIDEBAR_MENU
 * This menu is meant to show and hide the content of the sidebar menu,
 * menuIcon is the icon where the event is added and the sidebar is where we add and remove the height with the event listener 
 * and the toggle functionnality.
 */
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show-menu')
    container.classList.toggle('large-container')
});