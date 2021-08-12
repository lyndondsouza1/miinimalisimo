
// Grab the items
let button = document.querySelector('.btn-search');
let form   = document.querySelector('.search-form');
let input  = document.querySelector('.search-input');

button.addEventListener('click' , function () {
    form.classList.add('is-active');
    input.focus();
});

input.addEventListener('blur' , function(){
    form.classList.remove('is-active');
})

