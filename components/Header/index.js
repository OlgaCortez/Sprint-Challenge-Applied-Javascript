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


function header(data) {
    let parent = document.querySelector(".header-container")
    
    //Header
    let header = document.createElement('div');
    header.classList.add('header')
    parent.appendChild(header)

    //date
    let date = document.createElement('span');
    date.textContent = "SMARCH 28, 2019";
    header.appendChild(date)

    //title
    let title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = "Lambda Times";
    header.appendChild(title)

    //temp
    let temp = document.createElement('span');
    temp.textContent = "98°";
    header.appendChild(temp)
         
}

header()

