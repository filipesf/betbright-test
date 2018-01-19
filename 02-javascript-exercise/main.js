/**
 * Get DOM elements
 */
const navButtons = document.querySelector('#js-nav');
const imagesGallery = document.querySelector('#js-gallery');



/**
 * Set up API
 */
const API = {
  baseUrl: 'https://api.flickr.com/services/rest/?',
  params: {
    method: 'flickr.photos.search',
    api_key: '11c7afa587ff4b68020d499d9a770e5f',
    text: '',
    sort: 'interestingness-desc',
    per_page: 6,
    format: 'json',
    nojsoncallback: 1,
  }
};



/**
 * Build Endpoint URL
 */
function buildEndpointUrl(url, params) {
  const endPointURL = url;
  const endPointParams = Object.keys(params)
    .map(key => [key, params[key]]
      .map(encodeURIComponent)
        .join("="))
    .join("&");
  return endPointURL + endPointParams;
};



/**
 * Make HTTP Request
 */
function makeHTTPRequest() {
  this.get = (url, callback) => {
    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onreadystatechange = () => {
      if (request.readyState == request.DONE && request.status == 200) {
        callback(request.responseText)
      }
    };

    request.send();
  };
};



/**
 * Place images
 */
function placeImages(images) {
  const imgs = `
    ${images.map(i => `
      <figure style="background-image: url(https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg)"></figure>
    `).join('')}
  `;

  imagesGallery.innerHTML = imgs;
};



/**
 * Load gallery
 */
function loadGallery(event) {
  event.preventDefault();
  event.stopPropagation();

  const url = API.baseUrl;
  const params = Object.assign({}, API.params);
  params.text = event.target.innerHTML;

  const client = new makeHTTPRequest();
  client.get(buildEndpointUrl(url, params), response => {
    const data = JSON.parse(response);
    placeImages(data.photos.photo);
  });
};



/**
 * Listeners
 */
navButtons.addEventListener('click', loadGallery);

