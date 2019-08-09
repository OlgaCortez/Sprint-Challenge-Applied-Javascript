// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


window.addEventListener('load', event => {

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log('response', data);
});

const tabs = document.querySelector('.tabs');

function createTabs(data){
    const tabs = document.createElement('div');
    const topics = document.createElement('div');
    const title = document.createElement('span');

    tabs.classList.add(tabs);
    topics.classList.add(topics);
    title.classList.add(title);

    topics.textContent = data.topics;
    title.textContent = data.title;

    createTabs.appendChild(topics);
    createTabs.appendChild(title);

    return tabs;

}

});
