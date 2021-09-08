/* eslint-disable no-use-before-define */
import { postLike, getLikes } from '../function/itemLikes.js';

const showLikes = (response, span, idItem) => {
  const data = response.filter((item) => item.item_id === idItem);
  if (data.length !== 0) {
    span.innerText = `${data[0].likes} likes`;
  } else {
    span.innerText = '0 likes';
  }
};

const likeButton = (itemId, div) => {
  const heartBtn = document.createElement('div');
  const likeSpan = document.createElement('span');
  const content = document.createElement('div');
  const heartIcon = document.createElement('button');

  heartBtn.classList.add('heart-btn');
  heartBtn.id = itemId;
  content.classList.add('content');
  getLikes()
    .then((response) => {
      showLikes(response, likeSpan, `item${itemId}`);
    });
  likeSpan.id = `numb${itemId}`;
  likeSpan.setAttribute('class', 'numb');
  heartIcon.classList.add('heart');
  heartIcon.id = `item${itemId}`;
  content.appendChild(likeSpan);
  heartIcon.innerHTML = '🤍';
  heartIcon.addEventListener('click', async (ev) => {
    const { id } = ev.target;
    const likeId = id.slice(4);
    ev.preventDefault();
    if (id && id.includes('item')) {
      document.getElementById(`${id}`).innerHTML = '❤️';
      await postLike(likeId);
    }
    setTimeout(() => {
      document.getElementById(`${id}`).innerHTML = '🤍';
    }, 10);
    getLikes()
      .then((response) => {
        showLikes(response, likeSpan, id);
      });
  });
  heartBtn.appendChild(content);
  heartBtn.insertBefore(heartIcon, heartBtn.childNodes[0]);
  div.appendChild(heartBtn);
};

export default likeButton;