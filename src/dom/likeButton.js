import { postLike, fetchData } from '../function/itemLikes.js';

const involvementLikesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9YYfJY5gRMr3MgkvmC9i/Likes/';

const showLikes = (response, span, idItem) => {
  const data = response.filter((item) => item.item_id === idItem);
  if (data.length !== 0) {
    span.innerHTML = `<strong>${data[0].likes}</strong>  likes`;
  }
  if (data.length === 0) {
    span.innerHTML = '<strong>0</strong>  likes';
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
  fetchData(involvementLikesURL)
    .then((response) => {
      showLikes(response, likeSpan, `item${itemId}`);
    });
  likeSpan.id = `numb${itemId}`;
  likeSpan.setAttribute('class', 'numb');
  heartIcon.classList.add('heart');
  heartIcon.id = `like${itemId}`;
  content.appendChild(likeSpan);
  heartIcon.innerHTML = '🤍';
  heartIcon.addEventListener('click', async (ev) => {
    const { id } = ev.target;
    const likeId = id.slice(4);
    ev.preventDefault();
    if (id && id.includes('like')) {
      document.getElementById(`${id}`).innerHTML = '❤️';
      content.classList.add('red-bg');
      await postLike(likeId);
    }
    setTimeout(() => {
      document.getElementById(`${id}`).innerHTML = '🤍';
      content.classList.remove('red-bg');
    }, 10);
    fetchData(involvementLikesURL)
      .then((response) => {
        showLikes(response, likeSpan, `item${likeId}`);
      });
  });
  heartBtn.appendChild(content);
  heartBtn.insertBefore(heartIcon, heartBtn.childNodes[0]);
  div.appendChild(heartBtn);
};

export default likeButton;