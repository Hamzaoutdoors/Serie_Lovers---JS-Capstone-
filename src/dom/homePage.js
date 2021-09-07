import getShows from '../function/request.js';

const homePage = async () => {
  const container = document.getElementById('homePage');
  let myShows = await getShows();
  myShows = myShows.slice(0, 9);
  myShows.forEach((show) => {
    const showDiv = document.createElement('div');
    showDiv.classList.add('col-4');
    const myImage = document.createElement('img');
    myImage.classList.add('w-100', 'h-75');
    const imageUrl = show.image.original;
    myImage.setAttribute('src', imageUrl);
    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('p-2');
    movieTitle.innerHTML = show.name;

    showDiv.appendChild(myImage);
    showDiv.appendChild(movieTitle);
    container.appendChild(showDiv);
  });
};

export default homePage;