let category = []

 data.events.forEach(each => {
    if ( ! category.includes(each.category)){
        category.push(each.category)
    }
 })
 console.log(category)

function printCheck(array_tipos) {

    let container = document.querySelector('#checkFilter')
    array_tipos = array_tipos.map(each => {
        return `<div class="d-flex align-items-center"><input onclick="captureData()" class="form-check-input check_class" type="checkbox" value="${each}">
<label class="form-check-label" id="checkFilter"  for="${each}">${each} </label></div>`

    })
    array_tipos.push(`<input onkeyup="captureData()" id="id_search" name="texto" class="form-control me-2" type="search" placeholder="Search">`)
    container.innerHTML = array_tipos.join('');

}

printCheck(category)