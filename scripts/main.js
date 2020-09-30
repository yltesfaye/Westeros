var DETAIL_IMAGE_SELECTOR ='[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var HOUSE_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;


function setDetails(imageURL, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageURL);//second one NOT A STRING!

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

}
//use housenail for only for JS
function imageFromHouse(housenail) {
  'use strict';
  return housenail.getAttribute('data-image-url');

}

function titleFromHouse(housenail) {
  'use strict';
  return housenail.getAttribute('data-image-title');

}

function setDetailsFromHouse(housenail) {
  'use strict';
  setDetails(imageFromHouse(housenail), titleFromHouse(housenail));

}

function addHouseClickHandler(house) {
  'use strict';
  house.addEventListener('click' , function (event) {
    event.preventDefault();
    setDetailsFromHouse(house);
      showDetails();
  } );


}

function getHousenailsArray() {
  'use strict';
  var housenails = document.querySelectorAll(HOUSE_LINK_SELECTOR);
  var housenailArray = [].slice.call(housenails);
  return housenailArray;

}

function hideDetails() { // add the class to body element
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
  console.log(event.keyCode);
}

function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
      frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);


}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup' , function (events) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) { // === STRICT  == loose
      hideDetails();
    }

  });

}

function initializeEvents() {
  'use strict';
  var housenails = getHousenailsArray();
  housenails.forEach(addHouseClickHandler);
  addKeyPressHandler();
}

initializeEvents();
