/* eslint-disable import/no-cycle */
import { getShows, getComments, postComment } from '../function/request.js';
import commentPopUp from './commentPopUp.js';
import likeButton from './likeButton.js';
import itemsCounter from '../function/itemsCounter.js';

const homePage = async () => {
  const container = document.getElementById('homePage');
  const counter = document.getElementById('counter');
  let myShows = await getShows();
  myShows = myShows.slice(160, 169);
  counter.innerHTML = `(${itemsCounter(myShows)})`;
  myShows.forEach((show) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    const showDiv = document.createElement('div');
    showDiv.classList.add('card', 'h-100', 'border-warning', 'd-flex', 'flex-column', 'align-items-center', 'showCard', 'mb-3');
    showDiv.classList.add('col-12');
    const myImage = document.createElement('img');
    myImage.classList.add('show-image');
    const imageUrl = show.image.original;
    myImage.setAttribute('src', imageUrl);

    const ImagePop = document.createElement('img');
    ImagePop.classList.add('popup-image');
    ImagePop.setAttribute('src', imageUrl);

    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('p-2', 'px-4', 'mt-3', 'title-bg');
    movieTitle.innerHTML = show.name;

    const likeDiv = document.createElement('div');
    likeDiv.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center');
    likeButton(show.id, likeDiv);

    const movieTitlePop = document.createElement('h5');
    movieTitlePop.classList.add('p-2');
    movieTitlePop.innerHTML = show.name;

    const commentButton = document.createElement('button');
    commentButton.classList.add('btn', 'btn-warning', 'comment-bg', 'h-50', 'font-weight-bold');
    commentButton.innerHTML = 'comment';
    commentButton.id = `item${show.id}`;
    const newDiv = document.createElement('div');
    newDiv.classList.add('d-flex', 'justify-content-between');

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
      const myName = document.getElementById('name');
      const commentInput = document.getElementById('comment');
      const buttonComment = document.getElementById('commentBtn');
      const commentSection = document.getElementById('commentSection');
      const commentClass = document.getElementsByClassName('commentClass');
      buttonComment.addEventListener('click', (e) => {
        e.preventDefault();
        postComment(myName.value, commentInput.value, `item${show.id}`);
        const newComment = document.createElement('p');
        newComment.innerHTML = `${myName.value}: ${commentInput.value}`;
        commentSection.appendChild(newComment);
        if (commentClass[0].innerHTML === 'No: comments') {
          commentClass[0].innerHTML = '';
        }
        myName.value = '';
        commentInput.value = '';
      });
    });

    showDiv.appendChild(myImage);
    showDiv.appendChild(movieTitle);
    newDiv.appendChild(commentButton);
    newDiv.appendChild(likeDiv);
    showDiv.appendChild(newDiv);
    colDiv.appendChild(showDiv);
    container.appendChild(colDiv);
  });
};

export default homePage;
