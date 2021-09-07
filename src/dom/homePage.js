import getShows from '../function/request.js';

const homePage = async () => {
  const container = document.getElementById('homePage');
  const counter = document.getElementById('counter');
  let myShows = await getShows();
  myShows = myShows.slice(0, 21);
  counter.innerHTML = `(${myShows.length})`;
  myShows.forEach((show) => {
    const showDiv = document.createElement('div');
    showDiv.classList.add('d-flex', 'flex-column', 'align-items-center');
    showDiv.classList.add('col-4');
    const myImage = document.createElement('img');
    myImage.classList.add('show-image');
    const imageUrl = show.image.original;
    myImage.setAttribute('src', imageUrl);
    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('p-2');
    movieTitle.innerHTML = show.name;
    const commentButton = document.createElement('button');
    commentButton.classList.add('btn', 'btn-warning');
    commentButton.innerHTML = 'comment';

    showDiv.appendChild(myImage);
    showDiv.appendChild(movieTitle);
    showDiv.appendChild(commentButton);
    container.appendChild(showDiv);
  });
};

export default homePage;