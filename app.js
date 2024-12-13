const card=document.querySelector("div")
card.id="chocolate"
card.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvMEFNwK4uNM2voxYLXBd6MVF_Fhq0AXlgg&s"width="300px"height="70%">
<p>chocolate</p>
<button>click me</button>`
card.style.border="2px solid black"
card.style.display="inline-block"
card.style.backgroundColor="pink"
card.style.padding="20px"
card.style.marginBottom="10px"

const card1=document.querySelector("span")
 card1.id="card2"
 card1.innerHTML=`<img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"width="300px"height="70%">
 <p>Effiel tower</p>
 <button>click me</button>`
 card1.style.border="2px solid black"
 card1.style.display="inline-block"
 card1.style.backgroundColor="blue"
card1.style.padding="20px"


const newCard=document.createElement("span")
newCard.id="bird"
newCard.innerHTML=`<img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D"width="300px"height="70%">
<p>Bird</p>
<button>click me</button>`
newCard.style.border="2px solid black"
newCard.style.display="inline-block"
newCard.style.backgroundColor="green"
newCard.style.padding="20px"

document.body.appendChild(newCard)


const newCard1=document.createElement("div")
newCard1.id="card4"
newCard1.innerHTML=`<img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"width="300px"height="70%">
<p>tree</p>
<button>click me</button>`
newCard1.style.border="2px solid black"
newCard1.style.display="inline-block"
newCard1.style.backgroundColor="red"
newCard1.style.padding="20px"

document.body.appendChild(newCard1)