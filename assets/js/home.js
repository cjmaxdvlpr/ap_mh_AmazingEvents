//Todos los eventos:
function buildHTMLEventsCardList(eventsData){
    let htmlEventsList = "";
    for (let event of eventsData.events) {
            htmlEventsList += buildHTMLEventCard(event);
    }
    return htmlEventsList;
}

console.log("Todos los eventos: ");
console.log(buildHTMLEventsCardList(data));
