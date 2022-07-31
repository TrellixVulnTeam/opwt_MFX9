const burger = document.querySelector('#burger');
const mobile_menu = document.querySelector('#mobile-menu');

burger.addEventListener('click', function() {
    if (mobile_menu.classList.contains('hidden')) {
        mobile_menu.classList.remove('hidden');
    } else {
        mobile_menu.classList.add('hidden');
    }
})