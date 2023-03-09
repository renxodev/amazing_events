const eventos = data.events;


let query = location.search;
let params = new URLSearchParams(query);
let id_query = params.get('id');
console.log(params);
console.log(id_query);

 function defineDetails(events){


 return     `
 <div class="card shadow-sm d-flex">
          <figure class="figure">
          <img src="${events.image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${events.name}">
          </figure>
     <div class="card-body">
         <h5 class="card-title bg-opacity-70 text-center">${events.name}</h5>
         <p class="card-text text-center">${events.description}</p>
         <p class="card-price text-center"><small class="text-muted"> Price:${events.price}</small></p>
        <a  class="btn btn-primary" href="javascript:history.back(-1);" role="button">Back</a>
     </div>
 </div>`

 }

function printTemplates(){
    let container = document.querySelector('#cardDetails');
    evento = eventos.find(each => each._id  == id_query);
    console.log(evento);
    let details = defineDetails(evento)
    container.innerHTML = details;
}
printTemplates();