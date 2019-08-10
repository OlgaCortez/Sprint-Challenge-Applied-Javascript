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


function Header(data) {
    let parent = document.querySelector(".header-container")
    
    //Header
    let Header = document.createElement('div');
    Header.classList.add('Header')
    parent.appendChild(Header)

    let spanTag1 = document.createElement('span');
    spanTag1.textContent = data;
    Header.appendChild(spanTag1)

    let title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = data;
    Header.appendChild(title)

    let spanTag2 = document.createElement('span');
    spanTag2.textContent = data;
    Header.appendChild(spanTag2)
    
    return Header;
}

Header();
