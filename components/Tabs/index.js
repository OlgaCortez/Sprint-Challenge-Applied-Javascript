// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
 .then( (response) => {
   console.log(response)  
       response.data.topics.forEach( data => {
       const newTopic = Topic(data)
       addingToDomTwo.appendChild(newTopic)
   })
 })
 .catch( (err) => {
   console.log(err)
 })

 function Topic (data) {
   const Topic = document.createElement("div")

   Topic.classList.add("tab")

   Topic.textContent = data
   
   return Topic;
 }

 const addingToDomTwo = document.querySelector(".topics")
 addingToDomTwo.appendChild(Topic())
