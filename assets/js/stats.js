

let allEventsIndexes = getFilteredByDateEventsIndexes(data, "all");
let upcomingEventIndexes = getFilteredByDateEventsIndexes(data, "upcoming");
let pastEventIndexes = getFilteredByDateEventsIndexes(data, "past");
let categories = getCategories(data, allEventsIndexes);


// let eventsIndexes; // = ????;
// let categories = getCategories(data,eventsIndexes)



const stats = [{
    "Category": "Category1",
    "Revenue": "XXX",
    "PofA": "XX%"                
    },
    {
    "Category": "Category2",
    "Revenue": "YYY",
    "PofA": "YY%"                
    },
    {
    "Category": "Category3",
    "Revenue": "ZZZ",
    "PofA": "ZZ%"                
    }]


function eventPercentageAttendance(event){
    return (Object.values(event)[8] / event.capacity)*100;
}

function eventRevenues(event){
    return Object.values(event)[8] * event.price;
}

// (Object.keys(event)[8] == "estimate")? percent + "% (estimated)": percent  + "%";
// (Object.keys(event)[8] == "estimate")? "$" + revenue + " (estimated)": "$" + revenue;



function highestPercentageAttendanceEvents(allEventsIndexes){
    let highestPercentageAttendanceEventsIndexes = [];
        //Usar método sort() de arrays!!!
    return highestPercentageAttendanceEventsIndexes;
}

function lowestPercentageAttendanceEvents(allEventsIndexes){
    let lowestPercentageAttendanceEventsIndexes = [];
        //Usar método sort() de arrays!!!
    return lowestPercentageAttendanceEventsIndexes;
}

function largerCapacityEvents(allEventsIndexes){
    let largerCapacityEventsIndexes = [];
        //Usar método sort() de arrays!!!
    return largerCapacityEventsIndexes;
}

function getEventsCategoriesStats(eventsData, eventIndexes, categories){
    let categoriesStats = [];
    categories.forEach(category => {
        let categoryRevenues = 0;
        // let categoryPeRcentageOfAtendance;
        let categoryAttendance = 0;
        let categoryCapacity = 0;
        eventIndexes.forEach(index => {
            if(!(Object.keys(eventsData.events[index])[8] == "estimate")){
                console.log(eventsData.events[index].price);
                console.log(eventsData.events[index].assistance);
                console.log(eventsData.events[index].price * eventsData.events[index].assistance);
                categoryRevenues += eventsData.events[index].price * eventsData.events[index].assistance;
                console.log(categoryRevenues);
                categoryAttendance += eventsData.events[index].assistance;
                console.log(categoryAttendance);
                categoryCapacity += eventsData.events[index].capacity;
                console.log(categoryCapacity);
            }
        });
        categoriesStats.push({
            category : category,
            revenues : categoryRevenues,
            percentOfAttendance : (categoryAttendance/categoryCapacity)*100
        });
    })
    return categoriesStats;
}

let upcomingEventsCategoriesStats = getEventsCategoriesStats(data, upcomingEventIndexes, categories);
let pastEventsCategoriesStats = getEventsCategoriesStats(data, upcomingEventIndexes, categories);

console.log(upcomingEventsCategoriesStats);
console.log(pastEventsCategoriesStats);

function fillStatsTable() {

}

function testFillTableCell(eventsData,eventsIndexes,categories) {
    //Tratamos los datos antes de mandarlos a la tabla.
    const table = document.getElementById("upcomingEventsStatsTableBody");
    let selectedValues=[];

    categories.forEach(category => {
        eventsIndexes.forEach(index =>{
            if(eventsData.events[index].category.toLowerCase() == category){
                selectedValues.push(XXXXXX);
            }
        });
    })

    stats.map(stat => {
        let row = table.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = stat.Category;
        let date = row.insertCell(1);
        date.innerHTML = stat.Revenue;
        let code = row.insertCell(2);
        code.innerHTML = stat.PofA;
    });


}





function testFillTableCell(eventsData,eventsIndexes,categories) {
    //Tratamos los datos antes de mandarlos a la tabla.
    const table = document.getElementById("upcomingEventsStatsTableBody");
    stats.map(stat => {
        let row = table.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = stat.Category;
        let date = row.insertCell(1);
        date.innerHTML = stat.Revenue;
        let code = row.insertCell(2);
        code.innerHTML = stat.PofA;
    });


}

function testFillTableCell2(upcomingEventsCategoriesStats,  tableId ) {
    //Tratamos los datos antes de mandarlos a la tabla.
    const table = document.getElementById(tableId);
    upcomingEventsCategoriesStats.map(categoryStats => {
        let row = table.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = categoryStats.category;
        let date = row.insertCell(1);
        date.innerHTML = categoryStats.revenues;
        let code = row.insertCell(2);
        code.innerHTML = categoryStats.percentOfAttendance;
    });


}

//testFillTableCell("acá");
testFillTableCell2(upcomingEventsCategoriesStats, "upcomingEventsStatsTableBody");
