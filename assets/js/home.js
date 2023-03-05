//Todos los eventos:
function buildHTMLEventsCardList(eventsData){
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

