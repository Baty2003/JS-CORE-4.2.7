function generateListItemResult(text, className, id) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add(className);
  listItem.dataset.idRepository = id;
  return listItem;
}

function generateCardRepository(objectGitRepository) {
  const listItem = document.createElement('li');
  listItem.classList.add('repolist__list-item');
  listItem.dataset.idrepository = objectGitRepository.id;

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('repolist__button-delete');
  listItem.append(buttonDelete);

  const pList = [
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
  ];
  pList[0].textContent = 'Name: ' + objectGitRepository.name;
  pList[1].textContent = 'Owner: ' + objectGitRepository.owner.login;
  pList[2].textContent =
    'Stars count: ' + objectGitRepository.stargazers_count;

  const container = document.createElement('div');

  pList.forEach((pElem) => {
    pElem.classList.add('repolist__text');
    container.append(pElem);
  });

  listItem.prepend(container);

  return listItem;
}

export { generateListItemResult, generateCardRepository };
