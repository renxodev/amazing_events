// let capturedElement = document.getElementById("cardContainer");

// let cards = ``;

// let currentDate = data.currentDate;

// for (let one of data.events) {
//   if (one.date <= currentDate) {
//     let cardTemplate = `
//     <div class="col">
//     <div class="card shadow-sm d-flex">
//              <figure class="figure">
//              <img src="${one.image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${one.name}">
//              </figure>
//         <div class="card-body">
//             <h5 class="card-title bg-opacity-70 text-center">${one.name}</h5>
//             <p class="card-text text-center">${one.description}</p>
//             <p class="card-text text-center">${one.category}</p>
//             <p class="card-price text-center"><small class="text-muted"> Price:${one.price}</small></p>
//             <a href="#" class="btn btn-primary shadow-sm d-flex justify-content-center ">VER MÁS</a>
//         </div>
//     </div>
// </div>`;
//     cards = cards + cardTemplate;
//   }
// }

// capturedElement.innerHTML = cards;

async function fetchApi(){
  try{
    let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
    let fetchResponse = await fetch(urlApi)
/*     console.log(fetchResponse)
 */    let response = await fetchResponse.json()
/*     console.log(response)
 */    
    createTemplate(response.events)
    
  } catch(error){
      console.log('ocurrio un error')
      //console.log(error)
  }

  function template(image, name, description, price, id){ 
    return `
    <div class="col">
    <div class="card shadow-sm d-flex">
             <figure class="figure">
             <img src="${image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${name}">
             </figure>
        <div class="card-body">
            <h5 class="card-title bg-opacity-70 text-center">${name}</h5>
            <p class="card-text text-center">${description}</p>
            <p class="card-text text-center">${category}</p>
            <p class="card-price text-center"><small class="text-muted"> Price:${price}</small></p>
            <a href="#" class="btn btn-primary shadow-sm d-flex justify-content-center ">VER MÁS</a>
        </div>
    </div>
</div>`;
    }
    
    function createTemplate(arrayEvents){
    //almacena los events de data
        /* let events = data.events */
    
        //almacena los datos en un array para renderizar las tarjetas
        let templates = []
        
        for (let reunion of arrayEvents){
    /*         console.log(reunion)
     */        templates.push(template(reunion.image, reunion.name, reunion.description, reunion.price, reunion.id))
        }
    
      /*   console.log(templates) */
        let selector = document.getElementById(`cards-container-past`)
        selector.innerHTML = templates.join("")
    }
    
    
   /*  createTemplate() */
    

}

fetchApi()