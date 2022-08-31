import { getDataDebounce } from './getData.js';
import { generateListItemResult, generateCardRepository } from './generateElem.js';

let dataRepositories;

const autocompleteInput = document.getElementById('autocomplete');
const autocompleteResultList = document.querySelector(
  '.autocomplete__result-list'
);
const favoriteRepositoriesList = document.querySelector('.repolist__list');

autocompleteResultList.innerHTML = '';
favoriteRepositoriesList.innerHTML = '';

autocompleteInput.addEventListener('input', () => {
  if (!autocompleteInput.value) return;

  getDataDebounce(autocompleteInput.value)
    .then(({ items: repositories }) => {
      dataRepositories = repositories;
      autocompleteResultList.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        autocompleteResultList.append(
          generateListItemResult(
            dataRepositories[i].name,
            'autocomplete__result-list-item',
            i
          )
        );
      }
    })
    .catch((err) => err);
});

autocompleteResultList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'LI') return;

  favoriteRepositoriesList.append(generateCardRepository(dataRepositories[+target.id]));

  autocompleteInput.value = '';
  autocompleteResultList.innerHTML = '';
});

favoriteRepositoriesList.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('repolist__button-delete')) return;

  const listItem = target.closest('li');

  listItem.closest('li').remove();
});
