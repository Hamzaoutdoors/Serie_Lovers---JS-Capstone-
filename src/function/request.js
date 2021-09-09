const requestURL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const response = await fetch(requestURL);
  const list = await response.json();
  if (list) {
    document.getElementById('loading').style.display = 'none';
  }
  return list;
};

const getComments = async (itemId) => {
  const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ng5U76WLJamDi8o1N7mp/comments?item_id=item${itemId}`;
  const response = await fetch(involvementUrl, {
    method: 'GET',
  });
  const list = await response.json();
  return list;
};

export { getShows, getComments };