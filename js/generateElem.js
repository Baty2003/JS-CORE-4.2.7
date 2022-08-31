function generateLiResult(text, className, id) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add(className);
  listItem.dataset.idRepository = id;
  return listItem;
}

function generateLiRepoList(objectGitRepositories) {
  const listItem = document.createElement('li');
  listItem.classList.add('repolist__list-item');
  listItem.dataset.idrepository = objectGitRepositories.id;

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('repolist__button-delete');
  listItem.append(buttonDelete);

  const paragraphs = [
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p'),
  ];
  paragraphs[0].textContent = 'Name: ' + objectGitRepositories.name;
  paragraphs[1].textContent = 'Owner: ' + objectGitRepositories.owner.login;
  paragraphs[2].textContent =
    'Stars count: ' + objectGitRepositories.stargazers_count;

  const div = document.createElement('div');

  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('repolist__text');
    div.append(paragraph);
  });

  listItem.prepend(div);

  return listItem;
}

export { generateLiResult, generateLiRepoList };
