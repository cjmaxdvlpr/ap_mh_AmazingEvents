//Los eventos pasados:
/* function buildHTMLPastEventsCardList(eventsData){
    let htmlEventsList = "";
    let currentDate = new Date(eventsData.currentDate);
    for (let event of eventsData.events) {
        let eventDate = new Date(event.date);
        if (eventDate < currentDate) {
            htmlEventsList += buildHTMLEventCard(event);
        }
    }
    return htmlEventsList;
} */

function buildHTMLPastEventsCardList(eventsData){
    let htmlEventsList = "";
    eventsData.events.forEach(event => {
        let index = eventsData.events.indexOf(event);
        if(dateEventSelector(eventsData, index, "past")){
            htmlEventsList += buildHTMLEventCard(event);
        }
    });
    return htmlEventsList;
}

fillCardContainer(buildHTMLPastEventsCardList(data), "contenedorCartas");


/* console.log("Eventos pasados: ");
console.log(buildHTMLPastEventsCardList(data)); */

/* let contenedorCartas = document.getElementById("contenedorCartas");
contenedorCartas.innerHTML = buildHTMLPastEventsCardList(data); */
