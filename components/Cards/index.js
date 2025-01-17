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


  function onLoad(){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        
        .then(res => {
          Object.keys(res.data.articles).forEach(category =>{
            res.data.articles[category].forEach(article =>{
              creatCards(article)
            })
          })
        })
        .catch(err => console.log("Hi from Chicago"));   
  }
    
  function creatCards(obj){
    console.log(obj)
    let parent = document.querySelector(".cards-container")
    
    //Card
    let card = document.createElement('div');
    card.classList.add('card')
    parent.appendChild(card)
  
    //headline
    let headline = document.createElement('div');
    headline.classList.add('headline')
    headline.textContent = obj.headline;
    card.appendChild(headline)

    //author
    let author = document.createElement('div');
    author.classList.add('author')
    card.appendChild(author)
    
    //Img
    let img = document.createElement('img');
    img.setAttribute('src', obj.authorPhoto);
    img.setAttribute('alt', `a photo of ${obj.authorName}`);
    img.classList.add("img-container")
    author.appendChild(img)

  
    //span
    let spanTag = document.createElement('span');
    spanTag.textContent = obj.author;
    author.appendChild(spanTag)
    
  }
  
  onLoad()  


