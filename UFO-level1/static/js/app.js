// Using the UFO dataset provided in the form of an array of JavaScript objects, write code
// that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Be sure to make columns for at least the following: date/time, city, state, country, shape, and comment

// Use a date form in your HTML document and write JavaScript code that will listen for events and
// search through the date/time column to find rows that match user input.

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and
// search for UFO sightings using all the columns except comment

// from data.js
var tableData = data;

// Select the filter button
const filter = d3.select("#filter-btn");

// Get a reference to the table body
let tbody = d3.select("tbody");

// Use D3 to add all the ufo data to the table
data.forEach(ufo => {
    const row = tbody.append("tr");
    
    for (key in ufo){
        row.append("td").text(ufo[key]);
    }
});

filter.on("click", function() {

    // Prevent refreshing of the page
    d3.event.preventDefault();

    // Select input element
    const 
        date_input = d3.select("#datetime"),
        city_input = d3.select("#city"),
        state_input = d3.select("#state"),
        country_input = d3.select("#country"),
        shape_input = d3.select("#shape");

    // Assign values for the inputs
    const
        date_value = date_input.property("value"),
        city_value = city_input.property("value"),
        state_value = state_input.property("value"),
        country_value = country_input.property("value"),
        shape_value = shape_input.property("value");

    console.log(date_value);
    console.log(city_value);
    console.log(state_value);
    console.log(country_value);
    console.log(shape_value);

    filteredData = tableData;
    
    if (date_value != "") {
        filteredData = filteredData.filter(sighting => sighting.datetime === date_value);
    }
    if (city_value != "") {
        filteredData = filteredData.filter(sighting => sighting.city === city_value);
    }
    if (state_value != "") {
        filteredData = filteredData.filter(sighting => sighting.state === state_value);
    }
    if (country_value != "") {
        filteredData = filteredData.filter(sighting => sighting.country === country_value);
    }
    if (shape_value != "") {
        filteredData = filteredData.filter(sighting => sighting.shape === shape_value);
    }

    console.log(filteredData);

    d3.selectAll("td").remove();

    filteredData.forEach(ufo => {
        const row = tbody.append("tr");
    
        for (key in ufo){
            row.append("td").text(ufo[key]);
        }
    });
});













