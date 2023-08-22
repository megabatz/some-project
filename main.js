const imgUrls = [
  'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg',
  "https://img.freepik.com/premium-photo/ice-cream-in-the-cone-with-sprinkle-on-isolated-background-created-with-generative-ai-technology_67092-5374.jpg?w=2000",
  "https://img.freepik.com/free-photo/a-colorful-ice-cream-with-blue-red-and-orange-toppings-is-sitting-on-a-table_1340-34984.jpg?w=360",
  "https://img.freepik.com/premium-photo/mobile-phone-with-abstract-dobjects-on-color-background-social-media-marketing-concept_176873-16036.jpg",
  "https://img.freepik.com/premium-photo/summery-ice-cream-images-with-refreshing-flavors-and-melting-texture-ai-generative_841543-1858.jpg?w=2000",
  'https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg',
];

const gallery = document.querySelector('.gallery');
const images = document.querySelector('.images');
const dots = document.querySelector('.dots');
let currentPosition = 0;
let prevPosition = 0;
let imgContainer = [];
let dotsContainer = [];

init(0);

function init(startIndex) {
  createElements();
  setCurrentIndex(startIndex);
  appendElements();
}

// create f-n to fill images
function createElements() {
  imgUrls.forEach((url, index) => {
    imgContainer.push(createImg(url));
    dotsContainer.push(createDot(index));
  })
}

function appendElements() {

}

function createImg(url) {
  const image = document.createElement('img');
  image.src = url;
  image.alt = 'image';
  image.classList.add('image');

  return image;
}

function createDot(index) {
  const dot = document.createElement('span');
  dot.innerHTML = '●';
  dot.classList.add('dot');
  dot.setAttribute('data-dot', index);

  return dot;
}

function setCurrentIndex(index) {
  // if index > length
  // if index < 0
  // set current index


}

let autoChange = setInterval(autoChangeFunc, 5000);

gallery.addEventListener('click', (event) => {
  if (event.target.classList.contains('prev')) {
    prevPos();
  } else if (event.target.classList.contains('next')) {
    nextPos();
  } else if (event.target.classList.contains('dot')) {
    dotPos(+event.target.dataset.dot);

  }
  changeImage(currentPosition, prevPosition);
  changeDot(currentPosition, prevPosition);
  resetInterval();
})

function prevPos() {
  prevPosition = currentPosition;
  currentPosition = Math.max(--currentPosition, 0);
}

function nextPos() {
  prevPosition = currentPosition;
  currentPosition = Math.min(++currentPosition, imgContainer.length - 1);
}

function dotPos(dotIndex) {
  prevPosition = currentPosition;
  currentPosition = dotIndex;
}

function resetInterval() {
  clearInterval(autoChange);
  autoChange = setInterval(autoChangeFunc, 5000)
}

function changeImage(nextPosition, prevPosition) {
  if (prevPosition === nextPosition) return;

  imgContainer[prevPosition].classList.remove('current');
  imgContainer[nextPosition].classList.add('current');
}

function changeDot(nextPosition, prevPosition) {
  if (prevPosition === nextPosition) return;

  dotsContainer[prevPosition].classList.remove('current');
  dotsContainer[nextPosition].classList.add('current');
}

function autoChangeFunc() {
  prevPosition = currentPosition;
  currentPosition++;
  if (currentPosition >= imgContainer.length) {
    currentPosition = 0;
  }
  changeImage(currentPosition, prevPosition);
  changeDot(currentPosition, prevPosition);
}


// prevBtn.addEventListener('click', () => {
//   prevPosition = currentPosition;
//   currentPosition = Math.max(--currentPosition, 0);
//   changeImage(currentPosition, prevPosition);
//   changeDot(currentPosition,prevPosition);
// })
//
// nextBtn.addEventListener('click', () => {
//   prevPosition = currentPosition;
//   currentPosition = Math.min(++currentPosition, 4);
//   changeImage(currentPosition, prevPosition);
//   changeDot(currentPosition,prevPosition);
// })
//
// function changeImage(nextPosition, prevPosition) {
//   if (prevPosition === nextPosition) return;
//
//   images[prevPosition].classList.remove('current');
//   images[nextPosition].classList.add('current');
// }
//
// function changeDot(nextPosition, prevPosition) {
//   if (prevPosition === nextPosition) return;
//
//   dots[prevPosition].classList.remove('current');
//   dots[nextPosition].classList.add('current');
// }
//
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', (event) => {
//     console.log(+event.currentTarget.dataset.dot);
//     prevPosition = currentPosition;
//     currentPosition = index;
//     changeImage(currentPosition, prevPosition);
//     changeDot(currentPosition, prevPosition);
//   })
// })
