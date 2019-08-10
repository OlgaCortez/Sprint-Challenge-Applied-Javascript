// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function onLoad(){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        
        .then(res => {
          Object.keys(res.data.topics).forEach(category =>{
            res.data.topics[category].forEach(topic =>{
              createTab(topic)
            })
          })
        })
        .catch(err => console.log("Hi from Chicago"));   
  }

function createTab(data){
    console.log(data)
    let parent = document.querySelector(".tabs")

    const tab = document.createElement('div');
    tab.classList.add(tab);
    parent.appendChild(tab)

    // const topics = document.createElement('div');
    // topics.classList.add(topics);
    // topics.textContent = data.topics;
    // tabs.appendChild(topics)

    // const spanTag = document.createElement('span');
    // spanTag.textContent = data.topic;
    // tabs.appendChild(spanTag)


    // return tabs;

}

onLoad()
