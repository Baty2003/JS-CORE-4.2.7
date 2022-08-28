function getData(name) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/search/repositories?q=${name}&sort=stars`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: 'ec3382412182a42ccd3bdd9e7d30281eb91db346',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          let error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function debounce(callBack, delay) {
  let timer;
  return async function (...args) {
    clearTimeout(timer);
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        callBack
          .call(this, ...args)
          .then((dataRepo) => resolve(dataRepo))
          .catch((err) => reject(err));
      }, delay);
    });
  };
}

const getDataDebounce = debounce(getData, 500);

export { getDataDebounce };
