let toggleBtn = document.querySelector('.toggle');
let mobileToggleBtn = document.querySelector('.mobile-nav');

toggleBtn.addEventListener('click', function() {

    toggleBtn.classList.toggle('is-active')

    mobileToggleBtn.classList.toggle('active')
});