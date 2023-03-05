

function buildHTMLEventCard(eventData){
    return `<div class="card border-dark rounded-0 m-4" style="width: 15rem;">
        <img src="${eventData.image}" class="card-img-top mt-3 sombreado" alt="food fair">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">${eventData.name}</h5>
            <p class="card-text text-center">${eventData.description}</p>
            <div class="mt-auto">
                <div class="d-flex align-items-center justify-content-between mx-0">
                    <p>Price $${eventData.price}</p>
                    <a href="./details.html" class="btn bg-dark text-light rounded-0 sombreado mb-3">Ver
                        más</a>
                </div>
            </div>
        </div>
    </div>`;
}

function fillCardContainer(cardData, idCardContainer){
    let cardContainer = document.getElementById(idCardContainer);
    cardContainer.innerHTML = cardData;
}

function buildHTMLCategoryCheckbox(eventData, idCheckbox){
    return `<div class="form-check form-check-inline">
    <input class="form-check-input rounded-0 border-dark" type="checkbox" id="${idCheckbox}"
        value="${eventData.category.toLowerCase()}">
    <label class="form-check-label" for="${idCheckbox}">${eventData.category}</label>
</div>`;
}

function fillCheckboxContainer(checkboxData, idCheckboxContainer){
    let checkboxContainer = document.getElementById(idCheckboxContainer);
    checkboxContainer.innerHTML = checkboxData;
}


//=====================================================================================

//Función para seleccionar los eventos que se mostrarán en la página correspondiente.
//La función selectorFunction hará la selección correspondiente tanto por fecha como por las opciones de búsqueda.
function selectEvents(data, selectorFunction){
    let selectedEvents = selectorFunction(data);
    return selectedEvents;
}

//La función devuelve un listado de los índices de los eventos que cumplen con las condiciones deseadas
function getCardsOfInterestIndexes(events, selectorFunction){
    let indexes = [];
    events.forEach( event => () => {
        if(selectorFunction(event)){
            indexes.push((event._id)-1);
        }
    });
    return indexes;
}

//Las siguintes funciones pertenecen a los js específicos de cada página.
//La idea es pasarlas en un arreglo lógico a la función getCardsOfInterestIndexes()
//para que en conjunto decida si esa carta es seleccionable 
function dateEventSelector(eventsData, eventIndex, selector){
    let currentDate = new Date(eventsData.currentDate);
    let eventDate = new Date(eventsData.events[eventIndex].date);
    switch (selector) {
        case "upcoming":
            return (eventDate > currentDate)? true : false;            
        case "past":
            return (eventDate < currentDate)? true : false;            
        default:
            console.error(`Not valid selector: Use "upcoming"/"past"`)
            break;
    }
}

function categoryEventSelector(event){

}

function searchEventSelector(event){

}
