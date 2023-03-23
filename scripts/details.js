// const eventos = data.events;


// let query = location.search;
// let params = new URLSearchParams(query);
// let id_query = params.get('id');
// console.log(params);
// console.log(id_query);

//  function defineDetails(events){


//  return     `
//  <div class="card shadow-sm d-flex">
//           <figure class="figure">
//           <img src="${events.image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${events.name}">
//           </figure>
//      <div class="card-body">
//          <h5 class="card-title bg-opacity-70 text-center">${events.name}</h5>
//          <p class="card-text text-center">${events.description}</p>
//          <p class="card-price text-center"><small class="text-muted"> Price:${events.price}</small></p>
//         <a  class="btn btn-primary" href="javascript:history.back(-1);" role="button">Back</a>
//      </div>
//  </div>`

//  }

// function printTemplates(){
//     let container = document.querySelector('#cardDetails');
//     evento = eventos.find(each => each._id  == id_query);
//     console.log(evento);
//     let details = defineDetails(evento)
//     container.innerHTML = details;
// }
// printTemplates();


let fetchURL = "https://mh.up.railway.app/api/amazing-events";
let idDetail = location.search.substring(1);
let articleDetails = document.getElementById("#cardDetails");

async function detailCard() {
  try {
    let eventToPrint = await fetch(fetchURL);
    eventToPrint = await eventToPrint.json();
    eventToPrint = await eventToPrint.events;
    eventToPrint = await eventToPrint.find((currentObj) => {
      return currentObj.id == idDetail;
    });

    const dateOfEvent = new Date(eventToPrint.date);
    let textDateOfEvent = dateOfEvent.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    articleDetails.innerHTML = `
<div class="card details-card">
  <img
    src="${eventToPrint.image}"
    class="card-img-top"
    alt="${eventToPrint.name}">
  <div class="card-body">
    <div class="card-main">
      <h5 class="card-title">${eventToPrint.name}</h5>
      <p class="card-text">${eventToPrint.description}</p>
      <p class="card-date"><i class="bi bi-calendar3"></i> ${textDateOfEvent}</p>
      <p class="card-category">Event Category: ${eventToPrint.category}</p>
      <p class="card-place">Event Place: ${eventToPrint.place}</p>
      <p class="card-capacity">Event Capacity Limited to: ${eventToPrint.capacity.toLocaleString(
        "en-US"
      )} spectators.</p>
    </div>
    <div class="card-foot">
        <p class="price">Price ${eventToPrint.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</p>
    </div>
  </div>
</div>`;

    document.querySelector("title").innerHTML = `${eventToPrint.name} details`;
  } catch (error) {
    console.log(error);
  }
}

detailCard();
