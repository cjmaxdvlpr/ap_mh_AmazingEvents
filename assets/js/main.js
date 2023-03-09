
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


function buildHTMLCategoryCheckbox(category, idCheckbox){
    return `<div class="form-check form-check-inline">
    <input class="form-check-input rounded-0 border-dark" type="checkbox" id="${idCheckbox}"
        value="${category.toLowerCase()}">
    <label class="form-check-label" for="${idCheckbox}">${category}</label>
</div>`;
}

/* function buildHTMLCategoryCheckbox(event, idCheckbox){
    return `<div class="form-check form-check-inline">
    <input class="form-check-input rounded-0 border-dark" type="checkbox" id="${idCheckbox}"
        value="${event.category.toLowerCase()}">
    <label class="form-check-label" for="${idCheckbox}">${event.category}</label>
</div>`;
} */

function buildHTMLNoMatchesCard(){
    return `<div class="card border-dark rounded-0 m-4" style="width: 15rem;">
    <img src="./assets/images/noMatches.png" class="card-img-top mt-3 sombreado" alt="food fair">
    <div class="card-body d-flex flex-column">
        <h5 class="card-title text-center">There are no matches for your search...</h5>
        <p class="card-text text-center">Maybe you want to try something else. We have many interesting events!</p>
    </div>
</div>`
}

function fillCardContainer(htmlCardsData, idCardContainer){
    let cardContainer = document.getElementById(idCardContainer);
    cardContainer.innerHTML = htmlCardsData;
}

function fillCheckboxContainer(htmlCheckboxesData, idCheckboxContainer){
    let checkboxContainer = document.getElementById(idCheckboxContainer);
    checkboxContainer.innerHTML = htmlCheckboxesData;
}


//=====================================================================================

//Función para seleccionar los eventos que se mostrarán en la página correspondiente.
//La función selectorFunction hará la selección correspondiente tanto por fecha como por las opciones de búsqueda.
/* function selectEvents(data, selectorFunction){
    let selectedEvents = selectorFunction(data);
    return selectedEvents;
}

//La función devuelve un listado de los índices de los eventos que cumplen con las condiciones deseadas
function getEventsOfInterestIndexes(events, selectorFunction){
    let indexes = [];
    events.forEach( event => {
        if(selectorFunction){
            // indexes.push((event._id)-1);
            indexes.push(events.indexOf(event));
        }
    });
    return indexes;
}
 */


function dateEventSelector(eventsData, eventIndex, dateSelector){
    let currentDate;
    let eventDate;
    switch (dateSelector) {
        case "upcoming":
            currentDate = new Date(eventsData.currentDate);
            eventDate = new Date(eventsData.events[eventIndex].date);
            return (eventDate > currentDate)? true : false;            
        case "past":
            currentDate = new Date(eventsData.currentDate);
            eventDate = new Date(eventsData.events[eventIndex].date);
            return (eventDate < currentDate)? true : false;            
        case "all":
            return true;
        default:
            console.error(`Not valid selector: Use "upcoming"/"past"/"all"`)
            break;
    }
}


//===========================================================

function getFilteredByDateEventsIndexes(eventsData, dateSelector){
    let indexes = [];
    eventsData.events.forEach( event => {
        let index = eventsData.events.indexOf(event);
        if(dateEventSelector(eventsData, index, dateSelector)){
            indexes.push(eventsData.events.indexOf(event));
        }
    });
    return indexes;
}


function buildHTMLEventsOfInterestCardList(eventsData,eventsOfInterestIndexes,dateSelector){
    let htmlEventsList = "";
    eventsOfInterestIndexes.forEach( index => {
        if(dateEventSelector(eventsData, index, dateSelector)){
            htmlEventsList += buildHTMLEventCard(eventsData.events[index]);
        }
    });
    return htmlEventsList;
}


