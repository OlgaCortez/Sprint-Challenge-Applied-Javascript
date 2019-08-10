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
          object.keys(res.data.topics).forEach(category =>{
            res.data.topics[category].forEach(topic =>{
              createTab(topic)
            })
          })
        })
        .catch(err => console.log("Hi from Chicago"));   
  }

// function createTab(obj){
//     console.log(data)
//     let parent = document.querySelector(".tabs")

//     //Tab
//     let tab = document.createElement('div');
//     tab.classList.add(tab);
//     parent.appendChild(tab)

//     //Topics
//     let topics = document.createElement('div');
//     topics.setAttribute('src', obj.topics);
//     topics.classList.add(topics);
//     tab.appendChild(topics)

//     //Title
//     let spanTag = document.createElement('span');
//     spanTag.textContent = data.topic;
//     tab.appendChild(spanTag)


// }

onLoad()
