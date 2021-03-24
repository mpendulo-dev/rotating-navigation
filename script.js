const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


// when the user clicks on the bars icon the class of show nav is added to the container that flips it a few degress updwards
open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));