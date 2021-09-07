/* eslint-disable import/no-cycle */
import homePage from './homePage.js';

const commentPopUp = (image, title, language, runtime, status, rating) => {
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

  title.classList.add('mt-4');

  foreGroundPopUp.appendChild(headerPopUp);
  foreGroundPopUp.appendChild(image);
  foreGroundPopUp.appendChild(title);
  foreGroundPopUp.appendChild(popUpFooter);

  popUpOverLay.appendChild(foreGroundPopUp);
};

export default commentPopUp;