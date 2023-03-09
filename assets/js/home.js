//Todos los eventos:
/* function buildHTMLEventsCardList(eventsData){
    let htmlEventsList = "";
    for (let event of eventsData.events) {
            htmlEventsList += buildHTMLEventCard(event);
    }
    return htmlEventsList;
}


fillCardContainer(buildHTMLEventsCardList(data), "contenedorCartas");


//Selección de categorías en el conjunto de cartas seleccionadas
let selectedEvents = []; //Array de eventos seleccionados para completar las cartas de la página
let selectedEventsCategories = [];
selectedEvents.forEach(event => {
    if(!selectedEventsCategories.includes(event.category)){
        selectedEventsCategories.push(event.category);
    }
});

 */

//================================================

function searchEventResponse(){
    let searchKey = document.getElementById("searchInput").value.toLowerCase();
    fillCardContainer(getHTMLSelectedEvents(data, eventsIndexes, checkboxes, searchKey, "all"), "cardContainer");
}

let eventsIndexes = getFilteredByDateEventsIndexes(data, "all");
let categories = getCategories(data, eventsIndexes);

fillCardContainer(buildHTMLEventsOfInterestCardList(data, eventsIndexes, "all"), "cardContainer");
fillCheckboxContainer(buildHTMLCategoryCheckboxList(data, eventsIndexes, categories), "checkboxContainer")


let checkboxes = document.querySelectorAll("input[type=checkbox]");
let input = document.getElementById("searchInput");


//EVENTO: keyup (searchInput) ===========================================
input.addEventListener("keyup", (event) => {
    searchEventResponse();
})

//EVENTO: change (checkboxes) ==============================
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        searchEventResponse()
    })
})
