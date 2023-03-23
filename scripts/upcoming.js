let capturedElement = document.getElementById("cardContainerUpcoming");

let cards = ``;

let currentDate = data.currentDate;

for (let one of data.events) {
  if (one.date >= currentDate) {
    let cardTemplate = `
    <div class="col">
    <div class="card shadow-sm d-flex">
             <figure class="figure">
             <img src="${one.image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${one.name}">
             </figure>
        <div class="card-body">
            <h5 class="card-title bg-opacity-70 text-center">${one.name}</h5>
            <p class="card-text text-center">${one.description}</p>
            <p class="card-text text-center">${one.category}</p>
            <p class="card-price text-center"><small class="text-muted"> Price:${one.price}</small></p>
            <a href="#" class="btn btn-primary shadow-sm d-flex justify-content-center ">VER MÁS</a>
        </div>
    </div>
</div>`;
    cards = cards + cardTemplate;
  }
}

capturedElement.innerHTML = cards;

























// function printUpcomingEvents(){
//  let events = data.events;
//  let currentDate = data.currentDate;
//  let eventsUpcoming = [];
//  console.log(eventsUpcoming);
 
//  for (let element of events){
//    if(element.date > currentDate){
//     eventsUpcoming.push(
//         eventsUpcoming(
//             one.image, 
//             one.name, 
//             one.description, 
//             one.price,
//         )
//     );
//     }
//    }
//    let tarjeta = document.getElementById("cardContainerUpcoming");
//    tarjeta.innerHTML = eventsUpcoming.join("");
//    }

// printUpcomingEvents();