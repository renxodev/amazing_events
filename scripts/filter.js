function captureData() {
    let texto = document.getElementById('id_search').value
    let check = Array.from(document.querySelectorAll('.check_class:checked')).map(each => each.value)
    console.log(texto)
    console.log(check)
    let createFilter = events.filter(each => {
        return (each.name.toLowerCase().includes(texto))
                && (check.length === 0 || check.includes(each.category))
    
    })
    console.log(createFilter)
    if (createFilter.length > 0){
        printCard(createFilter, "cardContainer")
    } else {
        alert("no hay eventos")
    }
}

captureData()