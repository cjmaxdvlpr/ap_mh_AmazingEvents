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


function getCategories(eventsData, upcomingEventIndexes){
    let categories = [];
    upcomingEventIndexes.forEach( index => {
        if(!categories.includes(eventsData.events[index].category)){
            categories.push(eventsData.events[index].category);
        }
    });
    return categories;
}



function buildHTMLCategoryCheckboxList(eventsData, upcomingEventIndexes, categories){
    let htmlCategoryCheckboxList = "";
    // let categories = [];
    upcomingEventIndexes.forEach( index => {
        if(categories.includes(eventsData.events[index].category)){
            // categories.push(eventsData.events[index].category);
            htmlCategoryCheckboxList += buildHTMLCategoryCheckbox(eventsData.events[index], ("checkbox_" + index));
        }
    });
    return htmlCategoryCheckboxList;
}

function getCheckboxesStates(checkboxes){
    let states = [];
    for(let checkbox of checkboxes){states.push(checkbox.checked)};
    return states;
}

//TODO: function searchAndCategorySelector(){}
//La función haría la selección de eventos cada vez que se dispara un evento change de alguno 
//de los chekbox, o si se da el evento keyup del input de búsqueda.

function getSelectedEventsByCategoryIndexes(eventsData, upcomingEventIndexes, checkboxes){
    let selectedEventsIndexes = [];
    let checkboxesStates = getCheckboxesStates(checkboxes);
    if(!checkboxesStates.some(state => state == true)){
        selectedEventsIndexes = upcomingEventIndexes;
    }
    else{
        checkboxes.forEach(checkbox => {
            if(checkbox.checked){
                upcomingEventIndexes.forEach(index =>{
                    if(eventsData.events[index].category.toLowerCase() == checkbox.value){
                        selectedEventsIndexes.push(eventsData.events.indexOf(eventsData.events[index]));
                    }

                });
            }
        });
    }
    return selectedEventsIndexes;
}

let upcomingEventIndexes = getUpcomingEventsIndexes(data);
let categories = getCategories(data, upcomingEventIndexes);
console.log("Categorías:")
console.log(categories);
fillCardContainer(buildHTMLEventsOfInterestCardList(data, upcomingEventIndexes), "cardContainer");
fillCheckboxContainer(buildHTMLCategoryCheckboxList(data, upcomingEventIndexes, categories), "checkboxContainer")

//EVENTO: Submit (form) ===========================================
const searchForm = document.querySelector("form")
searchForm.addEventListener("submit", formData)

function formData(event) {
    event.preventDefault();
    dataFromForm = {
        searchKey : event.target[0].value
    }
    console.log(dataFromForm);
}
//==========================================================


//EVENTO: keyup (searchInput) ===========================================
let input = document.getElementById("searchInput");
input.addEventListener("keyup", (event) => {
    let searchKey;
    let htmlSelectedCards = "";
    searchKey = event.target.value.toLowerCase();
    console.log(searchKey);
    upcomingEventIndexes.forEach(index => {
        // console.log(Object.values(data.events[index]).toLowerCase.includes(searchKey));
        // if(data.events[index].title.includes())
        if(searchKey == ""){
            htmlSelectedCards = buildHTMLEventsOfInterestCardList(data, upcomingEventIndexes);
        }
        else if(data.events[index].name.toLowerCase().includes(searchKey) || 
                data.events[index].description.toLowerCase().includes(searchKey)){
            htmlSelectedCards += buildHTMLEventCard(data.events[index]);
        }
    });
    fillCardContainer(htmlSelectedCards, "cardContainer");
})
//=========================================================


//EVENTO: change (checkboxes) ==============================
let checkboxes = document.querySelectorAll("input[type=checkbox]");
console.log(checkboxes);
let checked = [];
let chkStates = [];
for( let checkbox of checkboxes){
    checkbox.addEventListener("change", (event) => {
        checked.push(event.target.checked);
        console.log("evento!");
        console.log(checked);
        chkStates = getCheckboxesStates(checkboxes);
        console.log("Estados:");
        console.log(chkStates);
        console.log("Objeto Checkbox:");
        console.log(checkbox);
        console.log("indices:");
        console.log(getSelectedEventsByCategoryIndexes(data, upcomingEventIndexes, checkboxes));
    })
}



/* let checkedChkbx = checkboxes.filter( checkbox => checkbox.checked == true);
console.log("Checkeados:")
console.log(checkedChkbx) */

// checkedChkbx.forEach(category.)

// let ChkStates = checkboxesStates(checkboxes);

//==========================================================
