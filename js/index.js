import { getDataDebounce } from './getData.js';
import { generateLiRepoList, generateLiResult } from './generateElem.js';

let dataRepositories;
const autocompleteInput = document.getElementById('autocomplete');
const autocompleteResultList = document.querySelector(
  '.autocomplete__result-list'
);
const repoList = document.querySelector('.repolist__list');

autocompleteResultList.innerHTML = '';
repoList.innerHTML = '';

autocompleteInput.addEventListener('input', () => {
  autocompleteResultList.innerHTML = '';

  if (!autocompleteInput.value) return;

  getDataDebounce(autocompleteInput.value)
    .then(({ items }) => {
      dataRepositories = items;
      for (let i = 0; i < 5; i++) {
        autocompleteResultList.append(
          generateLiResult(items[i].name, 'autocomplete__result-list-item', i)
        );
      }
    })
    .catch(err => console.log(err));
});

autocompleteResultList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName !== 'LI') return;

  const appendElem = generateLiRepoList(dataRepositories[+target.id]);
  appendElem.style.opacity = '0';
  appendElem.style.transform = 'translateX(-30px)';
  repoList.append(appendElem);
  setTimeout(() => {
    appendElem.style.opacity = '1';
    appendElem.style.transform = '';
  }, 100);

  autocompleteInput.value = '';
  autocompleteResultList.innerHTML = '';
});

repoList.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.classList.contains('repolist__button-delete')) return;

  const li = target.closest('li');

  li.style.opacity = '0';
  li.style.transform = 'translateX(-30px)';

  setTimeout(() => {
	li.closest('li').remove();
  }, 100);
  
});
