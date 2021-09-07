const requestURL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const response = await fetch(requestURL);
  const list = await response.json();
  if (list) {
    document.getElementById('loading').style.display = 'none';
  }
  return list;
};

export default getShows;