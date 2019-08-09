// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

window.addEventListener('load', event => {

const header = document.querySelector('.header-container');

function createHeader(data) {
    
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    title.classList.add('title');
    temp.classList.add('temp');

    date.textContent = data.date;
    title.textContent = data.title;
    temp.textContent = data.temp;

    createHeader.appendChild(date);
    createHeader.appendChild(title);
    createHeaderr.appendChild(temp);

    return header;


}

});