function getCategories(eventsData, eventsIndexes){
    let categories = [];
    eventsIndexes.forEach( index => {
        if(!categories.includes(eventsData.events[index].category)){
            categories.push(eventsData.events[index].category);
        }
    });
    return categories;
}


function buildHTMLCategoryCheckboxList(eventsData, eventsIndexes, categories){
    let htmlCategoryCheckboxList = "";
    categories.forEach(category => {
        htmlCategoryCheckboxList += buildHTMLCategoryCheckbox(category, ("checkbox_" + categories.indexOf(category)));
    })
    
/*     eventsIndexes.forEach( index => {
        console.log(categories.includes(eventsData.events[index].category));
        console.log(eventsData.events[index].category);
        if(categories.includes(eventsData.events[index].category)){
            htmlCategoryCheckboxList += buildHTMLCategoryCheckbox(eventsData.events[index], ("checkbox_" + index));
        }
    }); */
    return htmlCategoryCheckboxList;
}

/* function buildHTMLCategoryCheckboxList(eventsData, eventsIndexes, categories){
    let htmlCategoryCheckboxList = "";
    eventsIndexes.forEach( index => {
        console.log(categories.includes(eventsData.events[index].category));
        console.log(eventsData.events[index].category);
        if(categories.includes(eventsData.events[index].category)){
            htmlCategoryCheckboxList += buildHTMLCategoryCheckbox(eventsData.events[index], ("checkbox_" + index));
        }
    });
    return htmlCategoryCheckboxList;
} */

//Función en desuso!
function getCheckboxesStates(checkboxes){
    let states = [];
    for(let checkbox of checkboxes){states.push(checkbox.checked)};
    return states;
}

function getSelectedEventsByCategoryIndexes(eventsData, evenstIndexes, checkboxes){
    let selectedEventsIndexes = [];
    let checkboxesStates = getCheckboxesStates(checkboxes);
    if(!checkboxesStates.some(state => state == true)){
        selectedEventsIndexes = evenstIndexes;
    }
    else{
        checkboxes.forEach(checkbox => {
            if(checkbox.checked){
                evenstIndexes.forEach(index =>{
                    if(eventsData.events[index].category.toLowerCase() == checkbox.value){
                        selectedEventsIndexes.push(eventsData.events.indexOf(eventsData.events[index]));
                    }
                });
            }
        });
    }
    return selectedEventsIndexes;
}

function getSelectedEventsBySearchImputIndexes(eventsData, eventIndexes, searchKey){
    let selectedEventsIndexes = [];
    eventIndexes.forEach(index => {
        if(searchKey == ""){
            selectedEventsIndexes = eventIndexes;
        }
        else if(eventsData.events[index].name.toLowerCase().includes(searchKey) || 
                data.events[index].description.toLowerCase().includes(searchKey)){
                selectedEventsIndexes.push(index);
        }
    });
    return selectedEventsIndexes;
}

function eventsSelector(eventsData, eventsIndexes, checkboxes, searchKey){
    let selectedEventsByCheckboxesIndexes = getSelectedEventsByCategoryIndexes(eventsData, eventsIndexes, checkboxes);
    let selectedEventsIndexes = getSelectedEventsBySearchImputIndexes(eventsData, selectedEventsByCheckboxesIndexes, searchKey);
    return selectedEventsIndexes;
}

function getHTMLSelectedEvents(data, eventsIndexes, checkboxes, searchKey, dateSelector){
    let htmlSelectedCards = "";
    selectedEventsIndexes = eventsSelector(data, eventsIndexes, checkboxes, searchKey)
    if(selectedEventsIndexes.length == 0){
        htmlSelectedCards = buildHTMLNoMatchesCard();
    }
    else{
        selectedEventsIndexes.forEach(index => {
            htmlSelectedCards = buildHTMLEventsOfInterestCardList(data, selectedEventsIndexes, dateSelector);
        });
    }
    return htmlSelectedCards;
}
