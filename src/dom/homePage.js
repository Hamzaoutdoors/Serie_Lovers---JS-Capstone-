import getShows from '../function/request.js';

const homePage = async () => {
  const container = document.getElementById('homePage');
  let myShows = await getShows();
  myShows = myShows.slice(1, 9);
  myShows.forEach((show) => {
    const showDiv = document.createElement('div');
    const myImage = document.createElement('img');
    const imageUrl = show.image.original;
    myImage.setAttribute('src', imageUrl);
    const movieTitle = document.createElement('h5');
    movieTitle.innerHTML = show.name;

    showDiv.appendChild(myImage);
    showDiv.appendChild(movieTitle);
    container.appendChild(showDiv);
  });
};

export default homePage;