
/* function searchEventResponse(){
    let searchKey = document.getElementById("searchInput").value.toLowerCase();
    fillCardContainer(getHTMLSelectedEvents(data, upcomingEventIndexes, checkboxes, searchKey, "upcoming"), "cardContainer");
}

let upcomingEventIndexes = getFilteredByDateEventsIndexes(data, "upcoming");
let categories = getCategories(data, upcomingEventIndexes);

fillCardContainer(buildHTMLEventsOfInterestCardList(data, upcomingEventIndexes, "upcoming"), "cardContainer");
fillCheckboxContainer(buildHTMLCategoryCheckboxList(categories), "checkboxContainer")


let checkboxes = document.querySelectorAll("input[type=checkbox]");
let input = document.getElementById("searchInput");
let cleanSearchBarButton = document.getElementById("cleanSearchBarButton");


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

//EVENTO: click (cleanSearchBarButton) ==============================
cleanSearchBarButton.addEventListener("click", () => {
    checkboxes.forEach(checkbox => checkbox.checked = false)
    input.value = "";
    searchEventResponse()
}) */

//======================================================================================================



async function upcomingEvents(urlApi) {
    try {
        const response = await fetch(urlApi);
        let data = await response.json();
        let upcomingEventIndexes = getFilteredByDateEventsIndexes(data, "upcoming");
        let categories = getCategories(data, upcomingEventIndexes);
        fillCardContainer(buildHTMLEventsOfInterestCardList(data, upcomingEventIndexes, "upcoming"), "cardContainer");
        fillCheckboxContainer(buildHTMLCategoryCheckboxList(categories), "checkboxContainer")

        checkboxes = document.querySelectorAll("input[type=checkbox]");
        
        //EVENT: keyup (searchInput) ===========================================
        input.addEventListener("keyup", (event) => { 
            searchEventResponse(urlApi);
        })

        //EVENT: change (checkboxes) ==============================
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                searchEventResponse(urlApi)
            })
        })

        //EVENT: click (cleanSearchBarButton) ==============================
        cleanSearchBarButton.addEventListener("click", () => {
            checkboxes.forEach(checkbox => checkbox.checked = false)
            input.value = "";
            searchEventResponse(urlApi)
        })
    }
    catch(error) {
        console.log("ERROR: " + error)
    }
}

async function searchEventResponse(urlApi){
    let searchKey = document.getElementById("searchInput").value.toLowerCase();
    try {
        const response = await fetch(urlApi);
        let data = await response.json();
        let upcomingEventIndexes = getFilteredByDateEventsIndexes(data, "upcoming");
        fillCardContainer(getHTMLSelectedEvents(data, upcomingEventIndexes, checkboxes, searchKey, "upcoming"), "cardContainer");
    }
    catch(error) {
        console.log("ERROR: " + error)
    }
}

let urlApi = " https://mindhub-xj03.onrender.com/api/amazing";

let checkboxes = document.querySelectorAll("input[type=checkbox]");
let input = document.getElementById("searchInput");
let cleanSearchBarButton = document.getElementById("cleanSearchBarButton");

upcomingEvents(urlApi);

