const buttonSearch = document.querySelector('#page-home main a');
const modal = document.querySelector('#modal');

const clos = document.querySelector('#modal .header a');

buttonSearch.addEventListener('click', () => {
	modal.classList.remove('hide');
});

clos.addEventListener('click', () => {
	modal.classList.add('hide');
});
