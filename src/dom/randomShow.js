const requestURL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  const response = await fetch(requestURL);
  const list = await response.json();
  if (list) {
    document.getElementById('loading').style.display = 'none';
  }
  return list;
};

const displayShow = (id) => {
  const randomShowDiv = document.getElementById('random-show');
  const newDiv = document.createElement('div');
  newDiv.classList.add('row', 'g-1');
  getShows()
    .then((response) => {
      if (!response) {
        newDiv.innerHTML = '<h3 class="card-title">No Show avaible</h3>';
      }
      const show = response.filter((show) => show.id === id);
      newDiv.innerHTML = ` <div class="col-md-4">
      <img src="${show.image.original}" class="img-fluid rounded-start" alt="show image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${show.title}</h5>
        <p class="card-text">${show.summary}</p>
        <p class="card-text"><small class="text-muted">this movie have rating of ${show.rating}</small></p>
        <button type="button" class="btn btn-warning" id="random-btn">Warning</button>
      </div>
    </div>
`;
      randomShowDiv.innerHTML = '';
      randomShowDiv.appendChild(newDiv);
    });
};

export default displayShow;
