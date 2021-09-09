/* eslint-disable import/no-cycle */
import { getShows, getComments } from '../function/request.js';
import commentPopUp from './commentPopUp.js';
import likeButton from './likeButton.js';
import itemsCounter from '../function/itemsCounter.js';

const homePage = async () => {
  const container = document.getElementById('homePage');
  const counter = document.getElementById('counter');
  let myShows = await getShows();
  myShows = myShows.slice(0, 21);
  counter.innerHTML = `(${itemsCounter(myShows)})`;
  myShows.forEach((show) => {
    const showDiv = document.createElement('div');
    showDiv.classList.add('d-flex', 'flex-column', 'align-items-center');
    showDiv.classList.add('col-12');
    const myImage = document.createElement('img');
    myImage.classList.add('show-image');
    const imageUrl = show.image.original;
    myImage.setAttribute('src', imageUrl);

    const ImagePop = document.createElement('img');
    ImagePop.classList.add('popup-image');
    ImagePop.setAttribute('src', imageUrl);

    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('p-2', 'px-5', 'mt-3', 'title-bg');
    movieTitle.innerHTML = show.name;

    const likeDiv = document.createElement('div');
    likeDiv.appendChild(movieTitle);
    likeDiv.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center');
    likeButton(show.id, likeDiv);

    const movieTitlePop = document.createElement('h5');
    movieTitlePop.classList.add('p-2');
    movieTitlePop.innerHTML = show.name;

    const commentButton = document.createElement('button');
    commentButton.classList.add('btn', 'btn-warning', 'comment-bg');
    commentButton.innerHTML = 'comment';
    commentButton.id = `item${show.id}`;
    commentButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const myComments = await getComments(show.id);
      if (myComments.error) {
        commentPopUp(
          ImagePop,
          movieTitlePop,
          show.language,
          show.runtime,
          show.status,
          show.rating.average,
        );
      } else {
        commentPopUp(
          ImagePop,
          movieTitlePop,
          show.language,
          show.runtime,
          show.status,
          show.rating.average,
          myComments,
        );
      }
    });

    showDiv.appendChild(myImage);
    showDiv.appendChild(likeDiv);
    showDiv.appendChild(commentButton);
    container.appendChild(showDiv);
  });
};

export default homePage;
