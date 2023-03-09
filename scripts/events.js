console.log(data)
const events = data.events
console.log(events);


function createCard(eventos) {
    let allEvents = []
    for (let one of eventos) {

        var card =
    `<div class="col">
        <div class="card shadow-sm d-flex">
                 <figure class="figure">
                 <img src="${one.image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${one.name}">
                 </figure>
            <div class="card-body">
                <h5 class="card-title bg-opacity-70 text-center">${one.name}</h5>
                <p class="card-text text-center">${one.description}</p>
                <p class="card-price text-center"><small class="text-muted"> Price:${one.price}</small></p>
                <a href="./details.html?id=${one._id}" class="btn btn-primary shadow-sm d-flex justify-content-center ">VER MÁS</a>
            </div>
        </div>
    </div>`

        allEvents.push(card)
    }
   return allEvents
    
}
function printCard(eventos, id){
    let cardevent = document.getElementById(id)
    let card = createCard(eventos)
    cardevent.innerHTML = card.join("")


}


printCard(events,"cardContainer")