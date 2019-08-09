// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


window.addEventListener('load', event => {

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
console.log('response', data);
});   

const cardContainer = document.querySelector('.cards-container');

function createCard(data){
    const card = document.createElement('.div');
    const headline = document.createElement('div');
    const authorPhoto = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    authorPhoto.classList.add('authorPhoto');
    img.src = imgUrl;
    authorName.classList.add('authorName');

    headline.textContent = data.headline;
    authorName.textContent = data.authorName;

    card.appendChild(headline);
    card.appendChild(authorName);
    
    return card;

    }

});
