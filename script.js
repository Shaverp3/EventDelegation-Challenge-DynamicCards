//add an event listener for Create button

let counter =1;
document.querySelector("#create-btn").addEventListener("click", function(){
    const textAreaValue = document.querySelector("#text").value

    //Build a card component using value from textarea

    const cardComponent = `<article class="card" id="card--${counter}">
    <div>${textAreaValue}</div>
    <div>
        <button id="delete--${counter}">Delete This Card</button>
    </div>
</article>`

document.querySelector("#card-container").innerHTML += cardComponent

counter ++;

})

document.querySelector("#card-container").addEventListener("click", function(){
    if(event.target.id.includes("delete")){
        const idToDelete = event.target.id.split("--")[1]
        const cardToDelete = document.querySelector(`#card--${idToDelete}`)
        cardToDelete.remove()}
})


