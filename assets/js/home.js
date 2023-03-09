
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
