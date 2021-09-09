/* eslint-disable import/no-cycle */
import homePage from './homePage.js';

const commentPopUp = (image, title, language, runtime, status, rating, commentsArray = [{ username: 'No', comment: 'comments' }]) => {
  const popUpOverLay = document.getElementById('overlay');
  popUpOverLay.classList.remove('d-none');
  popUpOverLay.classList.add('d-block', 'd-flex');

  const headerPopUp = document.createElement('div');
  const closeBtn = document.createElement('h2');
  closeBtn.innerHTML = '+';
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', async () => {
    popUpOverLay.classList.remove('d-block');
    popUpOverLay.classList.add('d-none');
    homePage();
    popUpOverLay.innerHTML = '';
  });
  headerPopUp.classList.add('w-100', 'd-flex', 'justify-content-end');
  headerPopUp.appendChild(closeBtn);

  const foreGroundPopUp = document.createElement('div');
  foreGroundPopUp.classList.add(
    'foreground-overlay',
    'd-flex',
    'flex-column',
    'align-items-center',
  );

  const popUpFooter = document.createElement('div');
  popUpFooter.classList.add('d-flex', 'w-50', 'justify-content-evenly');

  const popUpFooterLeft = document.createElement('div');
  const languagePop = document.createElement('h5');
  const runtimePop = document.createElement('h5');
  languagePop.innerHTML = `Language: ${language}`;
  runtimePop.innerHTML = `Runtime: ${runtime}`;

  popUpFooterLeft.appendChild(languagePop);
  popUpFooterLeft.appendChild(runtimePop);

  const popUpFooterRight = document.createElement('div');
  const statusPop = document.createElement('h5');
  const ratingPop = document.createElement('h5');
  statusPop.innerHTML = `Status: ${status}`;
  ratingPop.innerHTML = `Rating: ${rating}`;

  popUpFooterRight.appendChild(statusPop);
  popUpFooterRight.appendChild(ratingPop);

  popUpFooter.appendChild(popUpFooterLeft);
  popUpFooter.appendChild(popUpFooterRight);

  const commentSection = document.createElement('div');
  commentSection.id = 'commentSection';
  const commentHeading = document.createElement('h5');
  commentHeading.innerHTML = 'Comments';
  commentSection.appendChild(commentHeading);

  commentsArray.forEach((comment) => {
    const myComment = document.createElement('p');
    myComment.className = 'commentClass';
    myComment.innerHTML = `${comment.username}: ${comment.comment}`;
    commentSection.appendChild(myComment);
  });

  const addComment = document.createElement('div');
  const addCommHeading = document.createElement('h5');
  addCommHeading.innerHTML = 'Add Comment';

  const imageDiv = document.createElement('div');
  imageDiv.appendChild(image);
  imageDiv.classList.add(
    'w-100', 'h-50',
    'd-flex', 'justify-content-evenly',
    'align-items-center',
  );
  const form = document.createElement('form');

  const nameInput = document.createElement('input');
  nameInput.required = true;
  nameInput.id = 'name';
  nameInput.placeholder = 'Your Name';

  const commentInput = document.createElement('textarea');
  commentInput.required = true;
  commentInput.id = 'comment';
  commentInput.placeholder = 'Your Insights';
  const myBr = document.createElement('br');
  const myBr1 = document.createElement('br');
  const myBr2 = document.createElement('br');
  const myBr3 = document.createElement('br');

  const button = document.createElement('button');
  button.id = 'commentBtn';
  button.innerText = 'Comment';

  form.appendChild(nameInput);
  form.appendChild(myBr);
  form.appendChild(myBr1);
  form.appendChild(commentInput);
  form.appendChild(myBr2);
  form.appendChild(myBr3);
  form.appendChild(button);

  addComment.appendChild(addCommHeading);
  addComment.appendChild(form);

  imageDiv.appendChild(addComment);
  title.classList.add('mt-4');

  foreGroundPopUp.appendChild(headerPopUp);
  foreGroundPopUp.appendChild(imageDiv);
  foreGroundPopUp.appendChild(title);
  foreGroundPopUp.appendChild(popUpFooter);
  foreGroundPopUp.appendChild(commentSection);

  popUpOverLay.appendChild(foreGroundPopUp);
};

export default commentPopUp;