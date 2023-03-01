console.log(data)
const events = data.events
console.log(events);

let allEvents = []

function createCard() {
    for (let one of events) {

        var card =
    `<div class="col">
        <div class="card shadow-sm">
                 <figure class="figure">
                 <img src="${one.image}" class="bd-placeholder-img card-img-top tamanioFoto" alt="${one.name}">
                 </figure>
            <div class="card-body">
                <h5 class="card-title">${one.name}</h5>
                <p class="card-text">${one.description}</p>
                <p class="card-price"><small class="text-muted"> Price:${one.price}</small></p>
                <a href="#" class="btn btn-primary">ver mas</a>
            </div>
        </div>
    </div>`


        {/* <div class="col">
<div class="card shadow-sm">
            <figure class="figure">
                    <img src="${foto}" alt=""  class="bd-placeholder-img card-img-top tamanioFoto">
    </figure>
<div class="card-body">
        <h1 class="d-flex flex-wrap justify-content-center font-title">${titulo}</h1>
        <p class="card-text font-paragraph">${descripcion}</p>
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted fs-6">Price $${precio}</small>
            <div class="button-color">
                <a href="./details.html" class="nav-link btn btn-sm text-light button-color">See more</a>
            </div>
        </div>
    </div>
</div>
</div> */}


        allEvents.push(card)
    }
    let cardevent = document.getElementById("cardContainer")
    console.log(cardevent)
    cardevent.innerHTML = allEvents.join("")
}

createCard()
console.log(allEvents)

