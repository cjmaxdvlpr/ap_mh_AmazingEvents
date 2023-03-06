//Eventos futuros:
/* function buildHTMLUpcomingEventsCardList(eventsData){
    let htmlEventsList = "";
    eventsData.events.forEach(event => {
        let index = eventsData.events.indexOf(event);
        if(dateEventSelector(eventsData, index, "upcoming")){
            htmlEventsList += buildHTMLEventCard(event);
        }
    });
    return htmlEventsList;
}

// fillCardContainer(buildHTMLUpcomingEventsCardList(data), "contenedorCartas");
 */


function getUpcomingEventsIndexes(eventsData){
    let indexes = [];
    eventsData.events.forEach( event => {
        let index = eventsData.events.indexOf(event);
        if(dateEventSelector(eventsData, index, "upcoming")){
            // indexes.push((event._id)-1);
            indexes.push(eventsData.events.indexOf(event));
        }
    });
    return indexes;
}

function buildHTMLEventsOfInterestCardList(eventsData,upcomingEventIndexes){
    let htmlEventsList = "";
    upcomingEventIndexes.forEach( index => {
        if(dateEventSelector(eventsData, index, "upcoming")){
            htmlEventsList += buildHTMLEventCard(eventsData.events[index]);
        }
    });
    return htmlEventsList;
}


function buildHTMLCategoryCheckboxList(eventsData, upcomingEventIndexes){
    let htmlCategoryCheckboxList = "";
    let categories = [];
    upcomingEventIndexes.forEach( index => {
        if(!categories.includes(eventsData.events[index].category)){
            categories.push(eventsData.events[index].category);
            htmlCategoryCheckboxList += buildHTMLCategoryCheckbox(eventsData.events[index], ("checkbox_" + index));
        }
    });
    return htmlCategoryCheckboxList;
}

let upcomingEventIndexes = getUpcomingEventsIndexes(data);
fillCardContainer(buildHTMLEventsOfInterestCardList(data, upcomingEventIndexes), "cardContainer");
fillCheckboxContainer(buildHTMLCategoryCheckboxList(data, upcomingEventIndexes), "checkboxContainer")


const searchForm = document.querySelector("form")
searchForm.addEventListener("submit", formData)

function formData(event) {
    event.preventDefault();
    dataFromForm = {
        searchKey : event.target[0].value
    }
    console.log(dataFromForm);
}


