
function searchEventResponse(){
    let searchKey = document.getElementById("searchInput").value.toLowerCase();
    fillCardContainer(getHTMLSelectedEvents(data, pastEventIndexes, checkboxes, searchKey, "past"), "cardContainer");
}

let pastEventIndexes = getFilteredByDateEventsIndexes(data, "past");
let categories = getCategories(data, pastEventIndexes);

fillCardContainer(buildHTMLEventsOfInterestCardList(data, pastEventIndexes, "past"), "cardContainer");
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
