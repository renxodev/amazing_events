


// function createCard(eventos) {
//     let allEvents = []
//     for (let one of eventos) {

//         var card =
//     `<div class="col">
//         <div class="card shadow-sm d-flex">
//                  <figure class="figure">
//                  <img src="${one.image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${one.name}">
//                  </figure>
//             <div class="card-body">
//                 <h5 class="card-title bg-opacity-70 text-center">${one.name}</h5>
//                 <p class="card-text text-center">${one.description}</p>
//                 <p class="card-text text-center"><small class="text-black">Category: ${one.category}</small></p>
//                 <p class="card-price text-center"><small class="text-muted">Price:${one.price}</small></p>
//                 <a href="./details.html?id=${one._id}" class="btn btn-primary shadow-sm d-flex justify-content-center ">VER MÁS</a>
//             </div>
//         </div>
//     </div>`

//         allEvents.push(card)
//     }
//    return allEvents
    
// }
// function printCard(eventos, id){
//     let cardevent = document.getElementById(id)
//     let card = createCard(eventos)
//     cardevent.innerHTML = card.join("")


// }
// // printCard(events,"cardContainer")

// async function fetchApi() {
//     try {

//         let urlApi = 'https://api-amazingevents.onrender.com/api/amazing-events'
//         let fetchResponse = await fetch(urlApi)
//         console.log(fetchResponse)  
//         let response = await fetchResponse.json()
//         console.log(response)
//         printCard('#cardContainer', response.events)
//     } catch(error) {
//         console.log('ocurrio un error')
//         console.log(error)
//     }
// }

// fetchApi()

async function fetchApi(){
    try{
      let urlApi = 'https://mh.up.railway.app/api/amazing-events'
      let fetchResponse = await fetch(urlApi)
  /*     console.log(fetchResponse)
   */    let response = await fetchResponse.json()
  /*     console.log(response)
   */    
      createTemplate(response.events)
      
    } catch(error){
        console.log('ocurrio un error')
        console.log(error)
    }
  
    function template(image, name, description, category,  price, id){ 
      return `
   
      <div class="card shadow-sm d-flex">
               <figure class="figure">
               <img src="${image}" class="bd-placeholder-img card-img-top  tamanioFoto" alt="${name}">
               </figure>
          <div class="card-body">
              <h5 class="card-title bg-opacity-70 text-center">${name}</h5>
              <p class="card-text text-center">${description}</p>
              <p class="card-text text-center"><small class="text-black">Category: ${category}</small></p>
             <p class="card-price text-center"><small class="text-muted">Price:${price}</small></p>
              <a href="./details.html?id=${id}" class="btn btn-primary shadow-sm d-flex justify-content-center ">VER MÁS</a>
        </div>
     </div>

        `
      }
      
      function createTemplate(arrayEvents){
      //almacena los events de data
          /* let events = data.events */
      
          //almacena los datos en un array para renderizar las tarjetas
          let templates = []
          
          for (let union of arrayEvents){
      /*         console.log(reunion)
       */        templates.push(template(union.image, union.name, union.description, union.price, union.id))
          }
      
        /*   console.log(templates) */
          let selector = document.getElementById(`cardContainer`)
          selector.innerHTML = templates.join("")
      }

    }

    fetchApi()