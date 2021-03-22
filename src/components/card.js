import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // create elements
  const cardWrapper = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');
  const nameSpan = document.createElement('span');

  // assign content and attributes to elements
  cardWrapper.classList.add("card");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = article.headline;
  authorDiv.classList.add("author");
  imageDiv.classList.add("img-container");
  image.setAttribute("src", article.authorPhoto);
  nameSpan.textContent = article.authorName;

  //structure elements
  cardWrapper.appendChild(headlineDiv);
  imageDiv.appendChild(image);
  authorDiv.appendChild(imageDiv);
  authorDiv.appendChild(nameSpan);
  cardWrapper.appendChild(authorDiv);

  //return HTML element
  return cardWrapper
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const target = document.querySelector(selector);
  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => res.data.articles)
    .then(articlesObj => {
      for (const topic in articlesObj) {
        articlesObj[topic].forEach(article => {
          const articleCard = Card(article);
          target.appendChild(articleCard);
        })
      }
    })
    .catch(err => console.warn(err));
}

export { Card, cardAppender }
