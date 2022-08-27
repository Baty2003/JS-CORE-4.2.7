function generateLiResult(text, className, id){
	const li = document.createElement('li');
	li.textContent = text;
	li.classList.add(className);
	li.dataset.idRepo = id
	return li;
}

function generateLiRepoList(objectGitRepositories) {
	
	const li = document.createElement('li');
	li.classList.add("repolist__list-item");
	li.dataset.idrepository = objectGitRepositories.id
	
	
	const buttonDelete = document.createElement('button');
	buttonDelete.classList.add("repolist__button-delete")
	li.append(buttonDelete)

	const p = [document.createElement("p"),document.createElement("p"),document.createElement("p")]
	p[0].textContent = "Name: " + objectGitRepositories.name;
	p[1].textContent = "Owner: " + objectGitRepositories.owner.login;
	p[2].textContent = "Stars count: " + objectGitRepositories.stargazers_count;
	
	const div = document.createElement('div')

	p.forEach(elem => {
		elem.classList.add("repolist__text")
		div.append(elem);
	});

	li.prepend(div)
	

	return li
}


export{generateLiResult,generateLiRepoList}