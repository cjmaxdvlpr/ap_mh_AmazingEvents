/* 
function searchEventResponse(){
    let searchKey = document.getElementById("searchInput").value.toLowerCase();
    fillCardContainer(getHTMLSelectedEvents(data, eventsIndexes, checkboxes, searchKey, "all"), "cardContainer");
}

let eventsIndexes = getFilteredByDateEventsIndexes(data, "all");
let categories = getCategories(data, eventsIndexes);

fillCardContainer(buildHTMLEventsOfInterestCardList(data, eventsIndexes, "all"), "cardContainer");
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
})



//======================================================================================= */


async function home(urlApi) {
    try {
        const response = await fetch(urlApi);
        let data = await response.json();
        let eventsIndexes = getFilteredByDateEventsIndexes(data, "all");
        let categories = getCategories(data, eventsIndexes);
        fillCardContainer(buildHTMLEventsOfInterestCardList(data, eventsIndexes, "all"), "cardContainer");
        fillCheckboxContainer(buildHTMLCategoryCheckboxList(categories), "checkboxContainer")

        checkboxes = document.querySelectorAll("input[type=checkbox]");

        //EVENT: keyup (searchInput) ===========================================
        input.addEventListener("keyup", (event) => {
            console.log("keyup");
            searchEventResponse(urlApi);
        })

        //EVENT: change (checkboxes) ==============================
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                console.log("change");
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
        let eventsIndexes = getFilteredByDateEventsIndexes(data, "all");
        fillCardContainer(getHTMLSelectedEvents(data, eventsIndexes, checkboxes, searchKey, "all"), "cardContainer");
    }
    catch(error) {
        console.log("ERROR: " + error)
    }
}

let urlApi = " https://mindhub-xj03.onrender.com/api/amazing";

let checkboxes = document.querySelectorAll("input[type=checkbox]");
let input = document.getElementById("searchInput");
let cleanSearchBarButton = document.getElementById("cleanSearchBarButton");

home(urlApi);
