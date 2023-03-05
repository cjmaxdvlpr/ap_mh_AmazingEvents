//Eventos futuros:
function buildHTMLUpcomingEventsCardList(eventsData){
    let htmlEventsList = "";
    eventsData.events.forEach(event => {
        let index = eventsData.events.indexOf(event);
        if(dateEventSelector(eventsData, index, "upcoming")){
            htmlEventsList += buildHTMLEventCard(event);
        }
    });
    return htmlEventsList;
}

fillCardContainer(buildHTMLUpcomingEventsCardList(data), "contenedorCartas");
