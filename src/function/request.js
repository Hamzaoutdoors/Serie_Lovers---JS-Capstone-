const requestURL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const response = await fetch(requestURL);
  const list = await response.json();
  return list;
};

export default getShows;