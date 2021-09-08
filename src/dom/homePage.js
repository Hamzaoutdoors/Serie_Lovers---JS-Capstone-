/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */

import getShows from '../function/request.js';
import commentPopUp from './commentPopUp.js';
import likeButton from './likeButton.js';

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

    const ImagePop = document.createElement('img');
    ImagePop.classList.add('show-image');
    ImagePop.setAttribute('src', imageUrl);

    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('p-2');
    movieTitle.innerHTML = show.name;

    const movieTitlePop = document.createElement('h5');
    movieTitlePop.classList.add('p-2');
    movieTitlePop.innerHTML = show.name;

    const commentButton = document.createElement('button');
    commentButton.classList.add('btn', 'btn-warning');
    commentButton.innerHTML = 'comment';
    commentButton.id = `item${show.id}`;
    commentButton.addEventListener('click', (e) => {
      e.preventDefault();
      commentPopUp(
        ImagePop,
        movieTitlePop,
        show.language,
        show.runtime,
        show.status,
        show.rating.average,
      );
    });

    showDiv.appendChild(myImage);
    showDiv.appendChild(movieTitle);
    likeButton(show.id, showDiv);
    showDiv.appendChild(commentButton);
    container.appendChild(showDiv);
  });
};

export default homePage;

/* function Toggle1(e) {
  console.log(e.target);
  if (btnvar1.style.color === 'red') {
    btnvar1.style.color = 'grey';
  } else {
    btnvar1.style.color = 'red';
  }
} */